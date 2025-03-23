import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../redux/slices/productSlice';

function ProductList() {
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getCustomers()); // API'den müşteri bilgilerini çek
  }, [dispatch]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div>
      <h1>Müşteri Listesi</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.customerID}>
            <p><strong>Ad:</strong> {customer.firstName}</p>
            <p><strong>Soyad:</strong> {customer.lastName}</p>
            <p><strong>E-posta:</strong> {customer.email}</p>
            <p><strong>Telefon:</strong> {customer.gsm}</p>
            <p><strong>Bakiye:</strong> {customer.balance}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;