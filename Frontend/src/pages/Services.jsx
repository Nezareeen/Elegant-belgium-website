import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

function Services() {
  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Onze Diensten</h1>
          <p className="subtitle">Expertise in Luxe Tassenreparatie</p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services">
        <div className="content-wrapper">
          <div className="service-item">
            <div className="service-image">
              <img src="/images/services/repair.jpg" alt="Reparatie service" />
            </div>
            <div className="service-details">
              <h2>Professionele Reparatie</h2>
              <p className="service-description">
                Onze experts herstellen uw luxe tassen met de grootste zorg en precisie. 
                Van kleine reparaties tot uitgebreide restauraties, wij behandelen elk detail met vakmanschap.
              </p>
              <ul className="service-features">
                <li>Leder reparatie en restauratie</li>
                <li>Vervangen van sluitingen en hardware</li>
                <li>Naad- en stikselreparaties</li>
                <li>Kleur- en materiaalrestauratie</li>
              </ul>
              <Link to="/contact" className="service-cta">Afspraak Maken</Link>
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-image">
              <img src="/images/services/maintenance.jpg" alt="Onderhoud service" />
            </div>
            <div className="service-details">
              <h2>Preventief Onderhoud</h2>
              <p className="service-description">
                Regelmatig onderhoud verlengt de levensduur van uw kostbare tas. 
                Ons team biedt specialistische behandelingen voor optimale bescherming.
              </p>
              <ul className="service-features">
                <li>Professionele reiniging</li>
                <li>Leder conditioning</li>
                <li>Beschermende behandeling</li>
                <li>Kleurherstel en -bescherming</li>
              </ul>
              <Link to="/contact" className="service-cta">Meer Informatie</Link>
            </div>
          </div>

          <div className="service-item">
            <div className="service-image">
              <img src="/images/services/restoration.jpg" alt="Restauratie service" />
            </div>
            <div className="service-details">
              <h2>Vintage Restauratie</h2>
              <p className="service-description">
                Geef uw vintage designer tas een tweede leven. 
                Onze restauratie-experts combineren traditionele technieken met moderne technologie.
              </p>
              <ul className="service-features">
                <li>Complete restauratie</li>
                <li>Authentieke materialen</li>
                <li>Kleurherstel en -vernieuwing</li>
                <li>Structurele reparaties</li>
              </ul>
              <Link to="/contact" className="service-cta">Ontdek Meer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="content-wrapper">
          <h2>Ons Proces</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultatie</h3>
              <p>Grondige inspectie en persoonlijk advies</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Diagnose</h3>
              <p>Gedetailleerde analyse en behandelplan</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Uitvoering</h3>
              <p>Vakkundige reparatie of restauratie</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Kwaliteitscontrole</h3>
              <p>Uitgebreide controle en nazorg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Work With */}
      <section className="brands-we-service">
        <div className="content-wrapper">
          <h2>Merken die wij behandelen</h2>
          <div className="luxury-brands">
            <div className="brand-item">
              <img src="/images/brands/brand1.png" alt="Luxury brand" />
            </div>
            <div className="brand-item">
              <img src="/images/brands/brand2.png" alt="Luxury brand" />
            </div>
            <div className="brand-item">
              <img src="/images/brands/brand3.png" alt="Luxury brand" />
            </div>
            <div className="brand-item">
              <img src="/images/brands/brand4.png" alt="Luxury brand" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="services-cta">
        <div className="content-wrapper">
          <h2>Laat Uw Tas Herstellen Door Experts</h2>
          <p>Neem contact met ons op voor een vrijblijvende consultatie</p>
          <Link to="/contact" className="cta-button">Contact Opnemen</Link>
        </div>
      </section>
    </div>
  );
}

export default Services;