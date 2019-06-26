import React, { Component } from 'react';
import '../App.css';

import Nav from '../components/Nav';

class Ecommerce extends Component {
    render() {
        return (
            <div className="wrapper">
                <Nav />
            <h1>E-Commerce page</h1>
            </div>
        );
    }
}

export default Ecommerce