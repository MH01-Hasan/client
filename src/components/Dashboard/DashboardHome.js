import React, { useEffect, useState } from "react";

const DashboardHome = () => {
  const [Pending, setPending] = useState([]);
  const [Delivery, setDelivery] = useState([]);
  const [Processing, setProcessing] = useState([]);

  useEffect(() => {
    fetch("https://secret-ravine-65882.herokuapp.com/Orders")
      .then((res) => res.json())
      .then((data) => {
        const order = data?.filter(
          (Orderdata) => Orderdata?.Status === "Delivery"
        );
        setDelivery(order);
        const Pending = data?.filter(
          (Orderdata) => Orderdata?.Status === "Pending"
        );
        setPending(Pending);
        const Processing = data?.filter(
          (Orderdata) => Orderdata?.Status === "Processing"
        );
        setProcessing(Processing);
      });
  }, []);

  return (
    <div className="conntainer">
      <div className="Admin-home">
        <div className="card-home Pending">
          <h4>Pending Order</h4>
          <h6 className="Pending-length">{Pending?.length}</h6>
        </div>
        <div className="card-home Processing">
          <h4>Processing Order</h4>
          <h6 className="Pending-length">{Processing?.length}</h6>
        </div>
        <div className="card-home Delivery">
          <h4>Delivery successfully</h4>
          <h6 className="Pending-length">{Delivery?.length}</h6>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
