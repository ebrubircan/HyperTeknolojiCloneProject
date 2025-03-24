import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/slices/basketSlice';
import '../css/cartPage.css'; 

function CartPage() {
  const { items } = useSelector(state => state.basket);
  const dispatch = useDispatch();

  const totalPrice = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Sepetim ({items.length} Ürün)</h1>
      
      {items.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-message">Sepetiniz boş</p>
          <Link to="/" className="continue-shopping">
            Alışverişe devam et
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="product-list">
            {items.map((item, index) => (
              <div key={index} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="product-image"
                />
                <div className="product-details">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-price">{item.price} ₺</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity || 1}</span>
                    <button 
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      className="quantity-btn"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => dispatch(removeItem(item.id))}
                      className="remove-btn"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-summary">
            <h2 className="summary-title">Sipariş Özeti</h2>
            <div className="summary-row">
              <span>Toplam:</span>
              <span>{totalPrice.toFixed(2)} ₺</span>
            </div>
            <div className="summary-row">
              <span>Kargo:</span>
              <span>Ücretsiz</span>
            </div>
            <div className="divider"></div>
            <div className="summary-row total">
              <span>Genel Toplam:</span>
              <span>{totalPrice.toFixed(2)} ₺</span>
            </div>
            <Link to="/payment" className="checkout-btn">
                Ödemeye Geç
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;