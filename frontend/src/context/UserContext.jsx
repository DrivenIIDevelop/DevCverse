import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

export const UserContext = createContext({
  user: null,
  login: () => {},
  userSignUp: () => {},
  userLogout: () => {},
  getUser: () => {},
  error: null,
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // console.log("user in UserContextProvider: ", user);
  const [error, setError] = useState(null);

  const login = async ( username, password ) => {
    const response = await fetch("http://localhost:8000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${encodeURIComponent(
        username
      )}&password=${encodeURIComponent(password)}`,
    });

    const { access_token } = await response.json();
    localStorage.setItem('access_token', access_token);
    await getUser();
  };
  
  const getUser = async () => {
    const access_token = localStorage.getItem('access_token');
    const userResponse = await fetch("http://localhost:8000/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    });

    if (!userResponse.ok) {
      throw new Error(`Failed to get user! status: ${userResponse.status}`);
    }
    const userData = await userResponse.json();
    // console.log("userData in login component: ", userData);
    setUser(userData);
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  };


  const userSignUp = async (userData) => {
    try {
      const response = await fetch("http://localhost:8000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if(response.ok) {
        console.log("User signed up successfully!");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.message);
    }

    login(userData.username, userData.password); 
  };

  const userLogout = () => {
    localStorage.removeItem('access_token');
    setUser(null);
  };
  // console.log("user in UserContextProvider: ", user);
  // console.log("Providing context", { user, error, login, userSignUp, updateUser });
  useEffect(() => { 
    getUser();
  }, []);


  return (
    <UserContext.Provider value={{ user, error, login, userSignUp, getUser, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
