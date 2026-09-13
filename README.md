# Hassan Interior — Premium Full-Stack Web Application

A full-stack, architectural home-improvement and interior studio website built for **Hassan Interior** located at **Beadon Rd, Royal Park Lahore, 54000, Pakistan**.

---

## 1. Design Concept

**"MINIMAL ARCHITECTURAL INTERIOR STUDIO"**
- **Dominant Brand Color**: Pure White (`#FFFFFF`)
- **Secondary Tones**: Off White (`#F7F6F3`), Warm Beige (`#E8E1D9`), Light Gray (`#E5E5E2`), Charcoal (`#222222`), Deep Black (`#111111`), Muted Gray (`#777777`), Warm Accent (`#B39A82`).
- **Visual Identity**: Architectural grids, generous whitespace, thin structural lines, high-contrast serif & clean sans-serif typography, large curated interior photography, asymmetric compositions, and sophisticated micro-interactions.

---

## 2. Business Details (Strictly Authentic)

- **Business Name**: Hassan Interior
- **Category**: Home Improvement Store
- **Phone Number**: `+92 322 4045703` (Active `tel:+923224045703` on all call triggers)
- **Store Location**: Beadon Rd, Royal Park Lahore, 54000, Pakistan
- **Google Maps**: [Direct Directions Query](https://www.google.com/maps/search/?api=1&query=Beadon+Rd%2C+Royal+Park+Lahore%2C+54000%2C+Pakistan)
- **Social Channel**: [Official Facebook Page](https://facebook.com/texturez.pk/)

---

## 3. Technology Stack

- **Frontend**:
  - React 18
  - Vite
  - Tailwind CSS
  - React Router DOM v6
  - Lucide React Icons
  - Custom SEO & Meta tags
  - Custom Lightbox modal for architectural gallery
- **Backend**:
  - Node.js & Express.js
  - MongoDB & Mongoose (with resilient fallback handling)
  - CORS, dotenv, and RESTful APIs
  - Input validation & secure error handling

---

## 4. Website Pages

1. **Home (`/`)**:
   - Image-first architectural hero with vertical tag `00 / STUDIO LAHORE`, minimal heading *"Refining the Spaces You Live In"*, floating location badge, and scroll indicator.
   - Visual Introduction: *"Spaces Shape the Way We Feel"*.
   - Architectural Asymmetric Grid (4 blocks: Home Improvement, Interior Solutions, Collections, Inspiration).
   - Full-width editorial Featured Space: *"Make Space Feel Like Yours"*.
   - Process roadmap: *"From Idea to Interior"* (01 Understand, 02 Plan, 03 Style, 04 Refine).
   - Minimalist black CTA with direct call link.
2. **About (`/about`)**:
   - Editorial magazine layout with large vertical imagery, typography, and clean information panels.
   - Genuine copy covering home improvement, interior aesthetics, functional spaces, and decorative guidance.
3. **Home Improvement (`/home-improvement`)**:
   - Magazine-style editorial layout highlighting 4 core disciplines: Wall & Surface Enhancement, Room Styling, Furniture Coordination, and Decorative Improvements.
4. **Interior Solutions (`/interior-solutions`)**:
   - Visual storytelling with vertical scroll-based composition (Living Spaces, Furniture & Arrangement, Colors & Materials, Finishing Touches).
5. **Collections (`/collections`)**:
   - Connected to `/api/collections` REST API.
   - Category filtering (Living Room, Bedroom, Interior Decor, Home Improvement).
   - Loading skeletons and required empty state (*"Collections will be updated soon."*).
6. **Inspiration (`/inspiration`)**:
   - Pinterest/editorial moodboard layout featuring Modern Living, Warm Interiors, Minimal Spaces, and Statement Details.
7. **Gallery (`/gallery`)**:
   - Architectural masonry grid with vertical, horizontal, wide, and detail crops.
   - Interactive Lightbox with keyboard navigation (Esc, Left, Right).
8. **Contact (`/contact`)**:
   - Split layout with store location details, direct call links, Google Maps directions, and Facebook link.
   - Validated inquiry form connected to `POST /api/inquiries` with loading, success (*"Thank you. Your inquiry has been submitted."*), and error states.
9. **404 Not Found (`*`)**:
   - Custom *"Space Not Found"* page with *"Return Home"* action.

---

## 5. API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Returns server status and database connectivity state |
| `POST` | `/api/inquiries` | Submits and validates a customer inquiry |
| `GET` | `/api/inquiries` | Retrieves inquiries sorted by latest |
| `GET` | `/api/collections` | Retrieves collection items (supports `?category=...`) |
| `GET` | `/api/collections/:id` | Retrieves a single collection item |
| `POST` | `/api/collections` | Adds a new collection item |
| `PUT` | `/api/collections/:id` | Updates an existing collection item |
| `DELETE` | `/api/collections/:id` | Deletes a collection item |

---

## 6. Running Locally

### Install Dependencies
```bash
npm run install-all
```

### Start Both Frontend & Backend Concurrently
```bash
npm run dev
```
- Frontend will run on: `http://localhost:5173`
- Backend will run on: `http://localhost:5000`

### Run Backend Alone
```bash
npm run server
```

### Run Frontend Alone
```bash
npm run client
```

### Test Production Build
```bash
npm run build
```

### Run API Verification Suite
```bash
cd server && npm test
```
