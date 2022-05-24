import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeProduct.css";
import catagory1 from "../../../images/download.jfif"
import catagory2 from "../../../images/catagory2.webp"
import catagory3 from "../../../images/catagory3.png"
import catagory4 from "../../../images/catagory4.webp"

import Addi1 from "../../../images/addi1.webp"
import Add2 from "../../../images/addi2.webp"
import Add3 from "../../../images/add3.webp"
import Add4 from "../../../images/addi4.webp"

import bannerimage from "../../../images/slidebanner.webp"
import ladisbag from "../../../images/ladisbag.webp"
import watch from "../../../images/Watch.jpg"

import walate from "../../../images/walate.jfif"
import Others from "../../../images/others.png"



const HomeProduct = () => {

    const [products, setProducts] = useState([])
    console.log(products)


    useEffect(() => {
        fetch('http://localhost:5000/Product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='mb-5 mx-5'>
            <div className='row mt-5 catagory-fild'>
                <h3>Hottest Nike Collections🏃</h3>
                <div className="mt-3 home-catagory">
                    <Link to="product/catagory/AirJorden"  >
                        <div className="link-info-fild">
                            <img src={catagory1} alt="" />
                            <p>Air Force</p>
                        </div>
                    </Link>
                </div>
                <div className="mt-3 home-catagory" >
                    <Link to="product/catagory/AirForce">
                        <div className="link-info-fild">
                            <img src={catagory2} alt="" />
                            <p>Air Jorden</p>
                        </div>
                    </Link>

                </div>
                <div className=" mt-3 home-catagory" >
                    <Link to="product/catagory/AirMax">
                        <div className="link-info-fild">
                            <img src={catagory3} alt="" />
                            <p>Air Max</p>
                        </div>
                    </Link>

                </div>
                <div className=" mt-3 home-catagory" >
                    <Link to="product/catagory/Dunk">
                        <div className="link-info-fild">
                            <img src={catagory4} alt="" />
                            <p>Dunk</p>
                        </div>
                    </Link>

                </div>
            </div>

            <div className="mt-5 Addidas">
                <h2>Trending Now🔥 Adidas</h2>
                <div className='row mt-5 catagory-fild'>
                    <div className="mt-3 home-catagory">
                        <Link to="product/catagory/AirJorden"  >
                            <div className="link-info-fild">
                                <img src={Addi1} alt="" />
                                <p>Yeezy_350_v2</p>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-3 home-catagory" >
                        <Link to="product/catagory/AirForce">
                            <div className="link-info-fild">
                                <img src={Add2} alt="" />
                                <p>Yeezy_500</p>
                            </div>
                        </Link>

                    </div>
                    <div className=" mt-3 home-catagory" >
                        <Link to="product/catagory/AirMax">
                            <div className="link-info-fild">
                                <img src={Add3} alt="" />
                                <p>Ultra Boost</p>
                            </div>
                        </Link>

                    </div>
                    <div className=" mt-3 home-catagory" >
                        <Link to="product/catagory/Dunk">
                            <div className="link-info-fild">
                                <img src={Add4} alt="" />
                                <p>Yeezy_700</p>
                            </div>
                        </Link>

                    </div>
                </div>

            </div>


            <div className="row mt-5">
                <div className="col-lg-7 col-sm-12 thard-contaent mt-5">
                    <img src={bannerimage} alt="" />

                </div>

                <div className="col-lg-5 col-sm-12 mt-5 thard-contaent-secend-part">
                    <h1>MNVN ORANGE</h1>
                    <p>The Yeezy 700 V3 debuted in 2019 as an evolutionary version of the original Yeezy Boost 700. Redesigned style elements include the removal of Boost cushioning in the midsole in favor of lightweight EVA foam and an added RPU cage for stability. The shoe’s blue “Azareth” Primeknit upper is contrasted by sections of white and dark green fabric. A futuristic glow-in-the-dark treatment is applied to the translucent overlay cage. Release date: August 29, 2020.</p>

                </div>

            </div>

            <div className="Others-section mt-5">
                <h1 className="mt-5 mb-3">Accossoris</h1>
                <div className="row">
                    <div className="walate col-lg-12 col-sm-12">
                        <div className="row others-part-one">
                            <div className="first-image ">
                                <Link to="/product/catagory/LadiesBag">
                                    <div>
                                        <img src={ladisbag} alt="" className="ladisbag-image" />
                                    </div>
                                </Link>


                            </div>
                            <div className="secend-image">
                                <Link to="/">
                                    <div className="contaner">
                                        <img src={watch} alt="" />
                                    </div>

                                </Link>

                            </div>

                        </div>

                    </div>

                    <div className="third-dection">
                        <div className="row others-part-one">
                            <div className="third-first-image ">
                                <Link to="/product/catagory/LadiesBag">
                                    <div>
                                        <img src={walate} alt="" className="ladisbag-image" />
                                    </div>
                                </Link>


                            </div>
                            <div className="third-secend-image">
                                <Link to="/">
                                    <div className="contaner">
                                        <img src={Others} alt="" />
                                    </div>

                                </Link>

                            </div>

                        </div>

                    </div>



                </div>

            </div>





        </div>
    );
};

export default HomeProduct;
