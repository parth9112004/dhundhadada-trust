import React from 'react';
import { ChevronDown } from 'lucide-react';
import '../../styles/hero.css';

const Hero = () => {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-greeting">|| શ્રી ગણેશાય નમઃ ||</span>
        <h1 className="hero-title">જય ધુંધાદાદા - જય શામળાદાદા</h1>
        <p className="hero-subtitle">
          વરલ મુકામે આવેલ ઐતિહાસિક અને પવિત્ર ધુંધાદાદા તથા શામળાદાદાના મંદિરમાં આપનું હાર્દિક સ્વાગત છે. 
          અહીંની દિવ્ય શાંતિ અને આધ્યાત્મિક વાતાવરણનો અનુભવ કરો.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => document.querySelector('#timings').scrollIntoView({behavior: 'smooth'})}>
            દર્શનનો સમય
          </button>
          <button className="btn-outline" onClick={() => document.querySelector('#events').scrollIntoView({behavior: 'smooth'})}>
            આગામી ઉત્સવો
          </button>
        </div>
      </div>
      
      <a href="#about" className="hero-scroll" onClick={scrollToAbout}>
        <ChevronDown size={40} />
      </a>
    </section>
  );
};

export default Hero;
