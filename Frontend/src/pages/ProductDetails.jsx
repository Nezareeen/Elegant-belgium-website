import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  // This would typically come from an API or context
  const products = [
    {
      id: 1,
      name: "Leder Conditioning Kit",
      category: "verzorging",
      price: "€49,95",
      description: "Complete verzorgingsset voor uw lederen tassen",
      longDescription: `Onze premium Leder Conditioning Kit is speciaal ontwikkeld voor het onderhoud van luxe lederen tassen. 
      Deze complete set bevat alles wat u nodig heeft om uw kostbare tassen in perfecte conditie te houden.
      
      De kit bestaat uit:
      • Hoogwaardige lederreiniger
      • Voedende conditioner
      • Beschermende coating
      • Professionele applicatieborstels
      • Zachte microvezeldoeken
      • Gedetailleerde gebruiksaanwijzing`,
      features: [
        "Geschikt voor alle soorten leder",
        "pH-neutraal en veilig voor delicate materialen",
        "Langdurige bescherming",
        "Professionele kwaliteit",
        "Inclusief complete handleiding"
      ],
      usage: "Aanbevolen gebruik: elke 3-6 maanden voor optimale bescherming"
    },
    {
      id: 2,
      name: "Luxe Tassenhouder",
      category: "accessoires",
      price: "€34,95",
      description: "Elegante houder voor het beschermen van uw designer tas",
      longDescription: `De Luxe Tassenhouder is ontworpen om uw designer tassen in optimale conditie te bewaren. 
      Vervaardigd uit hoogwaardig materiaal dat zowel duurzaam als elegant is.
      
      Kenmerken:
      • Verstelbare hoogte
      • Stabiele constructie
      • Zachte, beschermende coating
      • Elegant design
      • Ruimtebesparend ontwerp`,
      features: [
        "Geschikt voor tassen van verschillende formaten",
        "Voorkomt vervorming van uw tas",
        "Stijlvol matzwart design",
        "Antislip basis",
        "Eenvoudig te monteren"
      ],
      usage: "Perfect voor dagelijkse opslag en presentatie van uw tassen"
    }
    // Add other products as needed
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product niet gevonden</h2>
        <Link to="/shop" className="back-to-shop">Terug naar de shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      quantity: quantity
    };
    addToCart(productToAdd);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="product-details-container">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="product-hero-content">
          <h1>{product.name}</h1>
          <p className="category-label">{product.category}</p>
        </div>
      </section>

      {/* Main Product Details */}
      <section className="product-main">
        <div className="content-wrapper">
          <div className="product-info">
            <div className="product-header">
              <div className="price-tag">{product.price}</div>
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              <button onClick={handleAddToCart} className="purchase-cta">
                In Winkelwagen
              </button>
            </div>

            <div className="product-description">
              <p className="intro-text">{product.description}</p>
              <div className="long-description">
                {product.longDescription.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="product-features">
              <h2>Kenmerken</h2>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="product-usage">
              <h2>Gebruik</h2>
              <p>{product.usage}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="related-products">
        <div className="content-wrapper">
          <h2>Gerelateerde Producten</h2>
          <div className="related-grid">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 2)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="related-card">
                  <h3>{relatedProduct.name}</h3>
                  <p>{relatedProduct.description}</p>
                  <div className="related-price">{relatedProduct.price}</div>
                  <Link to={`/shop/product/${relatedProduct.id}`} className="related-cta">
                    Bekijk Details
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Back to Shop */}
      <section className="back-section">
        <div className="content-wrapper">
          <Link to="/shop" className="back-to-shop">
            ← Terug naar de shop
          </Link>
        </div>
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

export default ProductDetails; 