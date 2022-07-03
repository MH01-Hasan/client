import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";



const AirMax = () => {

  const [Air_Max, setAir_Max] = useState([]);

  useEffect(() => {
    fetch("https://secret-ravine-65882.herokuapp.com/Product")
      .then((res) => res.json())
      .then((data) => {
        const AirMax = data?.filter(
          (Air_Max) => Air_Max?.Catagory === "Air_Max"
        );
        setAir_Max(AirMax);
      });
  }, []);


  return (
    <div className="mx-3 mt-5 mb-5">
      {!Air_Max.length ? <div className="spnier">
        <ScaleLoader color={"#7093e5"} size={150} />

      </div> :
        <div className="row home-content-product">
          {Air_Max?.map((product) => (
            <div className="show-product-air">
              <Link to={`/details/${product._id}`} className='page-link'>
                <div className="" key={product._id}>
                  <div className="image-fild">
                    <img src={product?.image} alt="" className="image-show" />
                  </div>

                  <div className="home-product-info">
                    <div className="product-content-info">
                      <h4>{product.Product_Name}</h4>
                      <h6>{product.Model}</h6>
                      <p>Price : AED {product.price}</p>

                    </div>
                  </div>

                </div>

              </Link>
            </div>
          ))}
        </div>}
    </div>
  );
};

export default AirMax;
