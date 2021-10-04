import React, { useEffect, useState } from 'react';
import { Row, Button, Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import './Home.css';
import CarouselItem from '../CarouselItem/CarouselItem'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./homeService.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const history = useHistory();
    const seeAllService = () => {
        history.push("/services");
    }
    return (
        <div>
            <Carousel className="carousel-container">
                {
                    services.map(service => <Carousel.Item>
                        <img
                            className="d-block w-100 mx-auto carousel-image"
                            src={service.img}
                            alt="First slide"
                        />
                        <Carousel.Caption className="carousel-text">
                            <h3 className="text-white">{service.serviceName}</h3>
                            <h4 className="text-white">{service.description}</h4>
                            <h2 className="text-white">Offering At : {service.price} BDT</h2>
                        </Carousel.Caption>
                    </Carousel.Item>)
                }
            </Carousel>
            <h3 className="text-center">Services</h3>
            <Row xs={1} md={4} className="g-4 mx-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
            <div className="text-center mt-3">
                <Button onClick={seeAllService}>See All Services</Button>
            </div>
        </div>
    );
};

export default Home;