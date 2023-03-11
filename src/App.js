import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Componet/Home/Home';
import About from './Componet/About/About';
import Cart from './Componet/Cart/Cart';
import Contact from './Componet/Contact';
import Product from './Componet/Product/Product';
import SingleProduct from './Componet/SingleProduct';
import Header from './Componet/Header';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Foot from './Componet/Foot';

function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29, 29, 29, 0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 82 243)",
      border: "rgba(98, 84, 243, 0.5",
      hr: "#ffffff",
      gradint:
        "linear-gradint(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15 ) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab:"998px",
    },
  }


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/singleproduct/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
        <Foot />
      </BrowserRouter>
    </ThemeProvider>
  );
}



export default App;
