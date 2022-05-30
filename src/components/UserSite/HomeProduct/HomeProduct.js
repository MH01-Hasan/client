import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeProduct.css";
import catagory1 from "../../../images/download.jfif";
import catagory2 from "../../../images/catagory2.webp";
import catagory3 from "../../../images/catagory3.png";
import catagory4 from "../../../images/catagory4.webp";

import Addi1 from "../../../images/addi1.webp";
import Add2 from "../../../images/addi2.webp";
import Add3 from "../../../images/add3.webp";
import Add4 from "../../../images/addi4.webp";

import bannerimage from "../../../images/mideljpg.jpg";
import ladisbag from "../../../images/ladisbag.webp";
import watch from "../../../images/Watch.jpg";

import walate from "../../../images/walate.jfif";
import Others from "../../../images/others.png";

const HomeProduct = () => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch("https://secret-ravine-65882.herokuapp.com/Product")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="mb-5 mx-3">
            <div className="row mt-5 catagory-fild">
                <h3>Hottest Nike Collections🏃</h3>
                <div className="mt-3 home-catagory">
                    <Link to="product/catagory/AirForce" className="home-link">
                        <div className="link-info-fild">
                            <img src={catagory1} alt="" />
                            <p>Air Force</p>
                        </div>
                    </Link>
                </div>
                <div className="mt-3 home-catagory">
                    <Link to="product/catagory/AirJorden" className="home-link">
                        <div className="link-info-fild">
                            <img src={catagory2} alt="" />
                            <p>Air Jordan</p>
                        </div>
                    </Link>
                </div>
                <div className=" mt-3 home-catagory">
                    <Link to="product/catagory/AirMax" className="home-link">
                        <div className="link-info-fild">
                            <img src={catagory3} alt="" />
                            <p>Air Max</p>
                        </div>
                    </Link>
                </div>
                <div className=" mt-3 home-catagory">
                    <Link to="product/catagory/Dunk" className="home-link">
                        <div className="link-info-fild">
                            <img src={catagory4} alt="" />
                            <p>Dunk</p>
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
                                <p>Yeezy_350_v2</p>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-3 home-catagory">
                        <Link to="product/catagory/Yeezy500" className="home-link">
                            <div className="link-info-fild">
                                <img src={Add2} alt="" />
                                <p>Yeezy_500</p>
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
                                <p>Yeezy_700</p>
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
                                <p>watch</p>
                            </div>
                        </Link>
                    </div>
                    <div className=" mt-3 home-catagory">
                        <Link to="product/catagory/Wallet" className="home-link">
                            <div className="link-info-fild">
                                <img src={walate} alt="" className="ladisbag-image" />
                                <p>wallet</p>
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
