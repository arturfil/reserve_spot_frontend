import { Link } from "react-router-dom";

const ErrorView = () => {
  return (
    <div className="container mt-5">
      <h2>404: The Page You Are Looking For DNE.</h2>
      <h4>Go back to the <Link to="/">Home</Link> page or <Link to="/login">Log In</Link> to see other features </h4>
    </div>
  )
}

export default ErrorView;