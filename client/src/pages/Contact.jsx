import React, { useState } from 'react';
import { Phone, MapPin, ExternalLink, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'Wall & Surface Enhancement',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Beadon Rd, Royal Park Lahore, 54000, Pakistan");

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required';
    }
    if (formData.email && formData.email.trim()) {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address';
      }
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit inquiry');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        requirement: 'Wall & Surface Enhancement',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError(err.message || 'Network error occurred. Please try calling directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-studio-white pt-24 sm:pt-28 pb-20">
      <SEO 
        title="Contact Us" 
        description="Connect with Hassan Interior for home-improvement, room styling, and surface solutions in Lahore. Call +92 322 4045703 or visit Beadon Rd, Royal Park."
      />

      {/* Header */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-16 border-b border-studio-lightgray">
        <div className="max-w-3xl">
          <span className="arch-tag block mb-2">07 / CONTACT &bull; STORE</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-studio-black font-normal leading-[1.15] mb-4">
            Connect With Hassan Interior
          </h1>
          <p className="text-sm sm:text-base text-studio-muted font-light leading-relaxed">
            Reach out to schedule an in-store discussion, inquire about home improvement products, or consult on room enhancements.
          </p>
        </div>
      </section>

      {/* Split Architectural Layout */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =========================================================
              LEFT COLUMN: Business Details, Phone, Address, Maps, Social
              ========================================================= */}
          <div className="lg:col-span-5 space-y-8 bg-studio-offwhite/50 border border-studio-lightgray p-8 sm:p-12">
            <div>
              <span className="font-mono text-xs tracking-widest text-studio-accent uppercase block mb-2 font-bold">
                COMMENCE THE CONVERSATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-studio-black leading-tight">
                Let&apos;s Improve Your Space
              </h2>
            </div>

            {/* Store Information Details */}
            <div className="space-y-6 pt-4 border-t border-studio-lightgray text-sm">
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-studio-muted block mb-1">
                  BUSINESS NAME
                </span>
                <p className="font-serif text-xl text-studio-black">
                  Hassan Interior
                </p>
                <p className="font-mono text-xs tracking-wider text-studio-muted mt-0.5">
                  Home Improvement Store
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-studio-muted block mb-1">
                  DIRECT PHONE
                </span>
                <a
                  href="tel:+923224045703"
                  className="inline-flex items-center gap-2 text-base sm:text-lg font-mono font-medium text-studio-black hover:text-studio-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-studio-accent" />
                  <span>+92 322 4045703</span>
                </a>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-studio-muted block mb-1">
                  STORE LOCATION
                </span>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-studio-accent flex-shrink-0 mt-0.5" />
                  <address className="not-italic text-studio-charcoal leading-relaxed text-sm">
                    Beadon Rd,<br />
                    Royal Park Lahore,<br />
                    54000,<br />
                    Pakistan
                  </address>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-semibold text-studio-black hover:text-studio-accent underline underline-offset-4"
                >
                  <span>Open Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Official Social Media: Only Facebook */}
            <div className="pt-6 border-t border-studio-lightgray">
              <span className="font-mono text-[10px] tracking-widest uppercase text-studio-muted block mb-2">
                OFFICIAL SOCIAL CHANNEL
              </span>
              <a
                href="https://facebook.com/texturez.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-4 border border-studio-lightgray bg-studio-white text-xs uppercase tracking-wider font-mono text-studio-black hover:border-studio-black hover:bg-studio-offwhite transition-colors"
              >
                <span>Hassan Interior on Facebook</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Functional Contact Form with Validation
              ========================================================= */}
          <div className="lg:col-span-7 bg-studio-white border border-studio-lightgray p-8 sm:p-12">
            
            {submitSuccess ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-14 h-14 mx-auto border border-studio-black flex items-center justify-center bg-studio-offwhite">
                  <CheckCircle2 className="w-8 h-8 text-studio-black" />
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl text-studio-black">
                  Thank you. Your inquiry has been submitted.
                </h3>
                
                <p className="text-xs sm:text-sm text-studio-muted font-light max-w-md mx-auto leading-relaxed">
                  Our team has received your message and will review your home improvement requirements. You may also call us directly at <span className="font-mono font-medium text-studio-black">+92 322 4045703</span>.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-3 bg-studio-black text-studio-white text-xs uppercase tracking-widest font-mono hover:bg-studio-charcoal transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <span className="arch-tag block mb-1">INQUIRY FORM</span>
                  <h3 className="font-serif text-2xl text-studio-black">
                    Send Us Your Requirements
                  </h3>
                </div>

                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-studio-charcoal mb-1.5 font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Mehmood"
                    className={`w-full px-4 py-3 bg-studio-white border text-sm text-studio-black focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-studio-lightgray focus:border-studio-black'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Phone Number & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-mono text-[11px] uppercase tracking-wider text-studio-charcoal mb-1.5 font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 1234567"
                      className={`w-full px-4 py-3 bg-studio-white border text-sm text-studio-black focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-studio-lightgray focus:border-studio-black'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 font-mono">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-wider text-studio-charcoal mb-1.5 font-medium">
                      Email Address <span className="text-studio-muted font-normal text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 bg-studio-white border text-sm text-studio-black focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-studio-lightgray focus:border-studio-black'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Requirement Select */}
                <div>
                  <label htmlFor="requirement" className="block font-mono text-[11px] uppercase tracking-wider text-studio-charcoal mb-1.5 font-medium">
                    Requirement Type
                  </label>
                  <select
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-studio-white border border-studio-lightgray text-sm text-studio-black focus:outline-none focus:border-studio-black transition-colors"
                  >
                    <option value="Wall & Surface Enhancement">Wall &amp; Surface Enhancement</option>
                    <option value="Room Styling">Room Styling</option>
                    <option value="Furniture Coordination">Furniture Coordination</option>
                    <option value="Decorative Improvements">Decorative Improvements</option>
                    <option value="Store Product Consultation">Store Product Consultation</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-wider text-studio-charcoal mb-1.5 font-medium">
                    Message / Space Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your room dimensions, surface ideas, or specific requirements..."
                    className={`w-full px-4 py-3 bg-studio-white border text-sm text-studio-black focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-studio-lightgray focus:border-studio-black'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-studio-black text-studio-white uppercase text-xs tracking-widest font-semibold hover:bg-studio-charcoal transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Inquiry...</span>
                      </>
                    ) : (
                      <span>Submit Inquiry</span>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
