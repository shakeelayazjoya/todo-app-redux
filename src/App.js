import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Welcome to Our E-Commerce Store</h1>
      <ProductList />
      <Cart />
      <Checkout />
    </div>
  );
};

export default App;
