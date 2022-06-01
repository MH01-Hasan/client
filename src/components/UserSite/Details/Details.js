import React, { useEffect, useState } from "react";
import { ButtonGroup, Card, ToggleButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { addToCart } from "../../../Redux/cardSlics";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  // ....................................Api Load Data...........................
  const [product, setProduct] = useState({});
  const [lodding, setLodding] = useState(false);


  useEffect(() => {
    setLodding(true);
    fetch(`https://secret-ravine-65882.herokuapp.com/Product/${id}`)
      .then((res) => res.json())
      .then((item) => {
        setProduct(item);
        setLodding(false);
      });
  }, [id]);

  const imagess = [
    product.image,
    product.image1,
    product.image2,
    product.image3,
    product.image4,
  ];
  // ....................................Api Load Data...........................

  // ....................................add to Card Product..........................
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handeladdToCard = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  // ....................................add to Card Product...........................

  // ....................................user Inpur Product Size..........................
  const [radioValue, setRadioValue] = useState("");
  product["Size"] = radioValue;
  const radios = [
    { name: "36", value: "36" },
    { name: "37", value: "37" },
    { name: "38", value: "38" },
    { name: "39", value: "39" },
    { name: "40", value: "40" },
    { name: "41", value: "41" },
    { name: "42", value: "42" },
    { name: "43", value: "43" },
    { name: "44", value: "44" },
    { name: "45", value: "45" },
  ];
  // ....................................user Inpur Product Size..........................

  const [selectedimg, setSelectedimg] = useState(imagess[0]);

  return (
    <div className="container">
      {lodding ? <div className="spnier">
        <ScaleLoader color={"#7093e5"} size={150} />
      </div> :


        <div className="row mt-5 mb-5">
          <div className="col-lg-6 col-sm-12">
            <div className="details-imagess">
              <img src={selectedimg || imagess[0]} alt="" className="slected" />

              <div className="imagecontainer">
                {imagess.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="dog"
                    onClick={() => setSelectedimg(img)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 product-info-details">
            <p>Brand : {product?.Brand_Name}</p>
            <h1 className="details-name">{product?.Product_Name}</h1>
            <h5 className="price-details">{`Price: AED ${product.price}`}</h5>


            {(product?.Catagory !== "Ladies_Bag" && product?.Catagory !== "Wallet" && product?.Catagory !== "Watch" && product?.Catagory !== "Others") && <div>
              <h5 className="Size">Size</h5>
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? "outline-secondary" : "outline-primary"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    className="redio-btn-css"
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </div>}



            <button
              onClick={() => handeladdToCard(product)}
              className="details-add-to"
            >
              Add to cart
            </button>

            <div className="Description mt-5">
              <small className="Description">{product?.Description}</small>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default Details;
