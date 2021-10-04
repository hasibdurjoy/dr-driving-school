import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-3">
            <p className="text-center">Patience is something you admire in the driver behind you and scorn in the one ahead</p>
            <div className="text-center">
                <i className="mx-2 fs-3 fab fa-facebook"></i>
                <i className="mx-2 fs-3 fab fa-instagram-square"></i>
                <i className="mx-2 fs-3 fab fa-twitter"></i>
                <i className="mx-2 fs-3 fab fa-youtube"></i>
            </div>
            <p className="text-center m-0 p-2">Copyright @2022 all right reserved</p>
        </div>
    );
};

export default Footer;