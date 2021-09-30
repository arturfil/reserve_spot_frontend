import { createContext, useEffect, useState } from "react";
import apiHelper from "../apiHelper/apiHelper";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [ loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    google: false,
    facebook: false,
  })

  useEffect(() => {
    checkLogged();
  }, [])
  
  const loginUser = async (user) => {
    // const response = await axios.post(`${apiUrl}/auth/login`, user);
    const response = await apiHelper.post('/auth/login', user);
    const { data } = response;
    console.log(data);
    setUser(data.user);
    localStorage.setItem('jwtreservespot', JSON.stringify({data}));
    setLoggedIn(true);
  }

  const checkLogged = () => {
    const tokenValue = localStorage.getItem('jwtreservespot');
    return tokenValue ? setLoggedIn(true) : setLoggedIn(false); 
  }

  const logOutUser = () => {
    localStorage.removeItem('jwtreservespot');
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        loginUser,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider