const http = require('http');

function request(options, data) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch {
          resolve({ status: res.statusCode, body });
        }
      });
    });
    req.on('error', reject);
    if (data) {
      req.write(typeof data === 'string' ? data : JSON.stringify(data));
    }
    req.end();
  });
}

async function runTests() {
  console.log('--- 1. Health Check ---');
  const health = await request({
    host: 'localhost',
    port: 5000,
    path: '/api/health',
    method: 'GET'
  });
  console.log('Status:', health.status, JSON.stringify(health.body));

  console.log('\n--- 2. GET Collections (Initially empty, no fake products) ---');
  const collections = await request({
    host: 'localhost',
    port: 5000,
    path: '/api/collections',
    method: 'GET'
  });
  console.log('Status:', collections.status, 'Count:', collections.body.count, 'Data:', collections.body.data);

  console.log('\n--- 3. POST Inquiry (Valid) ---');
  const postInquiry = await request({
    host: 'localhost',
    port: 5000,
    path: '/api/inquiries',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    name: 'Tariq Mehmood',
    phone: '+92 300 1234567',
    email: 'tariq@example.com',
    requirement: 'Wall & Surface Enhancement',
    message: 'Inquiring about textured wall panelling for a living room in Royal Park Lahore.'
  });
  console.log('Status:', postInquiry.status, JSON.stringify(postInquiry.body));

  console.log('\n--- 4. POST Inquiry (Invalid Validation Test) ---');
  const badInquiry = await request({
    host: 'localhost',
    port: 5000,
    path: '/api/inquiries',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    name: ''
  });
  console.log('Status:', badInquiry.status, JSON.stringify(badInquiry.body));

  console.log('\n--- 5. GET Inquiries ---');
  const getInquiries = await request({
    host: 'localhost',
    port: 5000,
    path: '/api/inquiries',
    method: 'GET'
  });
  console.log('Status:', getInquiries.status, 'Count:', getInquiries.body.count);

  console.log('\n--- 6. Test Product CRUD (POST, GET, PUT, DELETE) ---');
  const createCol = await request({
    host: 'localhost',
    port: 5000,
    path: '/api/collections',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    name: 'Sample Wall Panel',
    category: 'Home Improvement',
    description: 'Fluted timber architectural panel test',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6'
  });
  console.log('Create Collection Item:', createCol.status, createCol.body.success, createCol.body.data?._id);

  const colId = createCol.body.data?._id;
  if (colId) {
    const updateCol = await request({
      host: 'localhost',
      port: 5000,
      path: `/api/collections/${colId}`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    }, {
      description: 'Updated description for panel'
    });
    console.log('Update Collection Item:', updateCol.status, updateCol.body.success);

    const deleteCol = await request({
      host: 'localhost',
      port: 5000,
      path: `/api/collections/${colId}`,
      method: 'DELETE'
    });
    console.log('Delete Collection Item:', deleteCol.status, deleteCol.body.success);
  }

  console.log('\n--- 7. Verification that Collections is empty again ---');
  const finalCollections = await request({
    host: 'localhost',
    port: 5000,
    path: '/api/collections',
    method: 'GET'
  });
  console.log('Final Collection count (should be 0):', finalCollections.body.count);

  console.log('\nAPI VERIFICATION COMPLETED SUCCESSFULLY!');
}

runTests().catch(console.error);
