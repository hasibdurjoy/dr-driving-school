import React, { useEffect, useState } from 'react';
import { Row, Button, Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router';
import About from '../About/About';
import ItemCarousel from '../ItemCarousel/ItemCarousel';
import Service from '../Service/Service';
import Teacher from '../Teacher/Teacher';
import './Home.css';

const Home = () => {
    // fetching some service  data to show in home page
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./homeService.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    // fetching some teachers  data to show in home page
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./homeTeachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, []);

    // onclick for see all service button 
    const history = useHistory();
    const seeAllService = () => {
        history.push("/services");
    };

    // onclick for see all teachers button 
    const teacherHistory = useHistory();
    const seeAllTeachers = () => {
        teacherHistory.push("/teachers");
    };

    return (
        <div>
            <div>
                {/* carousel item to show on top  */}
                {/* loop to show carousel  */}
                <Carousel className="carousel-container">
                    {
                        services.map(service => <Carousel.Item>
                            <ItemCarousel service={service} seeAllService={seeAllService}></ItemCarousel>
                        </Carousel.Item>)
                    }
                </Carousel>
            </div>

            {/* services item showing on home page  */}
            <div>
                <h3 className="text-center mt-2 mb-3">Services</h3>
                <Row xs={1} md={4} className="g-4 mx-5">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
                <div className="text-center mt-3">
                    <Button onClick={seeAllService} variant="success">See All Services</Button>
                </div>
            </div>

            {/* teachers item showing on home page  */}
            <div>
                <h3 className="text-center m-3">Our Honourable Teachers</h3>
                <Row xs={1} md={4} className="g-4 mx-5">
                    {
                        teachers.map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)
                    }
                </Row>
                <div className="text-center mt-3">
                    <Button onClick={seeAllTeachers} variant="success">See All Teachers</Button>
                </div>
            </div>

            {/* showing about  */}
            <About></About>
        </div>
    );
};

export default Home;