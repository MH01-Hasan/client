import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DesignersShoes = () => {
  const [Designers_Shoes, setDesigners_Shoes] = useState([]);
  console.log(Designers_Shoes);

  useEffect(() => {
    fetch("https://secret-ravine-65882.herokuapp.com/Product")
      .then((res) => res.json())
      .then((data) => {
        const Designers_Shoes = data?.filter(
          (Designers_Shoes) => Designers_Shoes?.Catagory === "Designers_Shoes"
        );
        setDesigners_Shoes(Designers_Shoes);
      });
  }, []);
  return (
    <div className="mx-3 mt-5 mb-5">
      <div className="row home-content-product">
        {Designers_Shoes?.map((product) => (
          <div className=" show-product-air" key={product._id}>
            <div className="image-fild">
              <img src={product?.image} alt="" className="image-show" />
            </div>

            <div className="home-product-info">
              <div className="product-content-info">
                <h4>{product.Product_Name}</h4>
                <h6>{product.Model}</h6>
                <p>Price : AED {product.price}</p>
                <div className="link-product">
                  <Link to={`/details/${product._id}`} className="details-link">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignersShoes;
