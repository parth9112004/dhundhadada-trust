import React from 'react';
import { History, Star, Heart } from 'lucide-react';
import '../../styles/about.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">મંદિર વિશે</h2>
        <p className="section-subtitle">પવિત્ર યાત્રાધામ વરલ નો ગૌરવશાળી ઇતિહાસ</p>
        
        <div className="about-grid">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&q=80" 
              alt="Temple View" 
            />
          </div>
          
          <div className="about-content">
            <h3>દિવ્યતા અને શ્રદ્ધાનું પ્રતીક</h3>
            <p>
              વરલ ગામમાં આવેલું શ્રી ધુંધાદાદા અને શ્રી શામળાદાદાનું આ પવિત્ર મંદિર ભક્તો માટે અતૂટ શ્રદ્ધાનું કેન્દ્ર છે.
              વર્ષોથી અહીં હજારો શ્રદ્ધાળુઓ પોતાની મનોકામના પૂર્ણ થવાની આશા સાથે આવે છે. અહીનું શાંત વાતાવરણ 
              અને પવિત્રતા મનને અનોખી શાંતિ પ્રદાન કરે છે.
            </p>
            <p>
              સવારની મંગળા આરતી થી લઈને સાંજની સંધ્યા આરતી સુધી, આખો દિવસ અહીં ભક્તિમય વાતાવરણ જોવા મળે છે.
              દરેક તહેવારો અહીં ખૂબ જ ધામધૂમથી અને ભક્તિભાવ પૂર્વક ઉજવવામાં આવે છે.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <History size={24} />
                </div>
                <div className="feature-text">
                  <h4>ઐતિહાસિક ધરોહર</h4>
                  <p>વર્ષો જૂનો ભવ્ય અને પ્રેરણાદાયક ઇતિહાસ</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Star size={24} />
                </div>
                <div className="feature-text">
                  <h4>દિવ્ય અનુભૂતિ</h4>
                  <p>આધ્યાત્મિક શાંતિ અને દિવ્યતા નો સાક્ષાત્કાર</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Heart size={24} />
                </div>
                <div className="feature-text">
                  <h4>અતૂટ શ્રદ્ધા</h4>
                  <p>લાખો ભક્તોની આસ્થા અને શ્રદ્ધાનું કેન્દ્ર</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
