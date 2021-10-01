import { Link } from "react-router-dom"

const ErrorAdminView = () => {
  return (
    <div className="container mt-5">
      <h2>You Either Don't have Admin Rights To Perform This Process Or Aren't Logged In</h2>
      <h4>If You Haven't Logged in Please go <Link to="/login">Login</Link> to perform this process, if authorized</h4>
    </div>
  )
}

export default ErrorAdminView
