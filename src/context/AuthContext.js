import { createContext, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { toast } from "react-toastify";
import apiHelper from "../apiHelper/apiHelper";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [ loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({})

  useEffect(() => {
    checkLogged();
    getAllUsers();
  }, [])
  
  // if you don't separate this you won't see the isAdmin being triggered because 
  // initially on render loggedIn is false and then set to true.
  useEffect(() =>{ 
    revalidateToken();
    isAdmin();
  }, [loggedIn])
  
  const getAllUsers = async (user) => {
    const response = await apiHelper.get('/auth');
    setUsers(response.data);
  }

  const loginUser = async (user) => {
    // const response = await axios.post(`${apiUrl}/auth/login`, user);
    try {
      const response = await apiHelper.post('/auth/login', user);
      const { data } = response;
      setUser(data.user);
      localStorage.setItem('jwtreservespot', JSON.stringify({user_role: data.user.role, token: data.token}));
      setLoggedIn(true);
      toast.success("Succesfully Logged In");
    } catch (error) {
      toast.error(`${error}`)
    }
  }

  const signUpUser = async (obj) => {
    try {
      const response = await apiHelper.post('/auth/signup', obj);
      const { data} = response;
      setUser(data.user);
      localStorage.setItem('jwtreservespot', JSON.stringify({user_role: data.user.role, token: data.token}));
      setLoggedIn(true);
      toast.success("Singed Up Succesfully")
    } catch (error) {
      console.log(error);
    }
  }

  const googleLogin = async (obj) => {
    try {
      const response = await apiHelper.post('/auth/googleLogin', obj);
      const {user, token} = response.data;
      localStorage.setItem('jwtreservespot', JSON.stringify({user_role: user.role, token: token}));
      setLoggedIn(true);
      toast.success('Successfuly Logged In with Google');
      setUser(user);
    } catch (error) {
      
    }
  }

  const checkLogged = () => {
    const tokenValue = localStorage.getItem('jwtreservespot');
    return tokenValue ? setLoggedIn(true) : setLoggedIn(false); 
  }

  const isAdmin = () => {
    // if the token doesn't exist
    if (!loggedIn) return;
    const token = JSON.parse(localStorage.getItem('jwtreservespot'));
    const { user_role } = token;
    return user_role === 'ADMIN' ? setAdmin(true) : setAdmin(false);
  }

  const revalidateToken = async () => {
    if (!loggedIn) return;
    try {
      const response = await apiHelper.post('/auth/renew');
      const {data} = response;
      setUser(data.user);
      localStorage.setItem('jwtreservespot', JSON.stringify({user_role: data.user.role, token: data.token}))
    } catch (error) {
      console.log(error);
    }
  }

  const logOutUser = () => {
    localStorage.removeItem('jwtreservespot');
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        admin,
        users,
        loggedIn,
        signUpUser,
        setUser,
        loginUser,
        googleLogin,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider