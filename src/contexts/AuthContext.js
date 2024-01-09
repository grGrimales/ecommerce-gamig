"use client";
import { createContext, useState, useEffect } from "react";
import { Token,  User } from "@/api";

const tokenCtrl = new Token();

const userCtrl = new User();
export const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const { children } = props;


  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();
      if (!token) {
        logout();
        setLoading(false);
        return;
      } 
  
      if(tokenCtrl.hasExpired(token)){
        logout();
       
      }else{
        await login(token);
      }
    })();
  }, []);
  

  const login = async (token) => {
    try {
      tokenCtrl.setToken(token);
      const response = await userCtrl.getMe();
       setUser(response);
       setToken(token);
       setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const logout = () => {
    tokenCtrl.removeToken();
    localStorage.removeItem('PaymentProcess');
    setUser(null);
    setToken(null);
  }

  const updatedUser = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  }
  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updatedUser,
  };
  if (loading) {
    return null;
  }
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
