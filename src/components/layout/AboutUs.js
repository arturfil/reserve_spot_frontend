import image1 from '../../images/education.jpg'
import image3 from '../../images/education3.jpg';

const AboutUs = () => {
  return (
    <div id="other" className="otherServices">
      <div className="contanier">
        <div className="row box">
          <div className="col">
            <img src={image1} alt="" />
          </div>
          <div className="col">
            <h2>About Us</h2>
            <p>
              We have experience over 15 years delivering the best results
              We have helped over 80+ students graduate with great success in their desired careers
              The help we provide is beyond what is expected in the industry and better than all of our competitors
            </p>
          </div>
        </div>
        <div className="row box">
          <div className="col">
            <h2>We Are Experts</h2>
            <p>
              With our lead tutor, having earned a degree in Mechanical Engineering and Minor in Maths.
              We have the best instuctors and Tutors to help you learn, review and prepare for your courses.
              Help is what you will get and it will be in such a way that you won't pass hardship. 
              It will be smooth sailing, don't worry just start, Think Easy!
            </p>
          </div>
          <div className="col">
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
