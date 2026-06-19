import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import '../../styles/gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filters = [
    { id: 'all', label: 'બધા ફોટા' },
    { id: 'temple', label: 'મંદિર' },
    { id: 'festival', label: 'ઉત્સવો' },
    { id: 'darshan', label: 'દર્શન' }
  ];

  const images = [
    { id: 1, category: 'temple', src: 'https://images.unsplash.com/photo-1599813589945-8f6a9e1e1d0f?auto=format&fit=crop&q=80', alt: 'મંદિરનો બહારનો નજારો' },
    { id: 2, category: 'darshan', src: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&q=80', alt: 'ભગવાનના દિવ્ય દર્શન' },
    { id: 3, category: 'festival', src: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80', alt: 'નવરાત્રી મહોત્સવ' },
    { id: 4, category: 'temple', src: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80', alt: 'આરતીનો સમય' },
    { id: 5, category: 'darshan', src: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80', alt: 'પુષ્પ શણગાર' },
    { id: 6, category: 'festival', src: 'https://images.unsplash.com/photo-1605369680325-1e0bc8729577?auto=format&fit=crop&q=80', alt: 'દિવાળી ઉત્સવ' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title">ફોટો ગેલેરી</h2>
        <p className="section-subtitle">મંદિરના કેટલાક સુંદર અને દિવ્ય દ્રશ્યોની ઝલક</p>
        
        <div className="gallery-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="gallery-grid">
          {filteredImages.map((img, index) => (
            <div 
              key={img.id} 
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setLightboxImg(img.src)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <Maximize2 className="gallery-overlay-icon" />
                <h4 className="gallery-overlay-text">{img.alt}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
            <X size={40} />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightboxImg} alt="Enlarged view" className="lightbox-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
