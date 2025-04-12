import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Designer Bag Repair</h1>
          <p>Expertisecentrum voor designer tassen reparatie in België</p>
          <Link to="/services" className="cta-button">Ontdek Onze Diensten</Link>
        </div>
      </section>

      {/* Featured Services */}
      <section className="services-section">
        <h2>Onze Specialiteiten</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/images/repair-service.jpg" alt="Tas reparatie service" />
            <h3>Professionele Reparatie</h3>
            <p>Vakkundige reparatie van uw kostbare designer tassen</p>
          </div>
          <div className="service-card">
            <img src="/images/restoration.jpg" alt="Tas restauratie" />
            <h3>Restauratie</h3>
            <p>Gedetailleerde restauratie van vintage designer items</p>
          </div>
          <div className="service-card">
            <img src="/images/cleaning.jpg" alt="Tas reiniging" />
            <h3>Reiniging</h3>
            <p>Specialistische reiniging voor alle materialen</p>
          </div>
        </div>
      </section>

      {/* Luxury Brands Section */}
      <section className="brands-section">
        <h2>Wij Werken Met Alle Luxe Merken</h2>
        <div className="brands-grid">
          <div className="brand-logo">
            <img src="/images/brand1.png" alt="Luxury brand" />
          </div>
          <div className="brand-logo">
            <img src="/images/brand2.png" alt="Luxury brand" />
          </div>
          <div className="brand-logo">
            <img src="/images/brand3.png" alt="Luxury brand" />
          </div>
          <div className="brand-logo">
            <img src="/images/brand4.png" alt="Luxury brand" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Wat Onze Klanten Zeggen</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Uitstekende service en perfecte reparatie van mijn vintage Chanel tas."</p>
            <span className="client-name">- Marie V.</span>
          </div>
          <div className="testimonial-card">
            <p>"Zeer professioneel team met oog voor detail. Mijn tas ziet er weer als nieuw uit!"</p>
            <span className="client-name">- Sophie D.</span>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <h2>Laat Uw Tas Herstellen Door Experts</h2>
        <p>Neem contact met ons op voor een vrijblijvende consultatie</p>
        <Link to="/contact" className="cta-button">Contact Opnemen</Link>
      </section>
    </div>
  );
}

export default Home;