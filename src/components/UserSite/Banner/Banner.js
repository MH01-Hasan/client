import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import bannerimage1 from '../../../images/e61650efc5d6acff4c558aab0830d07a.jpg'
import bannerimage2 from '../../../images/Lil_Nas_X_Satan_Shoes.png'
import bannerimage3 from '../../../images/image3.jpg'

const Banner = () => {

    return (
        <div className='banner'>
            <div>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerimage1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerimage2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerimage3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


        </div>
    );
};

export default Banner;