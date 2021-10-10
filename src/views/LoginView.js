import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import GoogleButton from "../components/GoogleButton";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

const LoginView = () => {
  const history = useHistory();
  const { loginUser } = useContext(AuthContext);
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    // if the form passes this check then go ahead and submit it
    const response = await loginUser(user);
    if (response?.errors) {
      setErrors(response.errors);
    }
    history.push("/home");
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5">
      <Link to="/">
        <i
          style={{ color: "black", fontSize: "40px" }}
          className="bi bi-arrow-left-circle-fill"
        ></i>
      </Link>
      <Form
        className="form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <h2>Login</h2>
        <Form.Group>
          <Form.Control
            value={user.email}
            onChange={handleChange}
            name="email"
            required
            type="email"
            placeholder="Email"
          />
          <Form.Control.Feedback type="invalid">
            Email is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={user.password}
            name="password"
            onChange={handleChange}
            required
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          className="form-control"
          variant="outline-success"
          type="submit"
        >
          Log In
        </Button>
        <GoogleButton />
        <Link to="/signup">Don't have an account yet? Signup</Link>
      </Form>
    </div>
  );
};

export default LoginView;
