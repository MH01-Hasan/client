import React from "react";
import { Link } from "react-router-dom";
import "./HomeProduct.css";
import catagory1 from "../../../images/8.jpg";
import catagory2 from "../../../images/7.jpg";
import catagory3 from "../../../images/6.jpg";
import catagory4 from "../../../images/5.jpg";

import Addi1 from "../../../images/4.jpg";
import Add2 from "../../../images/3.jpg";
import Add3 from "../../../images/1.jpg";
import Add4 from "../../../images/2.jpg";

import bannerimage from "../../../images/mideljpg.jpg";
import ladisbag from "../../../images/ladisbag.webp";
import watch from "../../../images/Watch.jpg";

import walate from "../../../images/walate.jfif";
import Others from "../../../images/others.png";

const HomeProduct = () => {
    return (
        <div className="mb-5 mx-3">
            <div className="row mt-5 catagory-fild">
                <h3>Hottest Nike Collections🏃</h3>
                <div className="mt-3 home-catagory">
                    <Link to="product/catagory/AirForce" className="home-link">
                        <div className="link-info-fild">
                            <img src={catagory1} alt="" />
                            <p>Air Force 1</p>
                        </div>
                    </Link>
                </div>
                <div className="mt-3 home-catagory">
                    <Link to="product/catagory/AirJorden" className="home-link">
                        <div className="link-info-fild">
                            <img src={catagory2} alt="" />
                            <p>Air Jordan 1</p>
                        </div>
                    </Link>
                </div>
                <div className=" mt-3 home-catagory">
                    <Link to="product/catagory/AirMax" className="home-link">
                        <div className="link-info-fild">
                            <img src={catagory3} alt="" />
                            <p>Air Jordan 4</p>
                        </div>
                    </Link>
                </div>
                <div className=" mt-3 home-catagory">
                    <Link to="product/catagory/Dunk" className="home-link">
                        <div className="link-info-fild">
                            <img src={catagory4} alt="" />
                            <p>Nike Dunk</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="mt-5 Addidas">
                <h2>Trending Now🔥 Adidas</h2>
                <div className="row mt-5 catagory-fild">
                    <div className="mt-3 home-catagory">
                        <Link to="product/catagory/Yeezy_350_v2" className="home-link">
                            <div className="link-info-fild">
                                <img src={Addi1} alt="" />
                                <p>Yeezy 350 v2</p>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-3 home-catagory">
                        <Link to="product/catagory/Yeezy500" className="home-link">
                            <div className="link-info-fild">
                                <img src={Add2} alt="" />
                                <p>Yeezy 500</p>
                            </div>
                        </Link>
                    </div>
                    <div className=" mt-3 home-catagory">
                        <Link to="product/catagory/UltraBoost" className="home-link">
                            <div className="link-info-fild">
                                <img src={Add3} alt="" />
                                <p>Ultra Boost</p>
                            </div>
                        </Link>
                    </div>
                    <div className=" mt-3 home-catagory">
                        <Link to="product/catagory/Yeezy700" className="home-link">
                            <div className="link-info-fild">
                                <img src={Add4} alt="" />
                                <p>Yeezy 700</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-5 Addidas">
                <h2>Accessories 🔥</h2>
                <div className="row mt-2 catagory-fild">
                    <div className="mt-3 home-catagory">
                        <Link to="/product/catagory/LadiesBag" className="home-link">
                            <div className="link-info-fild">
                                <img src={ladisbag} alt="" className="ladisbag-image" />
                                <p>Ladies Bag</p>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-3 home-catagory">
                        <Link to="/product/catagory/Watch" className="home-link">
                            <div className="link-info-fild">
                                <img src={watch} alt="" />
                                <p>Watch</p>
                            </div>
                        </Link>
                    </div>
                    <div className=" mt-3 home-catagory">
                        <Link to="product/catagory/Wallet" className="home-link">
                            <div className="link-info-fild">
                                <img src={walate} alt="" className="ladisbag-image" />
                                <p>Wallet</p>
                            </div>
                        </Link>
                    </div>
                    <div className=" mt-3 home-catagory">
                        <Link to="product/catagory/Others" className="home-link">
                            <div className="link-info-fild">
                                <img src={Others} alt="" />
                                <p>Others</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-lg-7 col-sm-12 thard-contaent mt-5">
                    <img src={bannerimage} alt="" />
                </div>

                <div className="col-lg-5 col-sm-12 mt-2 thard-contaent-secend-part">
                    <h1>Travis Scott X Nike Air Jordan 1 Low</h1>
                    <p>
                        This AJ 1 Low features a black upper with dark brown overlays and red accents. Lateral side La Flame backwards Swoosh have become a Travis Scott signature. Red embroidered logos on heels and “Cactus Jack” insignias on lateral side panels. Sail midsole and dark brown outsole complete the design.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default HomeProduct;
