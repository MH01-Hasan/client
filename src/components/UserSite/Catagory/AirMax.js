import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
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
    <div className='container mb-5'>
      <div className='row'>
        {
          Air_Max?.map(product => <div className='col-lg-3 col-md-4 col-sm-6' key={product._id}>
            <Card className='cart-fild mt-5'>
              <Card.Img src={product?.image} className='image-card' />

              <Card.Body>
                <Card.Title className='product-name' >{product.Product_Name}</Card.Title>
                <h6>{product.Model}</h6>
                <p className='price-card'> Price : {product.price} AED</p>
                <div className='add-footer'>

                  <Link to={`/details/${product._id}`} className='details-link'>
                    Veiw More
                  </Link>

                </div>
              </Card.Body>

            </Card>
          </div>)

        }
      </div>



    </div>
  );
};

export default AirMax;
