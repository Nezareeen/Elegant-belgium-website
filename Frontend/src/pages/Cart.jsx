import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Elegant Belgian Chocolate Box',
      price: 29.99,
      quantity: 1,
      image: '/images/chocolate-box.jpg',
      description: 'A luxurious assortment of our finest Belgian chocolates'
    },
    {
      id: 2,
      name: 'Artisanal Truffles Collection',
      price: 24.99,
      quantity: 2,
      image: '/images/truffles.jpg',
      description: 'Handcrafted truffles with premium ingredients'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    // Here you can add any additional logic before redirecting to checkout
    // For example, saving cart data to localStorage or making an API call
    window.location.href = '/checkout';
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Discover our collection of exquisite Belgian chocolates</p>
            <Link to="/shop" className="shop-btn">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <div className="item-price">€{item.price.toFixed(2)}</div>
                  </div>
                  <div className="item-quantity">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  <div className="item-total">
                    €{(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="remove-btn"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-item">
                <span>Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>Shipping</span>
                <span>€{shipping.toFixed(2)}</span>
              </div>
              <div className="summary-item total">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="checkout-btn"
              >
                Proceed to Checkout
              </button>
              <Link to="/shop" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;