import { createContext, useState, useContext } from 'react';
import axios from 'axios';

export const UserContext = createContext({
  user: null,
  login: () => {},
  signup: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      // Replace with your actual backend call (FastAPI) for login
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      });

      const userData = response.data; // Replace with actual data structure from backend

      setUser(userData);
    } catch (error) {
      console.error('Login error:', error);
      // Handle login errors (display error message, etc.)
    }
  };

  const signup = async (username, password) => {
    try {
      // Replace with your actual backend call (FastAPI) for signup
      const response = await axios.post('/api/auth/signup', {
        username,
        password,
      });

      const userData = response.data; // Replace with actual data structure from backend

      setUser(userData);
    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup errors (display error message, etc.)
    }
  };

  
  return (
    <UserContext.Provider value={{ user, login, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
