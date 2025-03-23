import React from 'react';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <ProductList />
      </PageContainer>
    </div>
  );
}

export default App;