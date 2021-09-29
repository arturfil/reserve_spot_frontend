import { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginView from "../views/LoginView";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Route {...rest} render={() => loggedIn ? (
          <Component  />
        ) : (
          <Route pathname="/login" component={LoginView} />
    )}/>
  );
};

export default AuthRoute;
