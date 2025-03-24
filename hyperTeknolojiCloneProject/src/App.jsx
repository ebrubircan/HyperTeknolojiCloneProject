import React from 'react';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import './App.css';
import RouterConfig from './config/RouterConfig';

function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;