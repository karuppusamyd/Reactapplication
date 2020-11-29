import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import Home from './Home';
  import AboutUs from './About';
  import ContactUs from './Contact';

class Navigation extends React.Component{

    render(){
        return(
           
                
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">Website</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                    
                                    </Nav>
                                    <Form inline>
                                    
                                    <Button variant="outline-success">Cart</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                           
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact">
                                    <ContactUs />
                                </Route>
                            </Switch>
                        </Router>
                   
           
        )  
    }
}

export default Navigation;