import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Shop.css';

function Shop() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showNotification, setShowNotification] = useState(false);

  const products = [
    {
      id: 1,
      name: "Leder Conditioning Kit",
      category: "verzorging",
      price: "€49,95",
      description: "Complete verzorgingsset voor uw lederen tassen",
      featured: true
    },
    {
      id: 2,
      name: "Luxe Tassenhouder",
      category: "accessoires",
      price: "€34,95",
      description: "Elegante houder voor het beschermen van uw designer tas",
      featured: false
    },
    {
      id: 3,
      name: "Premium Reinigingsset",
      category: "verzorging",
      price: "€39,95",
      description: "Professionele reinigingsset voor delicate materialen",
      featured: false
    },
    {
      id: 4,
      name: "Designer Tas Beschermer",
      category: "accessoires",
      price: "€29,95",
      description: "Beschermhoes voor uw kostbare tassen",
      featured: false
    }
  ];

  const featuredProduct = products.find(product => product.featured);
  const filteredProducts = selectedCategory === 'all' 
    ? products.filter(product => !product.featured)
    : products.filter(product => product.category === selectedCategory && !product.featured);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="hero-content">
          <h1>Onze Collectie</h1>
          <p>Ontdek onze exclusieve verzorgingsproducten en accessoires</p>
        </div>
      </section>

      {/* Featured Product */}
      {featuredProduct && (
        <section className="featured-product">
          <div className="featured-content">
            <span className="featured-label">Uitgelicht</span>
            <h2>{featuredProduct.name}</h2>
            <p>{featuredProduct.description}</p>
            <div className="featured-price">{featuredProduct.price}</div>
            <div className="featured-actions">
              <Link to={`/shop/product/${featuredProduct.id}`} className="featured-cta">
                Bekijk Details
              </Link>
              <button 
                onClick={() => handleAddToCart(featuredProduct)}
                className="featured-cta add-to-cart"
              >
                In Winkelwagen
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Main Shop Section */}
      <section className="main-shop">
        <div className="category-filter">
          <button 
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => setSelectedCategory('all')}
          >
            Alles
          </button>
          <button 
            className={selectedCategory === 'verzorging' ? 'active' : ''}
            onClick={() => setSelectedCategory('verzorging')}
          >
            Verzorging
          </button>
          <button 
            className={selectedCategory === 'accessoires' ? 'active' : ''}
            onClick={() => setSelectedCategory('accessoires')}
          >
            Accessoires
          </button>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-price">{product.price}</div>
              <div className="product-actions">
                <Link to={`/shop/product/${product.id}`} className="product-cta">
                  Bekijk Details
                </Link>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="product-cta add-to-cart"
                >
                  In Winkelwagen
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Care Guide Section */}
      <section className="care-guide">
        <h2>Verzorgingsgids</h2>
        <p>Ontdek hoe u uw designer tassen het beste kunt onderhouden</p>
        <Link to="/contact" className="guide-cta">Lees Meer</Link>
      </section>

      {/* Notification */}
      {showNotification && (
        <div className="notification">
          Product toegevoegd aan winkelwagen!
        </div>
      )}
    </div>
  );
}

export default Shop;
