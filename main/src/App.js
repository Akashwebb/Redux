// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Cart from "./pages/cart";
import { Provider } from 'react-redux';
import {store} from "./store/store.jsx";
function App() {
  return (
    <>
       <Provider store={store}>
     <BrowserRouter>
        <Routes>
           
          <Route path="/" element={<Main/>} />
          <Route path="/cart" element={<Cart/>} />
         
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
