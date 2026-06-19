import React from 'react';
import { Bell } from 'lucide-react';
import '../../styles/announcements.css';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      date: '19 જૂન, 2026',
      title: 'શાંતિ અને સ્વચ્છતા અંગે સૂચના',
      description: 'તમામ ભક્તજનોને વિનંતી છે કે મંદિર પરિસરમાં શાંતિ જાળવો, સ્વચ્છતા રાખો અને પવિત્ર વાતાવરણને જાળવવામાં સહયોગ આપો.'
    },
    {
      id: 2,
      date: '19 જૂન, 2026',
      title: 'દાન અને સેવા માટે આમંત્રણ',
      description: 'મંદિરના વિકાસ, ધાર્મિક કાર્યક્રમો તથા વિવિધ સેવાકીય પ્રવૃત્તિઓને વધુ સશક્ત બનાવવા માટે ભક્તજનોને દાન અને સેવાકાર્યમાં સહભાગી થવા હાર્દિક આમંત્રણ આપવામાં આવે છે. આપનો નાનો સહયોગ પણ મંદિર અને સમાજના કલ્યાણમાં મહત્વપૂર્ણ યોગદાન આપી શકે છે.'
    },
    {
      id: 3,
      date: '19 જૂન, 2026',
      title: 'સેવા એ જ સાચી ભક્તિ',
      description: 'મંદિરના વિકાસ અને સમાજહિતના કાર્યોમાં આપનો સહયોગ અમૂલ્ય છે. દાન, સમય અથવા સેવાકાર્ય દ્વારા જોડાઈને ધર્મસેવામાં ભાગીદાર બનો.'
    }

  ];

  return (
    <section className="section announcements-section">
      <div className="container">
        <h2 className="section-title">મંદિરની મહત્વપૂર્ણ જાણકારીઓ</h2>
        <p className="section-subtitle">ભક્તજનોના લાભાર્થે મહત્વપૂર્ણ સૂચનાઓ અને જાણકારીઓ</p>

        <div className="announcements-container">
          {announcements.map((item, index) => (
            <div 
              key={item.id} 
              className="announcement-item"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="announcement-icon">
                <Bell size={24} />
              </div>
              <div className="announcement-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="announcement-date">પ્રકાશિત તારીખ: {item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
