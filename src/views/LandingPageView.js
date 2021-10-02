import { Link } from "react-router-dom"

const LandingPageView = () => {
  return (
    <div className="container mt-5">
      <h2>Landing Page</h2>      
      <Link className="btn btn-primary" to="/login">Log In</Link>
    </div>
  )
}

export default LandingPageView
