import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const LoginView = () => {
  const history = useHistory();
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
    history.push('/home')
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
          type="email" 
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
          className="btn btn-outline-success form-control mb-3"
        >
          Login
        </button>
        <Link to="/signup">Don't have an account yet? Signup</Link>
      </form>
    </div>
  );
};

export default LoginView;

