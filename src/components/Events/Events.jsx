import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import '../../styles/events.css';

const Events = () => {
  const eventsList = [
    {
      id: 1,
      title: 'મકવાણા પરિવારનું સ્નેહમિલન',
      date: '20 નવેમ્બર 2026',
      time: 'સવારે 10:00 થી સાંજે 5:00',
      location: 'મુખ્ય મંદિર, વરલ',
      image: '/snehmilan.png',
      description: 'મકવાણા પરિવાર દ્વારા આયોજિત સ્નેહમિલન કાર્યક્રમમાં પરિવારના સભ્યો એકત્રિત થઈ ધાર્મિક પ્રવૃત્તિઓ, સત્સંગ, ભજન-કીર્તન અને પ્રસાદીનો લાભ લેશે. આ કાર્યક્રમનો મુખ્ય હેતુ પરિવારજનો વચ્ચે એકતા, પ્રેમ અને સાંસ્કૃતિક મૂલ્યોનું જતન કરવાનો છે. તમામ પરિવારજનોને સમયસર ઉપસ્થિત રહેવા વિનંતી.'
    },
    {
      id: 2,
      title: 'ભજન સંધ્યા અને સાહિત્યિક કાર્યક્રમ',
      date: 'તારીખ અંગેની માહિતી જલ્દી અપાશે..',
      time: 'સાંજે 8:00 વાગ્યાથી',
      location: 'મુખ્ય મંદિર, વરલ',
      image: '/bhajan.png',
      description: 'મંદિર ખાતે ભવ્ય ભજન સંધ્યા અને સાહિત્યિક કાર્યક્રમનું આયોજન કરવામાં આવ્યું છે. કાર્યક્રમમાં પ્રસિદ્ધ ભજન ગાયક કલાકારો તેમજ જાણીતા સાહિત્યકારો ઉપસ્થિત રહી ભક્તિમય ભજનો, કાવ્યો અને આધ્યાત્મિક પ્રવચનો દ્વારા ભક્તોને ભાવવિભોર કરશે. આ પવિત્ર અવસરનો લાભ લેવા તમામ હરિભક્તોને પરિવાર સાથે હાજર રહેવા ભાવભરી વિનંતી.'
    },
    {
      id: 3,
      title: 'તુલસી વિવાહ મહોત્સવ',
      date: '20 થી 21 નવેમ્બર 2026',
      time: 'સાંજે 5:00 થી સાંજે 8:00',
      location: 'મુખ્ય મંદિર, વરલ',
      image: '/tulsi.png',
      description: 'કારતક સુદ એકાદશીના પાવન અવસરે ભગવાન શ્રી વિષ્ણુ અને માતા તુલસીજીના દિવ્ય વિવાહોત્સવનું ભવ્ય આયોજન કરવામાં આવ્યું છે. વૈદિક મંત્રોચ્ચાર, પૂજન-અર્ચન અને ભજન-કીર્તન સાથે તુલસી વિવાહ સંપન્ન કરવામાં આવશે. તમામ હરિભક્તોને આ પવિત્ર મહોત્સવમાં હાજર રહી ધર્મલાભ લેવા ભાવભરી વિનંતી.'
    }
  ];

  return (
    <section id="events" className="section events-section">
      <div className="container">
        <h2 className="section-title">આગામી ધાર્મિક આયોજનો</h2>
        <p className="section-subtitle">મંદિર ખાતે યોજાનારા ધાર્મિક કાર્યક્રમો અને વિશેષ ઉત્સવોની માહિતી. 🙏🛕</p>

        <div className="events-grid">
          {eventsList.map((event, index) => (
            <div
              key={event.id}
              className="event-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
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
