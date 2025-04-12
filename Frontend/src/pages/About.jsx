import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Over Ons</h1>
          <p className="subtitle">Passie voor Vakmanschap & Luxe Tassen</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Ons Verhaal</h2>
            <p>Designer Bag Repair is opgericht vanuit passie voor vakmanschap en liefde voor designer tassen.</p>
            <p>Met meer dan 15 jaar ervaring in het repareren en onderhouden van luxe tassen, bieden wij de hoogste kwaliteit service voor uw waardevolle bezittingen.</p>
          </div>
          <div className="image-content">
            <img src="/images/workshop.jpg" alt="Onze werkplaats" className="story-image" />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="content-wrapper">
          <h2>Onze Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">
                <img src="/images/icons/craftsmanship.svg" alt="Vakmanschap" />
              </div>
              <h3>Vakmanschap</h3>
              <p>Jarenlange ervaring in het restaureren van luxe tassen</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <img src="/images/icons/quality.svg" alt="Kwaliteit" />
              </div>
              <h3>Kwaliteit</h3>
              <p>Gebruik van authentieke materialen van de hoogste kwaliteit</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <img src="/images/icons/service.svg" alt="Service" />
              </div>
              <h3>Service</h3>
              <p>Persoonlijke aandacht en advies voor elke klant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="content-wrapper">
          <h2>Ons Team</h2>
          <p className="team-intro">Ons team van vakmensen werkt met de beste materialen en technieken om uw designer tas in optimale conditie te houden of te herstellen.</p>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/team/craftsman1.jpg" alt="Vakman" />
              <h3>Jane Hanel</h3>
              <p>Meester Restaurateur</p>
            </div>
            <div className="team-member">
              <img src="/images/team/craftsman2.jpg" alt="Vakvrouw" />
              <h3>Emma De Vries</h3>
              <p>Leder Specialist</p>
            </div>
            <div className="team-member">
              <img src="/images/team/craftsman3.jpg" alt="Vakman" />
              <h3>Thomas Peeters</h3>
              <p>Restauratie Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="content-wrapper">
          <div className="values-content">
            <h2>Onze Waarden</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Authenticiteit</h3>
                <p>Wij geloven in het behoud van de originele kwaliteit en uitstraling van uw tas</p>
              </div>
              <div className="value-item">
                <h3>Duurzaamheid</h3>
                <p>Door reparatie en onderhoud verlengen we de levensduur van uw kostbare items</p>
              </div>
              <div className="value-item">
                <h3>Expertise</h3>
                <p>Continue training en ontwikkeling van onze vakmensen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="content-wrapper">
          <h2>Vertrouw Uw Designer Tas Toe aan Experts</h2>
          <p>Ontdek hoe wij uw waardevolle tas kunnen herstellen en onderhouden</p>
          <Link to="/contact" className="cta-button">Maak Een Afspraak</Link>
        </div>
      </section>
    </div>
  );
}

export default About;