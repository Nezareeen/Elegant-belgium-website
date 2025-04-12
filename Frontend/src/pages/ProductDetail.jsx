import React from 'react';
import { useParams } from 'react-router-dom';

// Dummy product details (in a real app, you'd fetch this data)
const products = {
  1: {
    id: 1,
    name: "Vintage Designer Handtas",
    price: 1250,
    description: "Deze authentieke vintage designer handtas is volledig gerestaureerd naar originele staat. Gemaakt van premium kalfsleer met gouden hardware.",
    features: ["Premium kalfsleer", "Gouden hardware", "Originele details", "Gerestaureerd"],
    images: ["product1.jpg", "product1-2.jpg", "product1-3.jpg"]
  }
};

function ProductDetail() {
  const { id } = useParams();
  const product = products[id];
  
  // Fallback if product not found
  if (!product) {
    return (
      <div className="container">
        <h1>Product niet gevonden</h1>
        <p>Het product dat u zoekt is niet beschikbaar.</p>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail">
          <div className="product-gallery">
            {/* Placeholder for product images */}
            <div className="main-image">
              <div className="image-placeholder">{product.name}</div>
            </div>
            <div className="thumbnail-images">
              <div className="thumbnail-placeholder"></div>
              <div className="thumbnail-placeholder"></div>
              <div className="thumbnail-placeholder"></div>
            </div>
          </div>
          
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="price">€{product.price}</p>
            <div className="product-description">
              <p>{product.description}</p>
              <h3>Kenmerken:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="add-to-cart">
              <div className="quantity">
                <label htmlFor="quantity">Aantal:</label>
                <input type="number" id="quantity" min="1" defaultValue="1" />
              </div>
              <button className="btn primary">In Winkelwagen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;