import { Link } from "react-router-dom";

const SignupView = () => {
  return (
    <div className="container mt-5">
      <form className="form">
        <h2>Sign Up View</h2>
        <input 
          className="form-control" 
          type="text" 
          placeholder="Name" 
        />
        <input 
          className="form-control" 
          type="text" 
          placeholder="Email" 
        />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-outline-dark form-control mb-3">Sign Up</button>
        <Link to="/login">Already have an account? Login</Link>
      </form>
    </div>
  );
};

export default SignupView;
