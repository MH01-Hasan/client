import React from "react";
import "./Banner.css";
import img1 from "../../../images/slide/s1.png";
import img2 from "../../../images/slide/s2.png";
import img3 from "../../../images/slide/s3.png";
import img4 from "../../../images/slide/s4.png";
import img5 from "../../../images/slide/s5.png";
import img6 from "../../../images/slide/s6.png";
import img7 from "../../../images/slide/s7.png";
import img8 from "../../../images/slide/s8.png";
import img9 from "../../../images/slide/s9.png";

const Banner = () => {
  return (
    <div className="banner">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              // src="https://i.ibb.co/BP82nvc/1.png"
              src={img1}
              class="d-block w-100 "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              // src="https://i.ibb.co/JzszK6W/8.png"
              src={img2}
              class="d-block w-100 "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              // src="https://i.ibb.co/CHg20FC/3.png"
              src={img3}
              class="d-block w-100 "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              // src="https://i.ibb.co/Vw4Tz0y/2.png"
              src={img4}
              class="d-block w-100 "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              // src="https://i.ibb.co/2Ykh9N5/9.png"
              src={img5}
              class="d-block w-100 "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              // src="https://i.ibb.co/Nmjqgxb/5.png"
              src={img6}
              class="d-block w-100 "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              // src="https://i.ibb.co/Km8pgqW/4.png"
              src={img7}
              class="d-block w-100 "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              // src="https://i.ibb.co/0XMLFJw/7.png"
              src={img8}
              class="d-block w-100 "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              // src="https://i.ibb.co/VLWHDJp/6.png"
              src={img9}
              class="d-block w-100 "
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
