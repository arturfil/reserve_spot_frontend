import { useContext } from "react";
import { Route } from "react-router";
import { AuthContext } from "../context/AuthContext";
import HomeView from "../views/HomeView";

const AdminRoute = ({component: Component, ...rest}) => {
  const { admin } = useContext(AuthContext);

  return (
    <Route {...rest} render={(props) => admin ? (
      <Component {...props} />
    ) : (
      <Route to="/" component={HomeView} />
    )}/>
  )
}

export default AdminRoute;