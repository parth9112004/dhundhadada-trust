import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import '../../styles/events.css';

const Events = () => {
  const eventsList = [
    {
      id: 1,
      title: 'ભાદરવી પૂનમનો મેળો',
      date: '૨૯ સપ્ટેમ્બર',
      time: 'સવારે ૬:૦૦ થી રાત્રે ૧૨:૦૦',
      location: 'મંદિર પ્રાંગણ, વરલ',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80',
      description: 'દર વર્ષની જેમ આ વર્ષે પણ ભાદરવી પૂનમના પવિત્ર દિવસે ભવ્ય મેળાનું અને મહાપ્રસાદનું આયોજન કરવામાં આવ્યું છે.'
    },
    {
      id: 2,
      title: 'અન્નકૂટ મહોત્સવ',
      date: '૧૩ નવેમ્બર',
      time: 'બપોરે ૧૨:૩૦ કલાકે',
      location: 'મુખ્ય મંદિર, વરલ',
      image: 'https://images.unsplash.com/photo-1605369680325-1e0bc8729577?auto=format&fit=crop&q=80',
      description: 'નવા વર્ષના શુભ પ્રારંભે ભગવાનને ૫૬ ભોગનો અન્નકૂટ ધરાવવામાં આવશે. સર્વે ભક્તોને દર્શનનો લાભ લેવા વિનંતી.'
    },
    {
      id: 3,
      title: 'શ્રીમદ્ ભાગવત સપ્તાહ',
      date: '૧૫ થી ૨૨ ડિસેમ્બર',
      time: 'બપોરે ૩:૦૦ થી ૬:૦૦',
      location: 'સત્સંગ હોલ, વરલ',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80',
      description: 'પરમ પૂજ્ય સંતોના મુખાર્વિંદેથી શ્રીમદ્ ભાગવત કથાનું આયોજન કરવામાં આવ્યું છે. કથા શ્રવણનો લાભ લેવા પધારશો.'
    }
  ];

  return (
    <section id="events" className="section events-section">
      <div className="container">
        <h2 className="section-title">આગામી ઉત્સવો અને કાર્યક્રમો</h2>
        <p className="section-subtitle">મંદિર દ્વારા આયોજિત આગામી ધાર્મિક કાર્યક્રમો અને ઉત્સવોની માહિતી</p>
        
        <div className="events-grid">
          {eventsList.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} loading="lazy" />
                <div className="event-date">{event.date}</div>
              </div>
              
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                
                <div className="event-meta">
                  <span><Clock size={16} /> {event.time}</span>
                  <span><MapPin size={16} /> {event.location}</span>
                </div>
                
                <p className="event-desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
