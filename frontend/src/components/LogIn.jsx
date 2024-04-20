import { useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

import { useUserContext } from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useUserContext();
  // console.log("login from context: ", login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username || !password) {
      setError("Please enter both username and password");
      return; // Prevent sending request if data is missing
    }

    await login(username, password);
   
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">
        Login
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
