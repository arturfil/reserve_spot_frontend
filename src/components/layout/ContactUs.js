
const ContactUs = () => {
  return (
    <div id="contactUs">
      <div className="container-fluid contact">
        <div className="row">
          <form action="mailto:will@thinkeazy.org" method="get" encType="text/plain">
            <h4>Contact Us</h4>
            <input placeholder="Subject" type="text" className="form-control" />
            <input placeholder="name" type="text" className="form-control" />
            <input placeholder="email" type="text" className="form-control" />
            <textarea
              placeholder="message"
              type="text"
              className="form-control"
            />
            <button className="btn btn-dark form-control">Send</button>
          </form>
        </div>
        <div className="row">
          <h4>Where To Reach Us</h4>
          <p>
            Email: will@thinkeasy.org
            <br />
            Phone: +1 (305) 354 EASY
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
