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

const domain = process.env.REACT_APP_AUTH_DOMIN;
const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

root.render(<>
  <Auth0Provider
    domain={domain}
    clientId={clientId}
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
