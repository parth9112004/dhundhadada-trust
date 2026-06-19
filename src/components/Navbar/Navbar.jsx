import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../../styles/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = document.querySelectorAll('section[id]');
      let currentPath = '/';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjust the offset to trigger when section is roughly in the middle of the screen
        if (window.scrollY >= sectionTop - window.innerHeight / 2) {
          const id = section.getAttribute('id');
          currentPath = id === 'home' ? '/' : '/' + id;
        }
      });

      setActiveSection((prevPath) => {
        if (prevPath !== currentPath) {
          window.history.replaceState(null, '', currentPath);
          return currentPath;
        }
        return prevPath;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'મુખ્ય પૃષ્ઠ', path: '/' },
    { name: 'મંદિર વિશે', path: '/about' },
    { name: 'દર્શનનો સમય', path: '/timings' },
    { name: 'ગેલેરી', path: '/gallery' },
    { name: 'ઉત્સવો', path: '/events' },
    { name: 'સંપર્ક', path: '/contact' }
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Convert path to ID (e.g. /about -> #about, / -> #home)
    const targetId = path === '/' ? '#home' : '#' + path.substring(1);
    const element = document.querySelector(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL with actual path instead of hash
      window.history.pushState(null, '', path);
      setActiveSection(path);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="nav-logo" onClick={(e) => handleNavClick(e, '/')}>
          <img
            src="/temple-logo.png"
            alt="જય ધુંધાદાદા - શામળાદાદા"
            className="navbar-brand-logo"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.path} 
                className={`nav-link ${activeSection === link.path ? 'active' : ''}`} 
                onClick={(e) => handleNavClick(e, link.path)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(e, link.path)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
