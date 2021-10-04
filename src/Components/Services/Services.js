import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = (props) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <Row xs={1} md={3} className="g-4 mx-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;