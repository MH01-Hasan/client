import React from 'react';
import './Banner.css'
import bannerimage1 from '../../../banner-image/1.jpg'
import bannerimage4 from '../../../banner-image/4.jpg'
import bannerimage5 from '../../../banner-image/5.jpg'
import bannerimage6 from '../../../banner-image/6.jpg'
import bannerimage7 from '../../../banner-image/7.jpg'
import bannerimage8 from '../../../banner-image/air.jpg'
import bannerimage9 from '../../../banner-image/fight.jpg'

const Banner = () => {

    return (

        <div className='banner'>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={bannerimage1} class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerimage4} class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerimage5} class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerimage6} class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerimage7} class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerimage8} class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={bannerimage9} class="d-block w-100 " alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>



    );
};

export default Banner;