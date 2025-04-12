import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

function Navbar() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          Elegant Belgium
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">Over Ons</Link>
          <Link to="/services" className="nav-link">Diensten</Link>
          <Link to="/events" className="nav-link">Evenementen</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 