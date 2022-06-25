import React from "react";
import { Link } from "react-router-dom";
import "./HomeProduct.css";
import img1 from "../../../images/nike/n1.jpg";
import img2 from "../../../images/nike/n2.jpg";
import img3 from "../../../images/nike/n3.jpg";
import img4 from "../../../images/nike/n4.jpg";
import img5 from "../../../images/adidas/a1.jpg";
import img6 from "../../../images/adidas/a2.jpg";
import img7 from "../../../images/adidas/a3.jpg";
import img8 from "../../../images/adidas/a4.jpg";
import img9 from "../../../images/designers/d1.jpg";
import img10 from "../../../images/designers/d2.jpg";
import img11 from "../../../images/designers/d3.jpg";
import img12 from "../../../images/accessories/ac1.jpg";
import img13 from "../../../images/accessories/ac2.jpg";
import img14 from "../../../images/accessories/ac3.jpg";
import img15 from "../../../images/accessories/ac4.png";
import img16 from "../../../images/others/o1.jpg";

const HomeProduct = () => {
  return (
    <div className="mb-5 mx-3">
      {/*Nike section   */}
      <div className="row mt-5 catagory-fild">
        <h3>Hottest Nike Collections🏃</h3>
        <div className="mt-3 home-catagory">
          <Link to="product/catagory/AirForce" className="home-link">
            <div className="link-info-fild">
              <img
                // src="https://i.ibb.co/QNCkC7g/8.jpg"
                src={img1}
                alt=""
              />
              <p>Air Force 1</p>
            </div>
          </Link>
        </div>
        <div className="mt-3 home-catagory">
          <Link to="product/catagory/AirJorden" className="home-link">
            <div className="link-info-fild">
              <img
                // src="https://i.ibb.co/1JtXKK5/7.jpg"
                src={img2}
                alt=""
              />
              <p>Air Jordan 1</p>
            </div>
          </Link>
        </div>
        <div className="mt-3 home-catagory">
          <Link to="/product/catagory/AirJordan4 " className="home-link">
            <div className="link-info-fild">
              <img
                // src="https://i.ibb.co/W2whf8H/6.jpg"
                src={img3}
                alt=""
                className="ladisbag-image"
              />
              <p>Air Jordan 4</p>
            </div>
          </Link>
        </div>
        <div className=" mt-3 home-catagory">
          <Link to="product/catagory/Dunk" className="home-link">
            <div className="link-info-fild">
              <img
                // src="https://i.ibb.co/5k9WCSx/5.jpg"
                src={img4}
                alt=""
              />
              <p>Nike Dunk</p>
            </div>
          </Link>
        </div>
      </div>
      {/*Nike section End  */}

      {/*Adidas section Adidas  */}
      <div className="mt-5 Addidas">
        <h2>Trending Now🔥 Adidas</h2>
        <div className="row mt-5 catagory-fild">
          <div className="mt-3 home-catagory">
            <Link to="product/catagory/Yeezy_350_v2" className="home-link">
              <div className="link-info-fild">
                <img
                  // src="https://i.ibb.co/yds4BZk/4.jpg"
                  src={img5}
                  alt=""
                />
                <p>Yeezy 350 v2</p>
              </div>
            </Link>
          </div>
          <div className="mt-3 home-catagory">
            <Link to="product/catagory/Yeezy500" className="home-link">
              <div className="link-info-fild">
                <img
                  // src="https://i.ibb.co/k2kQctJ/3.jpg"
                  src={img6}
                  alt=""
                />
                <p>Yeezy 500</p>
              </div>
            </Link>
          </div>
          <div className=" mt-3 home-catagory">
            <Link to="product/catagory/YeezySlide" className="home-link">
              <div className="link-info-fild">
                <img
                  // src="https://i.ibb.co/MCTrHBC/y.jpg"
                  src={img7}
                  alt=""
                />
                <p>Yeezy Slide</p>
              </div>
            </Link>
          </div>
          <div className=" mt-3 home-catagory">
            <Link to="product/catagory/Yeezy700" className="home-link">
              <div className="link-info-fild">
                <img
                  // src="https://i.ibb.co/Y73FTx1/2.jpg"
                  src={img8}
                  alt=""
                />
                <p>Yeezy 700</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/*Adidas section  End */}

      {/*Designers Shoes section  */}
      <div className="mt-5 Addidas">
        <h2>Designers 🔥 Shoes</h2>
        <div className="row mt-2 catagory-fild">
          <div className="mt-3 home-catagory">
            <Link to="/product/catagory/Designers_Shoes" className="home-link">
              <div className="link-info-fild">
                <img
                  // src="https://i.ibb.co/rtT92Rp/ds.jpg"
                  src={img9}
                  alt=""
                  className="ladisbag-image"
                />
                <p>Designers Shoes</p>
              </div>
            </Link>
          </div>
          {/* Converse */}
          <div className=" mt-3 home-catagory">
            <Link to="product/catagory/Converse" className="home-link">
              <div className="link-info-fild">
                <img
                  // src="https://i.ibb.co/BZtFFM3/c.jpg"
                  src={img10}
                  alt=""
                />
                <p>Converse</p>
              </div>
            </Link>
          </div>
          {/* Converse */}

          {/* Air Max */}
          <div className=" mt-3 home-catagory">
            <Link to="product/catagory/AirMax" className="home-link">
              <div className="link-info-fild">
                <img
                  // src="https://i.ibb.co/dLCg4j6/max.jpg"
                  src={img11}
                  alt=""
                />
                <p>Air Max</p>
              </div>
            </Link>
          </div>
          {/* Air Max */}
        </div>
      </div>
      {/*Designers Shoes section  End */}

      {/*Accessories section  */}
      <div className="mt-5 Addidas">
        <h2>Accessories 🔥</h2>
        <div className="row mt-2 catagory-fild">
          <div className="mt-3 home-catagory">
            <Link to="/product/catagory/LadiesBag" className="home-link">
              <div className="link-info-fild">
                <img
                  // src="https://i.ibb.co/GVT7WqT/b.jpg"
                  src={img12}
                  alt=""
                  className="ladisbag-image"
                />
                <p>Ladies Bag</p>
              </div>
            </Link>
          </div>
          <div className="mt-3 home-catagory">
            <Link to="/product/catagory/Watch" className="home-link">
              <div className="link-info-fild">
                <img
                  // src="https://i.ibb.co/z7RjXfn/w.jpg"
                  src={img13}
                  alt=""
                />
                <p>Watch</p>
              </div>
            </Link>
          </div>
          <div className=" mt-3 home-catagory">
            <Link to="product/catagory/Wallet" className="home-link">
              <div className="link-info-fild">
                <img
                  // src="https://i.ibb.co/gyXxtSj/wl.jpg"
                  src={img14}
                  alt=""
                  className="ladisbag-image"
                />
                <p>Wallet</p>
              </div>
            </Link>
          </div>
          <div className=" mt-3 home-catagory">
            <Link to="product/catagory/Others" className="home-link">
              <div className="link-info-fild">
                <img
                  // src="https://i.ibb.co/QNmXWGz/others.png"
                  src={img15}
                  alt=""
                />
                <p>Others</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/*Accessories section  End */}

      <div className="row mt-3">
        <div className="col-lg-7 col-sm-12 thard-contaent mt-5">
          <img
            // src="https://i.ibb.co/DYW7SbY/mideljpg.jpg"
            src={img16}
            alt=""
          />
        </div>

        <div className="col-lg-5 col-sm-12 mt-2 thard-contaent-secend-part">
          <h1>Travis Scott X Nike Air Jordan 1 Low</h1>
          <p>
            This AJ 1 Low features a black upper with dark brown overlays and
            red accents. Lateral side La Flame backwards Swoosh have become a
            Travis Scott signature. Red embroidered logos on heels and “Cactus
            Jack” insignias on lateral side panels. Sail midsole and dark brown
            outsole complete the design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
