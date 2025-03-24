import React from 'react';
import '../css/Product.css';

function Product({ product }) {
  const handleAddToCart = () => {
    console.log('Sepete Eklendi:', product.title); 
  };

  return (
    <div className="product-container">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">{product.price} ₺</p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Sepete Ekle
      </button>
    </div>
  );
}

export default Product;