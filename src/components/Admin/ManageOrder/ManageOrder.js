import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import OrdersData from "./OrdersData";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [SearchData, setSearchData] = useState([]);


  const [lodding, setlodding] = useState(false);

  useEffect(() => {
    fetch("https://secret-ravine-65882.herokuapp.com/Orders")
      .then((res) => res.json())
      .then((data) => {
        const order = data?.filter(
          (Orderdata) => Orderdata?.Status !== "Delivery"
        );
        setOrders(order);
        setSearchData(order);
      });
  }, [lodding]);

  const handelsearchData = (e) => {
    let search = e.target.value.toLowerCase();
    const searchMedicine = orders?.filter((searceData) =>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {SearchData.map((order, index) => (
                <OrdersData
                  key={order._id}
                  order={order}
                  index={index}
                  setlodding={setlodding}
                ></OrdersData>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
