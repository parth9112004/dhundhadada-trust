import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import '../../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('તમારો સંદેશ સફળતાપૂર્વક મોકલવામાં આવ્યો છે. આભાર!');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">સંપર્ક કરો</h2>
        <p className="section-subtitle">મંદિર સુધી પહોંચવા અથવા કોઈપણ માહિતી માટે અમારો સંપર્ક કરો</p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'var(--maroon)' }}>
              સંપર્ક માહિતી
            </h3>
            
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
          
          <div className="contact-form-container">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'var(--maroon)' }}>
              સંદેશ મોકલો
            </h3>
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
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="form-control" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  pattern="[0-9]{10}"
                  placeholder="૧૦ આંકડાનો મોબાઈલ નંબર"
                />
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
              
              <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <Send size={18} /> સંદેશ મોકલો
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
