import React, { useState } from 'react'; 
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import SuccessPopup from '../pages/SuccessPopup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearBasket } from '../redux/slices/basketSlice';
import '../css/PaymentPage.css';
import '../css/successPopup.css';

const paymentSchema = yup.object().shape({
  cardNumber: yup.string()
    .required('Kart numarası zorunlu')
    .matches(/^\d{16}$/, 'Geçerli bir kart numarası girin'),
  cardName: yup.string().required('Kart üzerindeki isim zorunlu'),
  expiryDate: yup.string()
    .required('Son kullanma tarihi zorunlu')
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'MM/YY formatında girin'),
  cvv: yup.string()
    .required('CVV zorunlu')
    .matches(/^\d{3,4}$/, 'Geçerli bir CVV girin'),
});

function PaymentPage() {
    const [showSuccess, setShowSuccess] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { items } = useSelector(state => state.basket);
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(paymentSchema)
    });

    const onSubmit = (data) => {
        setShowSuccess(true);
        dispatch(clearBasket()); 
        setTimeout(() => {
            navigate('/'); 
        }, 3000);
    };

    return (
        <div className="payment-container">
        <h2>Ödeme Sayfası</h2>
        
        <div className="payment-content">
            <div className="order-summary">
            <h3>Sipariş Özeti</h3>
            {items.map(item => (
                <div key={item.id} className="order-item">
                <span>{item.title} x {item.quantity}</span>
                <span>{item.price * item.quantity} ₺</span>
                </div>
            ))}
            <div className="order-total">
                <span>Toplam:</span>
                <span>{totalPrice} ₺</span>
            </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
            <div className="form-group">
                <label>Kart Numarası</label>
                <input 
                {...register("cardNumber")} 
                placeholder="1234 5678 9012 3456" 
                />
                {errors.cardNumber && <span className="error">{errors.cardNumber.message}</span>}
            </div>

            <div className="form-group">
                <label>Kart Üzerindeki İsim</label>
                <input 
                {...register("cardName")} 
                placeholder="Ad Soyad" 
                />
                {errors.cardName && <span className="error">{errors.cardName.message}</span>}
            </div>

            <div className="form-row">
                <div className="form-group">
                <label>Son Kullanma Tarihi</label>
                <input 
                    {...register("expiryDate")} 
                    placeholder="MM/YY" 
                />
                {errors.expiryDate && <span className="error">{errors.expiryDate.message}</span>}
                </div>

                <div className="form-group">
                <label>CVV</label>
                <input 
                    {...register("cvv")} 
                    placeholder="123" 
                    type="password" 
                />
                {errors.cvv && <span className="error">{errors.cvv.message}</span>}
                </div>
            </div>

            <button type="submit" className="submit-btn">
                Ödemeyi Tamamla
            </button>
            </form>
        </div>
        {showSuccess && (
            <SuccessPopup onClose={() => setShowSuccess(false)} />
        )}
        </div>
    );
}

export default PaymentPage;