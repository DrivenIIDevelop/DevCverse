import { useState } from 'react';
import { useUserContext } from '../context/UserContext'; 
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8000';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useUserContext();

//   console.log("username type: ", typeof(username), username);
//   console.log("password type: ", typeof(password), password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    console.log("username type: ", typeof(username), username);
    console.log("password type: ", typeof(password), password);
    if (!username || !password) {
        setError('Please enter both username and password');
        return;  // Prevent sending request if data is missing
    }

    try {
      // Use the login function from UserContext
    //   await login(username, password);
    const response = await axios.post('/auth/token/', {
        username,
        password,
      });

      login(response.data); // Update user context

    } catch (error) {
      setError(error.message || 'Login failed'); // Handle errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Username and password input fields */}
      <input
        type="email"
        value={username}
        placeholder="User email"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        placeholder="User password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" onClick={handleSubmit}>Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
