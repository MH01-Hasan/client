import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AirMax = () => {
  const [Air_Max, setAir_Max] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const AirMax = data?.filter(
          (Air_Max) => Air_Max?.Catagory === "Air_Max"
        );
        setAir_Max(AirMax);
      });
  }, []);
  return (
    <div className='mx-5 mt-5 mb-5'>
      <div className='row home-content-product'>
        {
          Air_Max?.map(product => <div className=' show-product-air' key={product._id}>
            <div className='image-fild'>
              <img src={product?.image} alt="" className='image-show' />
            </div>

            <div className='home-product-info'>
              <div className='product-content-info'>
                <h4>{product.Product_Name}</h4>
                <h6>{product.Model}</h6>
                <p>Price : AED  {product.price}</p>
                <div className='link-product'>
                  <Link to={`/details/${product._id}`} className='details-link'>
                    Veiw More
                  </Link>
                </div>
              </div>
            </div>

          </div>)

        }
      </div>



    </div>

  );
};

export default AirMax;
