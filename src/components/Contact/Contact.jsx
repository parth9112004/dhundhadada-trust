import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import '../../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbwTLBLXWDYf59MX3LeLJEzpn2iMsjyvVgF_I34c9q8bVBlMO1-BhiB4Ayv6mtSDHg/exec";

    // Prefix with a single quote character so Google Sheets stores as plain text
    // This prevents Google Sheets from treating +91 as a formula (which causes #ERROR!)
    const rawPhone = `${formData.countryCode} ${formData.phone}`;
    const payload = {
      name: formData.name,
      phone: `'${rawPhone}`,   // leading apostrophe forces plain text in Sheets
      message: formData.message
    };

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });

      toast.custom((t) => (
          <div
            style={{
              boxShadow: '0 8px 30px rgba(139, 0, 0, 0.15)',
              borderRadius: '12px',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              background: '#fff',
              minWidth: '320px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              opacity: t.visible ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--maroon)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <p style={{ color: 'var(--maroon)', fontWeight: '600', fontSize: '1.05rem', margin: 0, fontFamily: 'var(--font-primary)' }}>
                તમારો સંદેશ સફળતાપૂર્વક મોકલવામાં આવ્યો છે.
              </p>
            </div>
            {/* Progress Bar Line */}
            <div style={{ width: '100%', height: '4px', background: 'rgba(212, 175, 55, 0.2)' }}>
              <div 
                style={{ 
                  height: '100%', 
                  background: 'var(--golden)', 
                  animation: `toast-progress ${t.duration}ms linear forwards`
                }} 
              />
            </div>
          </div>
      ), { duration: 3000 });
      
      
      setFormData({ name: "", countryCode: "+91", phone: "", message: "" });

    } catch (error) {
      console.log(error);
      toast.error("સંદેશ મોકલવામાં ભૂલ આવી છે. ફરી પ્રયાસ કરો.");
    }

    setIsSubmitting(false);
  };


  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">સંપર્ક કરો</h2>
        <p className="section-subtitle">મંદિર સુધી પહોંચવા અથવા કોઈપણ માહિતી માટે અમારો સંપર્ક કરો</p>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
            <h3 className="contact-subtitle">સંપર્ક માહિતી</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h4>સરનામું</h4>
                <p>શ્રી ધુંધાદાદા અને શામળાદાદા મંદિર,<br />વરલ ગામ, તાલુકો: સિહોર,<br />જિલ્લો: ભાવનગર, ગુજરાત - ૩૬૪૨૪૦</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4>ફોન નંબર</h4>
                <p>+91 98765 43210<br />+91 99887 76655</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h4>ઈમેલ</h4>
                <p>info@dhundhadadatemple.org<br />contact@dhundhadadatemple.org</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container" data-aos="fade-left" data-aos-delay="200">
            <h3>સંદેશ મોકલો</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">તમારું નામ *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="અહીં તમારું પૂરું નામ લખો"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">મોબાઈલ નંબર *</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <select
                    name="countryCode"
                    className="form-control"
                    style={{ width: '120px', padding: '14px 10px', appearance: 'auto' }}
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+64">+64 (NZ)</option>
                    <option value="+27">+27 (SA)</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    style={{ flex: 1 }}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9\-\s]{10,15}"
                    title="કૃપા કરીને સાચો મોબાઈલ નંબર દાખલ કરો"
                    placeholder="અહીં તમારો મોબાઈલ નંબર લખો"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">તમારો સંદેશ *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="તમારો પ્રશ્ન અથવા સંદેશ અહીં લખો..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn-primary ${isSubmitting ? 'btn-loading' : ''}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 size={20} className="spinner-icon" />
                ) : (
                  <Send size={18} />
                )}
                {isSubmitting ? 'સંદેશ મોકલાઈ રહ્યો છે...' : 'સંદેશ મોકલો'}
              </button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14838.293448450125!2d71.9567!3d21.6023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958bc5555555555%3A0x5555555555555555!2sVaral%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Temple Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
