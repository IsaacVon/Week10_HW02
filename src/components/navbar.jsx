import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";


class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">portfolio. Isaac Householder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#home">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </>
         );
    }
}

 
export default NavBar;