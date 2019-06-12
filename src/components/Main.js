import React, { Component } from 'react';
import '../App.css';
import LogoImage from '../assets/img/LogoRRspark-Trans.png';

class Main extends Component {
    render() {
        return(
            <div className="main-grid-container">
            <div className="item1">
            <div className="item-wrapper">
            <div className="image-holder">
                <img className="logo-image" src={LogoImage} alt="Logo" />
                <h1 className="uppercase">Let our spark ignite your vision</h1>
            </div>
            </div>
            </div>
            <div className="item2">
                <div className="item-wrapper-2">
                    <h3 className="promo-header">Your web and app<br /> heavy lifters</h3>
                    <div className="center-obj">
                        <a href="/Work" className="button-box button-text-1">Check out how we work</a>
                    </div>
                </div>
            </div>
            <div className="item3">
                <div className="item-wrapper-3">
                    <div id="show-hide">
                    <div id="outer" className="outer">
                        <h1 className="services">SERVICIOS</h1>
                    </div>
                    <div id="inner">    
                    <div className="services-menu">
                        <ul className="list-items">
                            <li className="service-links">
                                <a href="http://rrspark.com" style={{position: 'relative', zIndex: 50}}>Sitio Web</a>
                            </li>
                            <li className="service-links">
                                <a href="http://rrspark.com" style={{position: 'relative',zIndex: 50}}>E-Commerce</a>
                            </li>
                            <li className="service-links">
                                <a href="http://rrspark.com">Contenido Web</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="item4">
                <div className="container">
                    <div className="row">
                        <div className="col standard-info">
                            <p className="footer-text">info@rrspark.com</p>
                            <p className="footer-text">MX (55) 5762 7080</p>
                            <p className="footer-text">USA (206) 905 9934</p>
                        </div>
                        <div className="col">
                            <div className="room-to-breathe">
                                <div className="social">
                                <a href="/Contacto" className="footer-contact-button">CONTACTO</a>
                            </div>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>        
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-facebook-f extra-padding-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Main