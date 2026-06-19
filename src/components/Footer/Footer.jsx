import React, { useState, useEffect } from 'react';
import { ArrowUp, MapPin, Phone } from 'lucide-react';
import '../../styles/footer.css';

const FacebookIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <img
              src="/temple-logo.png"
              alt="જય ધુંધાદાદા - શામળાદાદા"
              style={{
                height: '120px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                marginBottom: '25px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))'
              }}
            />
            <p>
              વરલ સ્થિત આ પ્રાચીન અને પવિત્ર મંદિર લાખો ભક્તોની અતૂટ શ્રદ્ધાનું કેન્દ્ર છે.
              અહીંની આધ્યાત્મિક શાંતિ અને ભગવાનની દિવ્યતા જીવનમાં નવી પ્રેરણા અને શાંતિ પ્રદાન કરે છે.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>ઝડપી લિંક્સ</h4>
            <ul>
              <li><a href="#home">મુખ્ય પૃષ્ઠ</a></li>
              <li><a href="#about">મંદિર વિશે</a></li>
              <li><a href="#timings">દર્શનનો સમય</a></li>
              <li><a href="#gallery">ફોટો ગેલેરી</a></li>
              <li><a href="#events">આગામી ઉત્સવો</a></li>
              <li><a href="#contact">સંપર્ક કરો</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>સંપર્ક માહિતી</h4>
            <ul>
              <li>
                <div className="footer-contact-icon">
                  <MapPin size={18} />
                </div>
                <span>વરલ, તા. સિહોર, જિ. ભાવનગર, ગુજરાત - ૩૬૪૨૪૦</span>
              </li>
              <li>
                <div className="footer-contact-icon">
                  <Phone size={18} />
                </div>
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} શ્રી ધુંધાદાદા - શામળાદાદા મંદિર, વરલ. Official Temple Portal • Secure, Trusted & Maintained by Temple Trust.</p>
        </div>
      </div>

      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
