import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './Componet/contex/Productcontex';
import { FilterContectProvider } from './Componet/contex/Filter_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <AppProvider>
    <FilterContectProvider>
      <App />
    </FilterContectProvider>
  </AppProvider>

</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
