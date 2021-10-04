import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Header = () => {
    const navButtonStyle = {
        fontWeight: "bold",
        color: "cadetblue"
    }
    return (
        <div className="header">
            <div>
                <NavLink to="/">
                    <img className="logo-img" src="logo.png" alt="" />
                </NavLink>
            </div>
            <div>
                <Nav className="me-auto">
                    <NavLink
                        to="/home"
                        activeStyle={navButtonStyle}
                        className="nav-button"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeStyle={navButtonStyle}
                        className="nav-button"
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/services"
                        activeStyle={navButtonStyle}
                        className="nav-button"
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/contact"
                        activeStyle={navButtonStyle}
                        className="nav-button"
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/teachers"
                        activeStyle={navButtonStyle}
                        className="nav-button"
                    >
                        Teachers
                    </NavLink>
                </Nav>
            </div>
            <div>
                <p style={{ margin: '0' }}><i className="fas fa-phone-alt"></i>   +0099876543210</p>
                <p style={{ margin: '0' }}><i className="far fa-envelope"></i>  dr.driving@gmail.com</p>
            </div>
        </div>

    );
};

export default Header;