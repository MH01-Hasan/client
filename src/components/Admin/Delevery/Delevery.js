import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import OrdersDeleveryData from "./OrdersDeleveryData";

const Delevery = () => {
  const [deleverydata, setDeleverydata] = useState([]);
  const [SearchData, setSearchData] = useState([]);
  useEffect(() => {
    fetch("https://secret-ravine-65882.herokuapp.com/Orders")
      .then((res) => res.json())
      .then((data) => {
        const order = data?.filter(
          (Orderdata) => Orderdata?.Status === "Delivery"
        );
        setDeleverydata(order);
        setSearchData(order);
      });
  }, []);

  const handelsearchData = (e) => {
    let search = e.target.value.toLowerCase();
    const searchMedicine = deleverydata?.filter((searceData) =>
      searceData?._id.toLowerCase().includes(search)
    );
    setSearchData(searchMedicine);
  };

  return (
    <div className="order-fild mt-5">
      <div className="search-medicen mb-3">
        <input
          type="text"
          onChange={handelsearchData}
          className="search-option"
          placeholder="Search Order Number"
        />
      </div>
      <div>
        <div>
          <Table responsive="sm md xl table-fild">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Product</th>
                <th>Name</th>
                <th>Number</th>
                <th>Order Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {SearchData.map((order, index) => (
                <OrdersDeleveryData
                  key={order._id}
                  order={order}
                  index={index}
                ></OrdersDeleveryData>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Delevery;
