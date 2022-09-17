import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Customers.css";

export default function Customers() {
  const storeData = useSelector((state) => state);
  return (
    <div className="container gap-5 d-flex justify-content-around">
      <div className="gap-5" style={{ width: "25%" }}>
        {storeData.customers.map((obj, index) => {
          return (
            <div key={index} className="product-box border rounded-5 my-3">
              <Link to={`/EditProduct/${obj.id}`} className="text-light">
                <h4 className="text-dark">{obj.name}</h4>
              </Link>
              <h4>price: {obj.price}$</h4>
              <h4>quantity: {obj.quantity}</h4>
            </div>
          );
        })}
      </div>
      <div className="product-box rounded-4">
        <table>
          <tbody>
            <tr>
              <th> name</th>
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
                          className="text-dark"
                        >
                          {obj.first} {obj.last}
                        </Link>
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-light">ADD</button>
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
