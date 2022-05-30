import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ProductData from "./ProductData";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [ManageProduct, setManageProduct] = useState([]);

  const [lodding, setlodding] = useState(false);

  useEffect(() => {
    fetch("https://secret-ravine-65882.herokuapp.com/Product")
      .then((res) => res.json())
      .then((data) => setManageProduct(data));
  }, [lodding]);

  return (
    <div>
      <Table responsive="sm md xl">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Product</th>
            <th>Product-Name</th>
            <th>Catagory</th>
            <th>Model</th>
            <th>Brand_Name</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ManageProduct.map((Product, index) => (
            <ProductData
              key={Product._id}
              Product={Product}
              index={index}
              setlodding={setlodding}
              ManageProduct={ManageProduct}
              setManageProduct={setManageProduct}
            ></ProductData>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProduct;
