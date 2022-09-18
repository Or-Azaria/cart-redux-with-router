import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

export default function EditProduct() {
  let selector = useSelector((state) => state.products);
  const navigate = useNavigate();

  const { id } = useParams();

  const [data, setData] = useState([]);

  const [product, setProduct] = useState({
    id: id,
    name: "",
    price: "",
    quantity: "",
  });
  // --- remove function --- //
  const remove = () => {
    let productArray = [...data];
    let newProductArray = productArray.filter((obj) => obj.id != id);
    const action = { type: "DELETE", payload: newProductArray };
    dispatch(action);
    navigate("/Products");
  };
  const dispatch = useDispatch();

  useEffect(() => {
    setData(selector);
  }, [selector]);
  // --- change function --- //

  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const updateProduct = () => {
    const action = { type: "UPDATE", payload: product };
    console.log(action);
    dispatch(action);
    navigate("/Products");
  };
  return (
    <div className="container">
      <input
        onChange={handleInput}
        placeholder="product name"
        name="name"
        className="me-3 rounded-3 "
        type="text"
      />
      <input
        onChange={handleInput}
        name="price"
        placeholder="price"
        className="me-3 rounded-3 "
        type="number"
      />
      <input
        onChange={handleInput}
        name="quantity"
        placeholder="quantity"
        type="number"
        className="rounded-3"
      />
      <br />
      <br />
      <button className="btn btn-light me-3" onClick={updateProduct}>
        update
      </button>
      <button className="btn btn-light" onClick={remove}></button>
    </div>
  );
}
