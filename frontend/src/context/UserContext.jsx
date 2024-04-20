import { createContext, useState, useContext } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

export const UserContext = createContext({
  user: null,
  login: () => {},
  userSignUp: () => {},
  setUser: () => {},
  error: null
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  // console.log("user in UserContextProvider: ", user);
  const [error, setError] = useState(null);
  
  const login = async (username, password) => {
    const response = await fetch("http://localhost:8000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${encodeURIComponent(
        username
      )}&password=${encodeURIComponent(password)}`,
    })
  
    // console.log('Raw response in login function context: ', response);
    
      const { access_token } = await response.json();
      // console.log("access_token: ", access_token);
      const userResponse = await fetch('http://localhost:8000/user', { 
        method: 'GET',                                                      
        headers: {                                                         
            'Authorization': `Bearer ${access_token}`,                     
            'Content-Type': 'application/json'                             
        }   
    });
  
    if (!userResponse.ok) {
        throw new Error(`Failed to get user! status: ${userResponse.status}`);
    }   
    const userData = await userResponse.json(); 
    console.log("userData in login component: ", userData);
    setUser(userData);
  };

  const userSignUp = async (username, password) => {
    try {
      await axios.post('/auth/', {
        username,
        password,
      });
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.message);
    }

    login(username, password); // Auto-login after signup
  };
  console.log('user in UserContextProvider: ', user);
  // console.log("Providing context", { user, error, login, userSignUp, updateUser });


  return (
    <UserContext.Provider value={{ user, error, login, userSignUp }}>
      {children}
    </UserContext.Provider>
    
  );
};

export const useUserContext = () => useContext(UserContext);
