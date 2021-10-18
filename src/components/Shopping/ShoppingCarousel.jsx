import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-bootstrap/Carousel";
import "./ShoppingCarousel.css";

const ShoppingCarousel = () => {

    return (
        <Carousel fade>
            <Carousel.Item>
                <img className="d-block w-100" src="/img/carousel/img1.jpg" alt="First slide"/>
                <Carousel.Caption>
                    <h3>2021</h3>
                    <p>REBORN</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/img/carousel/img2.jpg" alt="Second slide"/>
                <Carousel.Caption>
                    <h3>2021</h3>
                    <p>REBORN</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/img/carousel/img3.jpg" alt="Third slide"/>
                <Carousel.Caption>
                    <h3>2021</h3>
                    <p>REBORN</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/img/carousel/img4.jpg" alt="Fourth slide"/>
                <Carousel.Caption>
                    <h3>2021</h3>
                    <p>REBORN</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/img/carousel/img5.jpg" alt="Fifth slide"/>
                <Carousel.Caption>
                    <h3>2021</h3>
                    <p>REBORN</p>>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default ShoppingCarousel;