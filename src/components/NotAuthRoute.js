import { useContext } from "react";
import { Route } from "react-router";
import { AuthContext } from "../context/AuthContext"
import HomeView from "../views/HomeView";

const NotAuthRoute = ({component: Component, ...rest}) => {
  const { loggedIn } = useContext(AuthContext);


  return (
    <Route {...rest} render={(props) => !loggedIn ? (
      <Component {...props} />
    ) : (
      <Route pathname="/home" component={HomeView} />
    )} />
  )
}

export default NotAuthRoute
