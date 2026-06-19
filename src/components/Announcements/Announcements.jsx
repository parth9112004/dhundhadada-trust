import React from 'react';
import { Bell } from 'lucide-react';
import '../../styles/announcements.css';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      date: '૧૫ ઓક્ટોબર, ૨૦૨૩',
      title: 'મંદિરના સમયમાં શિયાળા દરમિયાન ફેરફાર',
      description: 'શિયાળાની ઋતુ શરૂ થતી હોવાથી, મંગળા આરતીનો સમય સવારે ૬:૩૦ કલાકનો રહેશે. સર્વે ભક્તોએ નોંધ લેવા વિનંતી.'
    },
    {
      id: 2,
      date: '૨ નવેમ્બર, ૨૦૨૩',
      title: 'સ્વચ્છતા અભિયાન',
      description: 'મંદિર અને તેની આસપાસના વિસ્તારમાં દર રવિવારે સ્વચ્છતા અભિયાન ચલાવવામાં આવશે. ગામના યુવાનોને જોડાવા અપીલ.'
    },
    {
      id: 3,
      date: '૧૦ નવેમ્બર, ૨૦૨૩',
      title: 'કોરોના ગાઈડલાઈનનું પાલન',
      description: 'મંદિરમાં આવતા સમયે ભીડ ન કરવા અને દર્શનની લાઇનમાં વ્યવસ્થા જાળવવા મંદિર સમિતિની વિનંતી છે.'
    }
  ];

  return (
    <section className="section announcements-section">
      <div className="container">
        <h2 className="section-title">નવીનતમ સૂચનાઓ</h2>
        <p className="section-subtitle">મંદિર ટ્રસ્ટ અને વ્યવસ્થાપક સમિતિ તરફથી અગત્યની જાહેરાતો</p>
        
        <div className="announcements-container">
          {announcements.map(item => (
            <div key={item.id} className="announcement-item">
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
