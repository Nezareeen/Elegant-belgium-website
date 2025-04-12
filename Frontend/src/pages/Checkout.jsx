import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    houseNumber: '',
    addition: '',
    city: '',
    postalCode: '',
    country: 'België',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Voer een geldig e-mailadres in';
    }

    // Phone validation (Dutch/Belgian format)
    if (!formData.phone.match(/^(\+31|0)[0-9]{9,10}$/)) {
      newErrors.phone = 'Voer een geldig telefoonnummer in';
    }

    // Postal code validation (Dutch/Belgian format)
    if (!formData.postalCode.match(/^[1-9][0-9]{3}\s?[A-Z]{2}$/i)) {
      newErrors.postalCode = 'Voer een geldige postcode in (bijv. 1234 AB)';
    }

    // Card number validation
    if (!formData.cardNumber.match(/^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/)) {
      newErrors.cardNumber = 'Voer een geldig kaartnummer in';
    }

    // Expiry date validation
    if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      newErrors.expiryDate = 'Voer een geldige vervaldatum in (MM/JJ)';
    }

    // CVV validation
    if (!formData.cvv.match(/^[0-9]{3,4}$/)) {
      newErrors.cvv = 'Voer een geldige CVV in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      // Redirect to success page or show success message
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1 className="checkout-title">Afrekenen</h1>
        
        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Verzendgegevens</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">Voornaam</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Jan"
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Achternaam</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Jansen"
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mailadres</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jan@voorbeeld.nl"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefoonnummer</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="0612345678"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                <div className="form-group full-width">
                  <label htmlFor="address">Straatnaam</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Hoofdstraat"
                  />
                  {errors.address && <span className="error-message">{errors.address}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="houseNumber">Huisnummer</label>
                  <input
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    value={formData.houseNumber}
                    onChange={handleChange}
                    required
                    placeholder="123"
                  />
                  {errors.houseNumber && <span className="error-message">{errors.houseNumber}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="addition">Toevoeging</label>
                  <input
                    type="text"
                    id="addition"
                    name="addition"
                    value={formData.addition}
                    onChange={handleChange}
                    placeholder="A"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">Plaats</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Amsterdam"
                  />
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Postcode</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    placeholder="1234 AB"
                  />
                  {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="country">Land</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="België">België</option>
                    <option value="Nederland">Nederland</option>
                    <option value="Frankrijk">Frankrijk</option>
                    <option value="Duitsland">Duitsland</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Betalingsgegevens</h2>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="cardNumber">Kaartnummer</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234 5678 9012 3456"
                  />
                  {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                </div>
                <div className="form-group full-width">
                  <label htmlFor="cardName">Naam op kaart</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    placeholder="J. Jansen"
                  />
                  {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">Vervaldatum</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    placeholder="MM/JJ"
                  />
                  {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    placeholder="123"
                  />
                  {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                </div>
              </div>
            </div>

            <div className="form-actions">
              <Link to="/cart" className="back-to-cart">Terug naar winkelwagen</Link>
              <button 
                type="submit" 
                className="place-order-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Bezig met verwerken...' : 'Bestelling plaatsen'}
              </button>
            </div>
          </form>

          <div className="order-summary">
            <h2>Bestellingsoverzicht</h2>
            <div className="summary-items">
              <div className="summary-item">
                <span>Subtotaal</span>
                <span>{formatPrice(99.97)}</span>
              </div>
              <div className="summary-item">
                <span>Verzendkosten</span>
                <span>{formatPrice(5.99)}</span>
              </div>
              <div className="summary-item total">
                <span>Totaal</span>
                <span>{formatPrice(105.96)}</span>
              </div>
            </div>
            <div className="payment-info">
              <p>We accepteren de volgende betaalmethoden:</p>
              <div className="payment-icons">
                <img src="/images/visa.png" alt="Visa" />
                <img src="/images/mastercard.png" alt="Mastercard" />
                <img src="/images/maestro.png" alt="Maestro" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;