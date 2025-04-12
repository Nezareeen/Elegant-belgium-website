import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Designer Bag Repair</h3>
            <p>Expertisecentrum voor designer tassen reparatie in België</p>
          </div>
          <div className="footer-section">
            <h3>Navigatie</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Over Ons</Link></li>
              <li><Link to="/services">Diensten</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@designerbagrepair.be</p>
            <p>Tel: +32 123 456 789</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Designer Bag Repair. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;