import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrder, setmyOrder] = useState([]);
  console.log(user?.email);

  useEffect(() => {
    fetch(`https://secret-ravine-65882.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setmyOrder(data));
  }, [user?.email]);
  return (
    <div className="container mt-5 mb-5">
      <Table responsive className="my-order-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Order Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {myOrder?.map((order) => (
            <tr>
              <td>{order?.Date?.date}</td>
              <td>{order?.Total_Amount.total}</td>
              <td>
                <Link to={`/Order/${order?._id}`}>
                  {order?._id.slice(13, 24)}
                </Link>
              </td>
              <td
                className={
                  (order?.Status === "Processing" && "statusprossing") ||
                  (order?.Status === "Delivery" && "statusDelivery")
                }
              >
                {order?.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrder;
