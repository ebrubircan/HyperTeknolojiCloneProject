import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, combineData } from '../redux/slices/productSlice';
import Product from './Product';

function ProductList() {
  const dispatch = useDispatch();
  const { categories, products, loading, error } = useSelector((store) => store.product);
  const { searchTerm } = useSelector((store) => store.search);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 0 && products.length === 0) {
      dispatch(combineData());
    }
  }, [dispatch, categories, products]);

  const filteredProducts = products.filter(product => {
    if (!searchTerm) return true; 
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div className='flexRow' style={{ flexWrap: 'wrap' }}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <div style={{ width: '100%', textAlign: 'center', padding: '20px' }}>
          {searchTerm ? `"${searchTerm}" için sonuç bulunamadı` : 'Ürün bulunamadı'}
        </div>
      )}
    </div>
  );
}

export default ProductList;