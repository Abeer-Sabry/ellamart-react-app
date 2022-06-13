import React from "react";
import { Route, Routes } from "react-router-dom";
// ---- Pages ---- //
import Home from "./Home/Home";
import ProductsCollections from "./ProductsCollections/ProductsCollections";
import SingleProduct from "./SingleProduct/SingleProduct";
import Cart from "./Cart/Cart";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/new-in" element={<ProductsCollections />} />
        <Route path="/collections/new-in/products/:title" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Pages;
