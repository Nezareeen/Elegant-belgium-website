import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="thank-you-page">
      <div className="container">
        <div className="thank-you-content">
          <h1>Bedankt voor uw bestelling!</h1>
          <p className="order-number">Bestelnummer: #12345</p>
          <p>We hebben uw bestelling ontvangen en zijn deze aan het verwerken.</p>
          <p>Een bevestiging is verzonden naar uw e-mailadres.</p>
          
          <div className="order-details">
            <h2>Bestelgegevens</h2>
            <div className="order-info">
              <div className="info-group">
                <h3>Bezorgadres</h3>
                <p>Jan Janssen</p>
                <p>Hoofdstraat 123</p>
                <p>1000 Brussel</p>
                <p>België</p>
              </div>
              <div className="info-group">
                <h3>Betaalmethode</h3>
                <p>Creditcard</p>
              </div>
              <div className="info-group">
                <h3>Verzendmethode</h3>
                <p>Standaard verzending</p>
                <p>Geschatte levering: 3-5 werkdagen</p>
              </div>
            </div>
          </div>
          
          <div className="thank-you-buttons">
            <Link to="/" className="btn primary">Terug naar Home</Link>
            <Link to="/shop" className="btn secondary">Verder Winkelen</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;