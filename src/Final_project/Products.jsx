import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Products.css";

export default function Products() {
  const d = new Date();
  const dYear = d.getFullYear();
  const dHour = d.getHours();
  const dMin = d.getMinutes();
  const dSec = d.getSeconds();
  const storeData = useSelector((state) => state);
  return (
    <div className="container gap-5 d-flex">
      <h1 className="text-light">Products</h1>
      <div className="gap-5" style={{ width: "25%" }}>
        {storeData.products.map((obj, index) => {
          return (
            <div key={index} className="product-box border rounded-5 my-3">
              <Link to={`/EditProduct/${obj.id}`} className="text-light">
                <h4>{obj.name}</h4>
              </Link>
              <h4>price: {obj.price}$</h4>
              <h4>quantity: {obj.quantity}</h4>
            </div>
          );
        })}
      </div>
      <div>
        <table className="product-box" border={1}>
          <tbody>
            <tr>
              <th>Full name</th>
              <th>purchased date</th>
              <th>Add now</th>
            </tr>
            {storeData.customers.map((obj, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>
                      <span>
                        <Link
                          to={`/EditCustomer/${obj.id}`}
                          className="text-light"
                        >
                          {obj.first} {obj.last}
                        </Link>
                      </span>
                    </td>
                    <td>
                      {dYear}/{dHour}:{dMin}:{dSec}
                    </td>
                    <td>
                      <button className="btn btn-light ms-3">ADD</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
