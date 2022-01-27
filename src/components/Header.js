import React, { useState } from 'react';

import {
    Navbar,
    Nav,
    Container,
    Button,
    Link,
    Collapse
} from 'react-bootstrap'

import { HiRefresh } from 'react-icons/hi';
import { AiFillSetting } from "react-icons/ai";

import Logo from '../images/logo.png'

const click = () => {
    console.log('click')
}

const Header = () => {    

  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">
                <img className="logo" src={Logo} alt="Nirovision Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Nav className="nav-icon-holder">
                    <Nav.Item className="nav-icon">
                        <HiRefresh onClick={click}/>
                    </Nav.Item>
                    <Nav.Item className="nav-icon">
                        <AiFillSetting />
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  );
}

export default Header;