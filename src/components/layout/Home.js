import { Link } from "react-router-dom";
import image2 from "../../images/education2.jpg";

const Home = () => {
  return (
    <div id="home" className="landingPage">
      <div className="container box">
        <div className="row">
          <div className="col-lg-6 col-md-12 title">
            <h2>Welcome to Think Easy!</h2>
            <p>
              Explore all the services that we have for you! We have cutting edge technology and 
              techniques to provide with the best tutoring!
              Don't wait around and log in to start with your Journey.
            </p>
            <Link className="btn btn-outline-success" to="/login">
              Log In
            </Link>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
