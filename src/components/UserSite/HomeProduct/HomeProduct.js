import React from "react";
import { Link } from "react-router-dom";
import "./HomeProduct.css";

const HomeProduct = () => {
  return (
    <div className="mb-5 mx-3">
      {/*Nike section   */}
      <div className="row mt-5 catagory-fild">
        <h3>Hottest Nike Collections🏃</h3>
        <div className="mt-3 home-catagory">
          <Link to="product/catagory/AirForce" className="home-link">
            <div className="link-info-fild">
              <img src="https://i.ibb.co/QNCkC7g/8.jpg" alt="" />
              <p>Air Force 1</p>
            </div>
          </Link>
        </div>
        <div className="mt-3 home-catagory">
          <Link to="product/catagory/AirJorden" className="home-link">
            <div className="link-info-fild">
              <img src="https://i.ibb.co/1JtXKK5/7.jpg" alt="" />
              <p>Air Jordan 1</p>
            </div>
          </Link>
        </div>
        <div className=" mt-3 home-catagory">
          <Link to="product/catagory/AirMax" className="home-link">
            <div className="link-info-fild">
              <img src="https://i.ibb.co/W2whf8H/6.jpg" alt="" />
              <p>Air Jordan 4</p>
            </div>
          </Link>
        </div>
        <div className=" mt-3 home-catagory">
          <Link to="product/catagory/Dunk" className="home-link">
            <div className="link-info-fild">
              <img src="https://i.ibb.co/5k9WCSx/5.jpg" alt="" />
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
                <img src="https://i.ibb.co/yds4BZk/4.jpg" alt="" />
                <p>Yeezy 350 v2</p>
              </div>
            </Link>
          </div>
          <div className="mt-3 home-catagory">
            <Link to="product/catagory/Yeezy500" className="home-link">
              <div className="link-info-fild">
                <img src="https://i.ibb.co/k2kQctJ/3.jpg" alt="" />
                <p>Yeezy 500</p>
              </div>
            </Link>
          </div>
          <div className=" mt-3 home-catagory">
            <Link to="product/catagory/UltraBoost" className="home-link">
              <div className="link-info-fild">
                <img src="https://i.ibb.co/hLSywF7/1.jpg" alt="" />
                <p>Ultra Boost</p>
              </div>
            </Link>
          </div>
          <div className=" mt-3 home-catagory">
            <Link to="product/catagory/Yeezy700" className="home-link">
              <div className="link-info-fild">
                <img src="https://i.ibb.co/Y73FTx1/2.jpg" alt="" />
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
                  src="https://i.ibb.co/R9JDLdd/Degs.jpg"
                  alt=""
                  className="ladisbag-image"
                />
                <p>Designers Shoes</p>
              </div>
            </Link>
          </div>
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
                  src="https://i.ibb.co/ccvXVhk/ladisbag.webp"
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
                <img src="https://i.ibb.co/VQ3fyWy/Watch.jpg" alt="" />
                <p>Watch</p>
              </div>
            </Link>
          </div>
          <div className=" mt-3 home-catagory">
            <Link to="product/catagory/Wallet" className="home-link">
              <div className="link-info-fild">
                <img
                  src="https://i.ibb.co/hC1xKst/walate.jpg"
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
                <img src="https://i.ibb.co/QNmXWGz/others.png" alt="" />
                <p>Others</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/*Accessories section  End */}

      <div className="row mt-3">
        <div className="col-lg-7 col-sm-12 thard-contaent mt-5">
          <img src="https://i.ibb.co/DYW7SbY/mideljpg.jpg" alt="" />
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
