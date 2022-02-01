import React from 'react';
import { Link } from "react-router-dom";

/*  
    Package for React bootstrap component
*/
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap'

/* 
    React Icon Library
*/
import { HiRefresh } from 'react-icons/hi';
import { AiFillSetting } from "react-icons/ai";

import Logo from '../images/logo.png'

const Header = (props) => {    

    // Header props for different page rendering
    const { 
        refreshPage, // Triggers refresh function in Home page
        iconHide, // Conditional rendering in About page 
        changeLayout //Layout Change in Photos, triggers a function in Home page
    } = props  

  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/nirovision">
                <img className="logo" src={Logo} alt="Nirovision Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/nirovision">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                </Nav>
                {
                    iconHide === 'hidden' ? '' : 
                    <Nav className="nav-icon-holder">
                    <Nav.Item className="nav-icon">
                        <HiRefresh onClick={refreshPage}/>
                    </Nav.Item>
                    <Nav.Item className="nav-icon">
                        <AiFillSetting onClick={changeLayout}/>
                    </Nav.Item>
                </Nav>
                }
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  );
}

export default Header;