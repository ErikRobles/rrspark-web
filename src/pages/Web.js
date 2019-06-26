import React, { Component } from 'react';
import '../App.css';

import Nav from '../components/Nav';

class Web extends Component {
    render() {
        return (
            <div className="wrapper">
                <Nav />
            <h1>Sitio Web page</h1>
            </div>
        );
    }
}

export default Web