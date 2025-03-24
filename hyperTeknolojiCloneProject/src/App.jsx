import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import './App.css';
import RouterConfig from './config/RouterConfig';
import BasketInitializer from './components/BasketInitializer';

function App() {
  return (
    <Provider store={store}>
      <BasketInitializer />
      <div>
        <PageContainer>
          <Header />
          <RouterConfig />
        </PageContainer>
      </div>
    </Provider>
  );
}

export default App;