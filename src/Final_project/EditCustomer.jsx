import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditCustomer() {
  return (
    <div className="container">
      <input type="text" placeholder="Edit Customer" className="rounded-3" />
      <br />
      <button className="btn btn-light mx-2 my-3">update</button>
      <button className="btn btn-light my-3">delete now</button>
    </div>
  );
}
