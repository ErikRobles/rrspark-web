import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../lang/en';
import es from '../lang/es';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('es', es);
counterpart.setLocale('es');


class Nav extends Component {
     openNav() {
       document.getElementById("mySidenav").style.width = "360px";
    }
     closeNav() {
       document.getElementById("mySidenav").style.width = "0";
    }

constructor(props) {
    super(props);
    this.onLangChange = this.onLangChange.bind(this);
}
    state = {
        lang: 'en'
    }

    onLangChange = (lang) => {
        this.setState({lang});
        counterpart.setLocale(lang);
    }

    render() {
        
        return (
                <div id="mySidenav" className="sidenav">
                    <div className="menu-wrapper">
                        <a href="javascript:void(0)" className="closebtn" style={{cursor: "pointer"}} onClick={() => this.closeNav()}>&times;</a>
                        <NavLink exact to="/" activeClassName="active a-link">- <Translate content="UppercaseMenuHome" className="big-cap" /><Translate content="lowercaseMenuHome" className="translateLower" /></NavLink>
                        <NavLink exact to="/Portfolio" activeClassName="active a-link">- <Translate content="UppercaseMenuPortfolio" className="big-cap" /><Translate content="lowercaseMenuPortfolio" className="translateLower" /></NavLink>
                        <NavLink exact to="/Work" activeClassName="active a-link">- <Translate content="UppercaseMenuHow" className="big-cap" /><Translate content="lowercaseMenuHow" className="translateLower" /> <Translate content="UppercaseMenuWe" className="big-cap" /><Translate content="lowercaseMenuWe" className="translateLower" /> <Translate content="UppercaseMenuWork" className="big-cap" /><Translate content="lowercaseMenuWork" className="translateLower" /></NavLink>
                        <NavLink exact to="/Servicios" activeClassName="active a-link">- <Translate content="UppercaseMenuServices" className="big-cap" /><Translate content="lowercaseMenuServices" className="translateLower" /></NavLink>
                        <NavLink exact to="/Contacto" activeClassName="active a-link">- <Translate content="UppercaseMenuContact" className="big-cap" /><Translate content="lowercaseMenuContact" className="translateLower" /></NavLink>
                    </div>
                    <div className="sidebar-content">
                        <p>Suspendisse et magna eget diam ultrices elementum. Duis molestie suscipit dui, eu finibus lorem gravida sed. Vestibulum nec diam non nisl aliquet auctor in at nulla. Sed at gravida nisi, eu semper magna. Phasellus quam nisi, vestibulum a iaculis nec, molestie ut quam. Fusce lacus metus, viverra vitae hendrerit in, ultrices ac nibh. 
                        <br />Cras interdum magna et sem fermentum efficitur. Quisque vitae accumsan sapien. Donec et magna at risus tristique facilisis. Proin ornare diam et urna imperdiet eleifend.</p>
                    </div>
                    <div className="sidebar-content">
                        <div className="wrapper">
                            <NavLink exact to="/Team" activeClassName="active" className="team-button a-link-2"><Translate content="team" className="team" /></NavLink><br />
                                <NavLink exact to="/Aviso" activeClassName="active" className="aviso a-link-2">Aviso de Privacidad</NavLink>
                                <p className="copy">&copy;2019 RRspark</p>
                        </div>
                    </div>
                    <div className="colored-side">
                        <div className="link-holder">
                            <a className="language" style={{cursor: "pointer"}} value="en" role="button" id="en" onClick={() => this.onLangChange('en')}>EN</a>
                            <a className="language" style={{cursor: "pointer"}} value="es" role="button" id="es" onClick={() => this.onLangChange('es')}>ES</a>
                        </div>
                        <span className="button-area" style={{cursor: "pointer"}} onClick={() => this.openNav()}>&#43;</span>
                        <h3 className="colored-side-slogan">RRspark Stellar Web Studio</h3>
                    </div>
                </div>
        );
    }
}



export default Nav

