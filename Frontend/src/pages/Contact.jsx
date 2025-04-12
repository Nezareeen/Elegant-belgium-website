import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Neem Contact Op</h1>
          <p>Wij staan klaar om u te helpen met al uw vragen</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>Contact Informatie</h3>
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h4>Adres</h4>
                <p>Elegant Straat 123<br />1000 Brussel, België</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h4>Telefoon</h4>
                <p>+32 123 45 67 89</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@elegantbelgium.be</p>
              </div>
            </div>
          </div>

          <div className="opening-hours">
            <h3>Openingstijden</h3>
            <div className="hours-item">
              <span>Maandag - Vrijdag</span>
              <span>09:00 - 18:00</span>
            </div>
            <div className="hours-item">
              <span>Zaterdag</span>
              <span>10:00 - 17:00</span>
            </div>
            <div className="hours-item">
              <span>Zondag</span>
              <span>Gesloten</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Naam</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Onderwerp</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Bericht</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Verstuur Bericht
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;