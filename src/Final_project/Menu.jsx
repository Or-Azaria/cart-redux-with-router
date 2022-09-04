import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Customers from "./Customers";
import Products from "./Products";
import Purchases from "./Purchases";
import "bootstrap/dist/css/bootstrap.min.css";
import EditProduct from "./EditProduct";
import EditCustomer from "./EditCustomer";
import "./Menu.css";

export default function Menu() {
  return (
    <div style={{ textAlign: "center", height: "100vh" }}>
      <h1 className="text-bg-dark ">Menu</h1>
      <div className="fs-5 d-flex justify-content-center gap-3 ">
        <Link
          to="/Products"
          className="btn btn-dark text-decoration-none text-light"
        >
          Products
        </Link>
        <Link
          to="/Customers"
          className="btn btn-dark text-decoration-none text-light"
        >
          Customers
        </Link>
        <Link
          to="/Purchases"
          className="btn btn-dark text-decoration-none text-light"
        >
          Purchases
        </Link>
      </div>
      <hr className="text-light" />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/Purchases" element={<Purchases />} />
        <Route path="/EditProduct/:id" element={<EditProduct />} />
        <Route path="/EditCustomer/:id" element={<EditCustomer />} />
      </Routes>
    </div>
  );
}
