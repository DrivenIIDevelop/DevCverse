import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

export const UserContext = createContext({
  user: null,
  login: () => {},
  signup: () => {},
  fetchCurrentUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchCurrentUser = async () => {
    try {
      // Replace with your actual backend call (FastAPI) to fetch current user
      const response = await axios.get('/api/auth/user'); // Assuming an endpoint for fetching current user
      const userData = response.data;
  
      if (userData) {
        setUser(userData);
      } else {
        setUser(null); // Set user to null if not found
      }
    } catch (error) {
      console.error('Error fetching current user:', error);
      setError(error.message);
      // Handle errors appropriately (e.g., display error message)
    }
  };

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
      setError(error.message);
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
      setError(error.message);
      // Handle signup errors (display error message, etc.)
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []); 


  return (
    <UserContext.Provider value={{ user, error, fetchCurrentUser, login, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
