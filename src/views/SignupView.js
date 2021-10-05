import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const SignupView = () => {
  const { signUpUser } = useContext(AuthContext)
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signUpUser(user);
    setUser({
      email: '',
      password: '',
      name: ''
    })
  }

  return (
    <div className="container mt-5">
      <form className="form">
        <h2>Sign Up View</h2>
        <input
          onChange={handleChange} 
          value={user.name}
          name="name"
          className="form-control" 
          type="text" 
          placeholder="Name" 
        />
        <input
          onChange={handleChange} 
          value={user.email}
          name="email"
          className="form-control" 
          type="text" 
          placeholder="Email" 
        />
        <input
          onChange={handleChange}
          value={user.password}
          name="password"
          className="form-control"
          type="password"
          placeholder="Password"
        />
        <button
          onClick={handleSubmit} 
          className="btn btn-outline-dark form-control mb-3"
        >
          Sign Up
        </button>
        <Link to="/login">Already have an account? Login</Link>
      </form>
    </div>
  );
};

export default SignupView;
