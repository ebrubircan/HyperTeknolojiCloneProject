import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, combineData } from '../redux/slices/productSlice';
import Product from './Product';

function ProductList() {
  const dispatch = useDispatch();
  const { categories, products, loading, error } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 0 && products.length === 0) {
      dispatch(combineData());
    }
  }, [dispatch, categories, products]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div className='flexRow' style={{ flexWrap: 'wrap' }}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;