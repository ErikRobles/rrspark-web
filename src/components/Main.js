import React, { Component } from 'react';
import '../App.css';
import LogoImage from '../assets/img/LogoRRspark-Trans.png';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../lang/en';
import es from '../lang/es';


counterpart.registerTranslations('en', en);
counterpart.registerTranslations('es', es);
counterpart.setLocale('en');


class Main extends Component {
    render() {
        return(
            <div className="main-grid-container">
            <div className="item1">
            <div className="item-wrapper">
            <div className="image-holder">
                <img className="logo-image" src={LogoImage} alt="Logo" />
                <Translate content="slogan" component="h1" className="uppercase" />
            </div>
            </div>
            </div>
            <div className="item2">
                <div className="item-wrapper-2">
                    <Translate content="message1" component="h3" className="promo-header" unsafe={true} />
                    <div className="center-obj">
                        <Translate content="message1Link" component="a" className="button-box button-text-1" href="#/Work" />
                    </div>
                </div>
            </div>
            <div className="item3">
                <div className="item-wrapper-3">
                    <div id="show-hide">
                    <div id="outer" className="outer">
                        <Translate content="services" component="h1" className="services" />
                    </div>
                    <div id="inner">    
                    <div className="services-menu">
                        <ul className="list-items">
                            <li className="service-links">
                                <Translate content="sitioLink" component="a" style={{position: 'relative', zIndex: 50}} href="#/Web" />
                            </li>
                            <li className="service-links">
                                <Translate content="EcommerceLink" component="a" style={{position: 'relative', zIndex: 50}} href="#/Ecommerce" />
                            </li>
                            <li className="service-links">
                                <Translate content="contenidoLink" component="a" style={{position: 'relative', zIndex: 50}} href="#/Contenido" />
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
                                <Translate content="contactLink" component="a" className="footer-contact-button" href="#/Contacto" />    
                            </div>
                                <a href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin-in"></i></a>        
                                <a href="https://www.instagram.com/?hl=en"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f extra-padding-right"></i></a>
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