import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';



import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Work from './pages/Work';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Team from './pages/Team';
import Aviso from './pages/Aviso';
import Web from './pages/Web';
import Ecommerce from './pages/Ecommerce';
import Contenido from './pages/Contenido';

class App extends Component {
  render() {
    return (
      <Router basename="/"> 
        <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Portfolio' component={Portfolio} />
        <Route exact path='/Work' component={Work} />
        <Route exact path='/Servicios' component={Servicios} />
        <Route exact path='/Contacto' component={Contacto} />
        <Route exact path='/Team' component={Team} />
        <Route exact path='/Aviso' component={Aviso} />
        <Route exact path='/Web' component={Web} />
        <Route exact path='/Ecommerce' component={Ecommerce} />
        <Route exact path='/Contenido' component={Contenido} />
        </div>
      </Router>
    );
  }
}



export default App;
