import React from 'react';
import './Teacher.css';
import { Card, Col } from 'react-bootstrap';

const Teacher = (props) => {

    // destructuring from teacher 
    const { name, img, teach, age, experience } = props.teacher;
    return (

        // seeting teacher card 
        <Col className="shadow rounded ">
            <Card className="card h-100 teacher">
                <Card.Img variant="top" src={img} className=" p-3 bg-white" height="300px" />
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <h5>Teach : <small>{teach}</small></h5>
                    <h5>Age : <small>{age}</small></h5>
                    <h5>Experience : <small>{experience} Years</small></h5>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Teacher;