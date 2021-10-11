import AboutUs from "../components/layout/AboutUs";
import ContactUs from "../components/layout/ContactUs";
import Home from "../components/layout/Home";
import NavBar from "../components/layout/NavBar";
import Services from "../components/layout/Services";

const LandingPageView = () => {
  return (
    <>
      <NavBar/>      
      <Home />
      <Services />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default LandingPageView;
