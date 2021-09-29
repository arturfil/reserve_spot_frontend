import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const SideNavBar = () => {
  const { loggedIn, logOutUser } = useContext(AuthContext);

  return (
    <div className="sidenav">
      <ul >
        <li>
          <Link to="/">
            <i className="bi bi-house-door-fill"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/createMeeting">
            <i className="bi bi-plus-circle-fill"></i>
            Create Meeting
          </Link>
        </li>
        <li>
          <Link to="/manageTopics">
            <i className="bi bi-gear-fill"></i>
            Manage Topics
          </Link>
        </li>
        { loggedIn ? (
          <li style={{cursor: 'pointer'}} onClick={logOutUser}>
              <i className="bi bi-box-arrow-right"></i>
              Log Out
          </li>
        ) : (
          <li>
            <Link to="/login">
              <i className="bi bi-person-fill"></i>
              Log In
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideNavBar;
