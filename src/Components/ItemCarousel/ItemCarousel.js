import React from 'react';
import './ItemCarousel.css';
import { Button, Carousel } from 'react-bootstrap';

const ItemCarousel = (props) => {

    // destructuring from service 
    const { img, serviceName, description, price } = props.service;
    const { seeAllService } = props;
    return (
        // showing carousel items 
        <>
            <img
                className="d-block w-100 mx-auto carousel-image"
                src={img}
                alt="First slide"
            />
            <Carousel.Caption className="carousel-text">
                <h3 className="text-white">{serviceName}</h3>
                <h4 className="text-white">{description}</h4>
                <h2 className="text-white">Offering At : {price} BDT</h2>
                <Button variant="success" onClick={seeAllService} className="mx-3">Enroll Now <i className="fas fa-arrow-right"></i></Button>
                <Button variant="light" onClick={seeAllService} className="mx-3">Learn More <i className="fas fa-arrow-right"></i></Button>
            </Carousel.Caption>
        </>
    );
};

export default ItemCarousel;