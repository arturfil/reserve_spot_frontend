import { Link } from "react-router-dom";
import AboutUs from "../components/layout/AboutUs";
import ContactUs from "../components/layout/ContactUs";
import Home from "../components/layout/Home";
import Services from "../components/layout/Services";


const LandingPageView = () => {
  return (
    <>
      <ul className="landingNav">
        <li>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#other">About Us</a>
          <a href="#contactUs">Contact Us</a>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
      <Home/>
      <Services/>
      <AboutUs/>
      <ContactUs/>
    </>
  );
};

export default LandingPageView;
