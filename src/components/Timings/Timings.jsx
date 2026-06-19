import React from 'react';
import '../../styles/timings.css';
import { CheckCircle2 } from 'lucide-react';

const Timings = () => {
  return (
    <section id="timings" className="section darshan-facilities-section">
      <div className="container">
        <h2 className="section-title">દર્શન સમય અને સુવિધાઓ</h2>
        <p className="section-subtitle">ભક્તો માટે મંદિરમાં દર્શનનો સમય અને ઉપલબ્ધ સુવિધાઓ</p>
        
        <div className="timing-facility-row">
          {/* SECTION 1: દર્શન સમય */}
          <div className="df-section-wrapper timing-wrapper" data-aos="fade-up" data-aos-delay="100">
            <h3 className="df-section-title" style={{ textAlign: 'left' }}>🕉️ દર્શન સમય</h3>
            <div className="df-card premium-timing-card">
              
              <ul className="timing-schedule">
                <li>
                  <div className="time-indicator"></div>
                  <div className="time-content">
                    <h4>સવારે મંગળા આરતી</h4>
                    <p>5:30 વાગ્યે</p>
                  </div>
                </li>
                <li>
                  <div className="time-indicator"></div>
                  <div className="time-content">
                    <h4>સાંજની આરતી</h4>
                    <p>7:00 વાગ્યે</p>
                  </div>
                </li>
                <li>
                  <div className="time-indicator"></div>
                  <div className="time-content">
                    <h4>સવારે દર્શન શરૂ</h4>
                    <p>6:00 વાગ્યાથી</p>
                  </div>
                </li>
                <li>
                  <div className="time-indicator"></div>
                  <div className="time-content">
                    <h4>સતત દર્શન</h4>
                    <p>દર્શન સવારથી સાંજ સુધી સતત ઉપલબ્ધ રહેશે</p>
                  </div>
                </li>
              </ul>

              <div className="highlighted-info-card">
                <div className="info-icon">💡</div>
                <div className="info-text">
                  <h4>નોંધ</h4>
                  <p>મંદિર સવારથી સાંજ સુધી દર્શન માટે ખુલ્લું રહે છે.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: ભક્તોની સુવિધાઓ */}
          <div className="df-section-wrapper facility-wrapper" data-aos="fade-up" data-aos-delay="200">
            <h3 className="df-section-title" style={{ textAlign: 'left' }}>🛕 ભક્તોની સુવિધાઓ</h3>
            
            <div className="facility-grid">
              <div className="facility-card">
                <div className="facility-icon">🏠</div>
                <div className="facility-content">
                  <h4>રહેવાની સુવિધા</h4>
                  <p>યાત્રિકો માટે સસ્તી રહેવાની વ્યવસ્થા</p>
                </div>
              </div>

              <div className="facility-card">
                <div className="facility-icon">🍛</div>
                <div className="facility-content">
                  <h4>નિશુલ્ક ભોજન</h4>
                  <p>ભક્તોને પ્રસાદ રૂપે ભોજન આપવામાં આવે છે</p>
                </div>
              </div>

              <div className="facility-card">
                <div className="facility-icon">🚗</div>
                <div className="facility-content">
                  <h4>પાર્કિંગ સુવિધા</h4>
                  <p>વાહનો માટે સુરક્ષિત પાર્કિંગ</p>
                </div>
              </div>

              <div className="facility-card">
                <div className="facility-icon">📹</div>
                <div className="facility-content">
                  <h4>CCTV સુરક્ષા વ્યવસ્થા</h4>
                  <p>ભક્તોની સુરક્ષા અને મંદિરની સંપત્તિના સંરક્ષણ માટે મંદિર પરિસર તથા તમામ મુખ્ય સ્થળોએ 24×7 CCTV કેમેરા દ્વારા સતત દેખરેખ રાખવામાં આવે છે.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: વિશેષ નોંધ */}
        <div className="df-section-wrapper notice-wrapper" data-aos="fade-up" data-aos-delay="300">
          <div className="df-card premium-notice-card">
            <h3 className="df-card-title warning-title"><span>🔔</span> વિશેષ નોંધ</h3>
            
            <ul className="notice-list">
              <li><CheckCircle2 size={18} className="notice-bullet" /> રાત્રે મંદિરના મુખ્ય દરવાજા બંધ કરવામાં આવે છે.</li>
              <li><CheckCircle2 size={18} className="notice-bullet" /> જો કોઈ ભક્ત રાત્રિના સમયે આવે તો કૃપા કરીને મંદિર ટ્રસ્ટ અથવા મંદિરના સ્વામીશ્રીનો સંપર્ક કરવો.</li>
              <li><CheckCircle2 size={18} className="notice-bullet" /> મંદિરની પવિત્રતા અને સંપત્તિનું જતન રાખવું.</li>
              <li><CheckCircle2 size={18} className="notice-bullet" /> મંદિરને કોઈપણ પ્રકારનું નુકસાન પહોંચાડવું નહીં.</li>
              <li><CheckCircle2 size={18} className="notice-bullet" /> તમામ ભક્તોએ મંદિરના નિયમો અને સૂચનાઓનું પાલન કરવું.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timings;
