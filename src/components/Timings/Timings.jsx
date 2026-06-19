import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import '../../styles/timings.css';

const Timings = () => {
  return (
    <section id="timings" className="section timings-section">
      <div className="container">
        <h2 className="section-title">દર્શનનો સમય</h2>
        <p className="section-subtitle">ભક્તો માટે મંદિરમાં દર્શન અને આરતીનો સમયપત્રક</p>
        
        <div className="timings-grid">
          <div className="timing-card">
            <Sun className="timing-icon" />
            <h3>સવારના દર્શન</h3>
            <div className="timing-list">
              <div className="timing-item">
                <span className="timing-name">મંદિર ખૂલવાનો સમય</span>
                <span className="timing-time">સવારે ૫:૩૦ કલાકે</span>
              </div>
              <div className="timing-item">
                <span className="timing-name">મંગળા આરતી</span>
                <span className="timing-time">સવારે ૬:૦૦ કલાકે</span>
              </div>
              <div className="timing-item">
                <span className="timing-name">શણગાર દર્શન</span>
                <span className="timing-time">સવારે ૭:૧૫ કલાકે</span>
              </div>
              <div className="timing-item">
                <span className="timing-name">રાજભોગ આરતી</span>
                <span className="timing-time">બપોરે ૧૨:૦૦ કલાકે</span>
              </div>
            </div>
          </div>
          
          <div className="timing-card">
            <Moon className="timing-icon" />
            <h3>સાંજના દર્શન</h3>
            <div className="timing-list">
              <div className="timing-item">
                <span className="timing-name">મંદિર ખૂલવાનો સમય</span>
                <span className="timing-time">બપોરે ૪:૦૦ કલાકે</span>
              </div>
              <div className="timing-item">
                <span className="timing-name">સંધ્યા આરતી</span>
                <span className="timing-time">સાંજે ૭:૩૦ કલાકે (સૂર્યાસ્ત સમયે)</span>
              </div>
              <div className="timing-item">
                <span className="timing-name">શયન આરતી</span>
                <span className="timing-time">રાત્રે ૮:૪૫ કલાકે</span>
              </div>
              <div className="timing-item">
                <span className="timing-name">મંદિર બંધ થવાનો સમય</span>
                <span className="timing-time">રાત્રે ૯:૦૦ કલાકે</span>
              </div>
            </div>
          </div>
          
          <div className="timing-card">
            <Sparkles className="timing-icon" />
            <h3>વિશેષ નોંધ</h3>
            <div className="timing-list">
              <p style={{ marginTop: '15px', color: 'var(--gray-600)', lineHeight: '1.6' }}>
                પૂનમ, અમાસ અને તહેવારોના દિવસે દર્શનના સમયમાં ફેરફાર થઈ શકે છે. ગ્રહણના સમયે મંદિર સંપૂર્ણપણે બંધ રહેશે.
                <br /><br />
                <strong>ખાસ વિનંતી:</strong> મંદિરમાં દર્શન માટે આવતા તમામ ભક્તોને શાંતિ અને પવિત્રતા જાળવવા વિનંતી છે.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timings;
