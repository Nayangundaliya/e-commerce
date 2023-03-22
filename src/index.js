import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './Componet/contex/Productcontex';
import { FilterContectProvider } from './Componet/contex/Filter_context';
import { CartProvider } from './Componet/contex/cartContext';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Auth0Provider
    domain="dev-dz22pdtysuy8u8dp.us.auth0.com"
    clientId="JNnhmnnJIJnLZtOnhwjTYBd6i7IHYyvQ"
    authorizationParams={{redirect_uri: window.location.origin}}>
    <AppProvider>
      <FilterContectProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContectProvider>
    </AppProvider>
  </Auth0Provider>

</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// e-commerce website,
// add to cart page,
// login & logout with auth0
reportWebVitals();
