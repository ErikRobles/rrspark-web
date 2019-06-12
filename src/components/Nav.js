import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
     openNav() {
       document.getElementById("mySidenav").style.width = "360px";
    }
     closeNav() {
       document.getElementById("mySidenav").style.width = "0";
    }
    render() {
        return (
                <div id="mySidenav" className="sidenav">
                    <div className="menu-wrapper">
                        <a href="javascript:void(0)" className="closebtn" style={{cursor: "pointer"}} onClick={() => this.closeNav()}>&times;</a>
                        <NavLink exact to="/" activeClassName="active a-link">- <span className="big-cap">H</span>OME</NavLink>
                        <NavLink exact to="/Portfolio" activeClassName="active a-link">- <span className="big-cap">P</span>ORTFOLIO</NavLink>
                        <NavLink exact to="/Work" activeClassName="active a-link">- <span className="big-cap">H</span>OW <span className="big-cap">W</span>E <span className="big-cap">W</span>ORK</NavLink>
                        <NavLink exact to="/Servicios" activeClassName="active a-link">- <span className="big-cap">S</span>ERVICIOS</NavLink>
                        <NavLink exact to="/Contacto" activeClassName="active a-link">- <span className="big-cap">C</span>ONTACTO</NavLink>
                    </div>
                    <div className="sidebar-content">
                        <p>Suspendisse et magna eget diam ultrices elementum. Duis molestie suscipit dui, eu finibus lorem gravida sed. Vestibulum nec diam non nisl aliquet auctor in at nulla. Sed at gravida nisi, eu semper magna. Phasellus quam nisi, vestibulum a iaculis nec, molestie ut quam. Fusce lacus metus, viverra vitae hendrerit in, ultrices ac nibh. 
                        <br />Cras interdum magna et sem fermentum efficitur. Quisque vitae accumsan sapien. Donec et magna at risus tristique facilisis. Proin ornare diam et urna imperdiet eleifend.</p>
                    </div>
                    <div className="sidebar-content">
                        <div className="wrapper">
                            <NavLink exact to="/Team" activeClassName="active" className="team-button a-link-2">Nuestro equipo base</NavLink><br />
                                <NavLink exact to="/Aviso" activeClassName="active" className="aviso a-link-2">Aviso de Privacidad</NavLink>
                                <p className="copy">&copy;2019 RRspark</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="colored-side">
                        <div className="link-holder">
                            <a className="language" href="#">EN</a>
                            <a className="language" href="#">ES</a>
                        </div>
                        <span className="button-area" style={{cursor: "pointer"}} onClick={() => this.openNav()}>&#43;</span>
                        <h3 className="colored-side-slogan">RRspark Stellar Web Studio</h3>
                    </div>
                </div>
        );
    }
}

export default Nav