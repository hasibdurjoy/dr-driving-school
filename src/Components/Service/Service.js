import React from 'react';
import './Service.css';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { serviceName, duration, price, teacher, type, img, description } = props.service;
    return (
        <Col className="shadow rounded ">
            <Card className="card h-100 service-card">
                <Card.Img variant="top" src={img} className="service-thumbnail p-3 bg-white" />
                <Card.Body>
                    <Card.Title className="text-center">{serviceName}</Card.Title>
                    <h5>Type : <small>{type}</small></h5>
                    <h5>Duration : <small>{duration}</small></h5>
                    <h5>Trainer : <small>{teacher}</small></h5>
                    <h4>Course Fee : <small>{price} BDT</small></h4>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" className="w-100">Enroll Now</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;