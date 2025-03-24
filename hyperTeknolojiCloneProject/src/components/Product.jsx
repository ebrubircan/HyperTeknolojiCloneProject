import React from 'react';
import '../css/Product.css';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/slices/basketSlice';

function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToBasket(product));
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