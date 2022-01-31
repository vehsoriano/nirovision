import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap'

import { HiRefresh } from 'react-icons/hi';
import { AiFillSetting } from "react-icons/ai";

import Logo from '../images/logo.png'

const click = () => {
    console.log('click')
}

const Header = (props) => {    

    const { refreshPage, iconHide } = props

    console.log(iconHide)

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
                    <Link to="/nirovision">Home</Link>
                    <Link to="/about">About</Link>
                </Nav>
                {
                    iconHide == 'hidden' ? '' : 
                    <Nav className="nav-icon-holder">
                    <Nav.Item className="nav-icon">
                        <HiRefresh onClick={refreshPage}/>
                    </Nav.Item>
                    <Nav.Item className="nav-icon">
                        <AiFillSetting onClick={click}/>
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