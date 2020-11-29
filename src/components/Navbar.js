import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { render } from 'react-dom';
//import Carousel from 'react-bootstrap/Carousel'

function Navbar() {
        return(
          <Router>
        <div className="container">
          <Navigation />
        <Switch>
          <Route path="/Home" component={Home} exact/>
          <Route path="/About" component={About} exact/>
          <Route path="/Contact" component={Contact} exact/>
        </Switch>
        </div>
      </Router>     
        );
   
    
}

export default Navbar;