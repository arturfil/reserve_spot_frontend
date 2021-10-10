import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import AboutUs from "../components/layout/AboutUs";
import ContactUs from "../components/layout/ContactUs";
import Home from "../components/layout/Home";
import Services from "../components/layout/Services";

const LandingPageView = () => {
  return (
    <>
      {/* <ul className="landingNav">
        <li>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#other">About Us</a>
          <a href="#contactUs">Contact Us</a>
          <Link to="/login">Log In</Link>
        </li>
      </ul> */}
      <Navbar fixed="top" collapseOnSelect className="landingNav" expand="lg" >
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
      <Home />
      <Services />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default LandingPageView;
