import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Events.css';

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Designer Bag Care Workshop",
      date: "24 Juni 2024",
      time: "14:00 - 16:00",
      location: "Antwerpen Centrum",
      description: "Leer de basics van luxe tassenonderhoud tijdens onze exclusieve workshop."
    },
    {
      id: 2,
      title: "Vintage Collectie Evaluatie",
      date: "15 Juli 2024",
      time: "10:00 - 17:00",
      location: "Brussel",
      description: "Laat uw vintage designer tassen evalueren door onze experts."
    },
    {
      id: 3,
      title: "Lederen Accessoires Masterclass",
      date: "8 Augustus 2024",
      time: "13:00 - 15:30",
      location: "Gent",
      description: "Een diepgaande masterclass over het onderhoud van lederen accessoires."
    }
  ];

  return (
    <div className="events-container">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content">
          <h1>Evenementen</h1>
          <p className="subtitle">Ontdek Onze Exclusieve Workshops & Events</p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <div className="content-wrapper">
          <h2>Komende Evenementen</h2>
          <div className="events-grid">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-date-badge">
                  <span className="date">{event.date}</span>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-details">
                    <div className="detail-item">
                      <span className="icon">⏰</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="detail-item">
                      <span className="icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p>{event.description}</p>
                  <Link to="/contact" className="event-cta">Reserveer Uw Plaats</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="content-wrapper">
          <div className="newsletter-content">
            <h2>Blijf op de Hoogte</h2>
            <p>Schrijf u in voor onze nieuwsbrief en ontvang als eerste updates over nieuwe evenementen</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Uw e-mailadres" className="newsletter-input" />
              <button type="submit" className="newsletter-button">Inschrijven</button>
            </form>
          </div>
        </div>
      </section>

      {/* Private Events Section */}
      <section className="private-events">
        <div className="content-wrapper">
          <div className="private-events-content">
            <h2>Privé Evenementen</h2>
            <p>Organiseer een exclusief evenement voor uw groep of bedrijf</p>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">✨</div>
                <h3>Workshops op Maat</h3>
                <p>Gepersonaliseerde workshops voor uw team of vrienden</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👜</div>
                <h3>Collectie Evaluaties</h3>
                <p>Expert evaluatie van uw designer tassen collectie</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎓</div>
                <h3>Educatieve Sessies</h3>
                <p>Leer alles over het onderhoud van luxe accessoires</p>
              </div>
            </div>
            <Link to="/contact" className="private-events-cta">Plan Uw Privé Event</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;