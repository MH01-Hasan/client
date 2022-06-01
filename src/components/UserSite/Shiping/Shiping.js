import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Shiping.css";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { crealecart } from "../../../Redux/cardSlics";
import Swal from "sweetalert2";

const Shiping = () => {
  const { user } = useAuth();
  const cart = useSelector((state) => state.cart);
  const [data, setData] = useState({});

  const { register, handleSubmit, reset } = useForm({});
  const [step, setStep] = useState(false);

  const onSubmit = (data) => {
    setData(data);
    setStep(true);
    reset();
  };

  ////step 2 part

  const [radioValue, setRadioValue] = useState("");
  const total = Number(cart?.cardTotalAmount) + Number(radioValue);

  const radios = [
    { name: "	UAE-2-4 days Delivery", value: "25" },
    { name: "WESTERN REGION/HATTA/ISLAND (2-4 days)", value: "50" },
  ];
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;

  const handelClick = () => {
    const order = {
      email: user?.email,
      item: { cart },
      Shipinginfo: { data },
      Shiping_Method: { radioValue },
      Total_Amount: { total },
      Status: `Pending`,
      Date: { date },
    };

    axios
      .post("https://secret-ravine-65882.herokuapp.com/Orders", order)
      .then((res) => {
        if (res.data.insertedId) {
          dispatch(crealecart());
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Order Has Been Success",
            showConfirmButton: false,
            timer: 2500,
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="shiping-info col-lg-7 col-md-6 col-sm-12">
          <h2>EMIRATES LIFESTYLES</h2>
          <div className="information-fild-checkout">
            {/* ..................................1st Part SheckOut Method. Start..................*/}
            {!step && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <h4 className="Contact-information">Contact information</h4>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder=" Email"
                    required={true}
                    className="Country"
                  />
                  <br />

                  <div className="check-box">
                    <input
                      type="checkbox"
                      {...register("check")}
                      required={true}
                      className="check"
                    />
                    <label>Email me with news and offers</label>
                  </div>
                </div>

                <div>
                  <h5 className="Shipping-address"> Shipping address</h5>
                </div>

                <select
                  {...register("Country")}
                  className="Country"
                  placeholder="Country"
                >
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                </select>
                <br />

                <input
                  {...register("firstName")}
                  placeholder="First Name"
                  required={true}
                  className="First-Name"
                />
                <input
                  {...register("lastName")}
                  placeholder="Last Name"
                  required={true}
                  className="First-Name last"
                />
                <br />

                <input
                  {...register("Address")}
                  placeholder="Address"
                  required={true}
                  className="Country"
                />
                <br />
                <input
                  {...register("city")}
                  placeholder="City"
                  required={true}
                  className="First-Name"
                />
                <select
                  {...register("Emirate")}
                  className="First-Name last"
                  placeholder="Emirate"
                >
                  <option disabled value="Emirate">
                    Emirate
                  </option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Ajman">Ajman</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Ras al-Khaimah">Ras al-Khaimah</option>
                  <option value="Sharjah">Sharjah</option>
                  <option value="Fujairah">Fujairah</option>
                  <option value="Umm al-Quwain">Umm al-Quwain</option>
                </select>
                <br />
                <input
                  {...register("Phone")}
                  placeholder="Phone"
                  required={true}
                  className="Country"
                />
                <br />

                <input type="submit" value="Continue" className="submit-btn" />

                <Link to="/cart" className="back-cart">
                  Return to Cart
                </Link>
              </form>
            )}
            {/* ..................................1st Part CheckOut Method End..................*/}

            {/* .................................. 2nd Part Shiping Method Start...................*/}
            {step && (
              <div>
                <div className="contact-ship">
                  <div className="p">
                    <h6>contact : {data?.email} </h6>
                  </div>
                  <hr />
                  <div className="p1">
                    <h6>
                      Ship to : {data?.Address}, {data?.Emirate},{data?.Country}
                    </h6>
                  </div>
                </div>

                <div className="Shipping-method">
                  <h4 className="method">Delivery Method</h4>

                  <div>
                    <div>
                      <ButtonGroup className="readio-btn-delevery">
                        {radios.map((radio, idx) => (
                          <div key={idx}>
                            <ToggleButton
                              id={`radio-${idx}`}
                              type="radio"
                              variant={
                                idx % 2 ? "outline-success" : "outline-danger"
                              }
                              name="radio"
                              value={radio.value}
                              checked={radioValue === radio.value}
                              onChange={(e) =>
                                setRadioValue(e.currentTarget.value)
                              }
                              required={true}
                              className="ToggleButton-delevery"
                            >
                              <div className="delevery-value">
                                <h6 className="delevery-cost">{radio.name}</h6>
                                <h6 className="delevery-cost">
                                  {" "}
                                  AED {radio.value}
                                </h6>
                              </div>
                            </ToggleButton>
                          </div>
                        ))}
                      </ButtonGroup>
                    </div>
                  </div>
                </div>

                <div className="payment">
                  <h4>Payment </h4>
                  <p>All transactions are secure and encrypted.</p>
                  <p className="Cash-on-delevery">Cash On Delivery (COD)</p>
                </div>

                <div>
                  <button
                    className="SubmitOrder"
                    disabled={!radioValue}
                    onClick={handelClick}
                  >
                    Submit Order
                  </button>
                </div>
              </div>
            )}
            {/* .................................. 2nd Part Shiping Method. End..................*/}
          </div>
        </div>

        {/*................................ Product Show........................................... */}
        <div className="final-cart col-lg-5 col-md-6 col-sm-12 ">
          <Table responsive className="check-out-product-fild">
            <thead>
              <tr>
                <th className="">Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart?.cardItem?.map((cartItem) => (
                <tr key={cartItem._id}>
                  <td className="">
                    <div className="product-name">
                      <img
                        src={cartItem.image}
                        alt=""
                        className="checkout-img"
                      />
                      <div className="">
                        <p className="">{cartItem.name}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{cartItem.price}</div>
                  </td>
                  <td className="">
                    {" "}
                    <div className=" ">
                      <div className="">{cartItem.cartQuantity}</div>
                    </div>
                  </td>
                  <td>
                    <div className="c">
                      AED {cartItem.price * cartItem.cartQuantity}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="check-out-subtotal">
            <h6 className="total-Amount-text">Delivery Cost</h6>
            <h6 className="amount-Text">AED {`${radioValue}.00`}</h6>
          </div>
          <div className="check-out-subtotal">
            <h4 className="total-Amount-text">SubTotal</h4>
            <h6 className="amount-Text">AED {`${total}.00`}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shiping;
