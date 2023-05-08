import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/product.context';
import './index.scss';
import { CartDropdownProvider } from './contexts/cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartDropdownProvider>
            <App />
          </CartDropdownProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

