import React from 'react';

const About = () => {
    return (
        // about us section 
        <div className="container mt-5 d-flex">
            <div className="w-50 container">
                <img src="./driving-logo.jpg" alt="" className="img-fluid w-75" />
            </div>
            <div className=" container w-50 text-center d-flex align-items-center">
                <div>
                    <h2>About US</h2>
                    <p>We are providing best driving training inside dhaka. We have many qualified and certified trainer who provide service to students and helps to learn properly. We provide a certificate after completing training</p>
                </div>
            </div>
        </div>
    );
};

export default About;