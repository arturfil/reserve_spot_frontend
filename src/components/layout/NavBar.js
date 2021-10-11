import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar fixed="top" collapseOnSelect className="landingNav" expand="sm">
      <Container>
        <Navbar.Brand href="#home">Think Easy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#other">About Us</Nav.Link>
            <Nav.Link href="#contactUs">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/login">Log In</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
