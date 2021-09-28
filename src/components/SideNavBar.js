import { Link } from "react-router-dom";

const SideNavBar = () => {
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
      </ul>
    </div>
  );
};

export default SideNavBar;
