import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../css/successPopup.css';

function SuccessPopup({ onClose }) {
    const navigate = useNavigate();
    const handleClose = () => {
        onClose();
        navigate('/'); 
      };
    return (
        <div className="popup-overlay">
        <div className="popup-content">
            <FaCheckCircle className="success-icon" />
            <h3>Ödeme Alındı!</h3>
            <p>Siparişiniz başarıyla oluşturuldu.</p>
            <button onClick={handleClose} className="close-btn">
            Tamam
            </button>
        </div>
        </div>
    );
}

export default SuccessPopup;