import React, { Component } from 'react';
import '../App.css';

import Nav from '../components/Nav';

class Aviso extends Component {
    render() {
        return (
            <div className="wrapper">
                <Nav />
            <h1>Aviso page</h1>
            </div>
        );
    }
}

export default Aviso