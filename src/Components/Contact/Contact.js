import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        // contact section 
        // head office contact 
        <div className="mt-5 container">
            <h3 className="text-center mb-4">Head Office</h3>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className="card h-100">
                        <i className="text-center mt-3 fs-1 fas fa-map-marker-alt"></i>
                        <Card.Body>
                            <Card.Title>Office Address</Card.Title>
                            <Card.Text>
                                <p>72 , Malibagh Road , Dhaka-1208</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card h-100">
                        <i className="text-center mt-3 fs-1 fas fa-phone-volume"></i>
                        <Card.Body>
                            <Card.Title>Call Now</Card.Title>
                            <Card.Text>
                                +0099876543210
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card h-100">
                        <i className="text-center mt-3 fs-1 fas fa-envelope"></i>
                        <Card.Body>
                            <Card.Title>Mail Now</Card.Title>
                            <Card.Text>
                                dr.driving@gmail.com
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* branch office contact  */}
            <h3 className="text-center mt-5 mb-3">Branch Office</h3>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className="card h-100">
                        <i className="text-center mt-3 fs-1 fas fa-map-marker-alt"></i>
                        <Card.Body>
                            <Card.Title>Office Address</Card.Title>
                            <Card.Text>
                                <p>32 , Mirpur Road , Dhaka-1207</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card h-100">
                        <i className="text-center mt-3 fs-1 fas fa-phone-volume"></i>
                        <Card.Body>
                            <Card.Title>Call Now</Card.Title>
                            <Card.Text>
                                +0099876543220
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card h-100">
                        <i className="text-center mt-3 fs-1 fas fa-envelope"></i>
                        <Card.Body>
                            <Card.Title>Mail Now</Card.Title>
                            <Card.Text>
                                dr.driving.branch@gmail.com
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;