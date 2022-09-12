
import React, {useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Navbar, Container, NavDropdown, Form} from 'react-bootstrap';


function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Movies Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
