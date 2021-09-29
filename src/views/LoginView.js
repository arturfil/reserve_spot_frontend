import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginView = () => {
  const { loginUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(user)
    setUser({
      email: '',
      password: ''
    })
  }

  return (
    <div className="container mt-5">
      <form className="form">
        <h2>Login</h2>
        <input 
          onChange={handleChange}
          name="email"
          value={user.email}
          className="form-control" 
          type="text" 
          placeholder="Email" 
        />
        <input
          onChange={handleChange}
          name="password"
          value={user.password}
          className="form-control"
          type="password"
          placeholder="Password"
        />
        <button 
          onClick={handleSubmit}
          className="btn btn-outline-primary form-control mb-3"
        >
          Login
        </button>
        <Link to="/signup">Don't have an account yet? Signup</Link>
      </form>
    </div>
  );
};

export default LoginView;
