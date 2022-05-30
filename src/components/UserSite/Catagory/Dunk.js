import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dunk = () => {
  const [Dunk, setDunk] = useState([]);

  useEffect(() => {
    fetch("https://secret-ravine-65882.herokuapp.com/Product")
      .then((res) => res.json())
      .then((data) => {
        const Dunk = data?.filter((Dunk) => Dunk?.Catagory === "Dunk");
        setDunk(Dunk);
      });
  }, []);
  return (
    <div className="mx-5 mt-5 mb-5">
      <div className="row home-content-product">
        {Dunk?.map((product) => (
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
                    Veiw More
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

export default Dunk;
