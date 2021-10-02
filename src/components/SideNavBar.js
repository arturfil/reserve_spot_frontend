import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const SideNavBar = () => {
  const history = useHistory();
  const { loggedIn, logOutUser, user } = useContext(AuthContext);

  const logOut = () => {
    logOutUser();
    history.push('/home')
  }

  return (
    <div className="sidenav">
      <ul>
        { loggedIn && (
          <li>
            <i className="bi bi-person-circle"></i> Welcome {user.name}
          </li>
        )}
        <li>
          <Link to="/home">
            <i className="bi bi-house-door-fill"></i>
            Home
          </Link>
        </li>
        {loggedIn ? (
          <>
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
            <li style={{ cursor: "pointer" }} onClick={logOut}>
              <i className="bi bi-box-arrow-right"></i>
              Log Out
            </li>
          </>
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
