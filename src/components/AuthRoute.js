import { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginView from "../views/LoginView";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Route {...rest} render={(props) => loggedIn ? (
          <Component  {...props}/>
        ) : (
          <Route pathname="/" component={LoginView} />
    )}/>
  );
};

export default AuthRoute;