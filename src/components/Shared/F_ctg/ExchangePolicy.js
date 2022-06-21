import React from "react";
import "./ExchangePolicy.css";

const ExchangePolicy = () => {
  return (
    <div className=" ">
      <h1 className="Exchange-h1 mt-5 mb-5">Shipping and Exchange Policy</h1>
      <div className="row Exchange-fild mt-3 mb-5">
        <div className="Shipping part col-lg-6 col-sm-12">
          <h3 className="heading-ex">Shipping</h3>
          <p className="pre-ex">
            We Mostly deliver the next day if an order occurs before 8 pm. We
            Ship all over in the UAE. However, for any reason, the shipment
            might be delayed for 1-2 days. We do not make any shipments on
            Friday.{" "}
          </p>
        </div>
        <div className="Exchange part col-lg-6 col-sm-12">
          <h3 className="heading-ex">Exchange</h3>
          <p className="pre-ex">
            If you’re looking to exchange your order for whatever reason, we're
            here to help! We offer exchanges within the next day of purchase.
            You can return your product for a different product. To make an
            exchange, Customer has to pay AED 25 delivery charge for all over
            UAE and AED 50 for exchanges in the Western Region. If you have an
            exchange to make, contact us.
            <br />
            Email: emirateslifestyles@yahoo.com : WhatsApp: +971 56 877 5565
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExchangePolicy;
