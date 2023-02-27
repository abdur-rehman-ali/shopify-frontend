import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import EditProduct from "../products/EditProduct";
import ProductForm from "../products/ProductForm";
import Products from "../products/Products";
import SingleProduct from "../products/SingleProduct";


const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/products/new">Add New Product</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/new" element={<ProductForm />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
      </Routes>
    </>
  );
};

export default Navbar;
