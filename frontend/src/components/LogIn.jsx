import { useState } from "react";

import { useUserContext } from "../context/UserContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useUserContext();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username || !password) {
      setError("Please enter both username and password");
      return; // Prevent sending request if data is missing
    }

    await login(username, password);

    setUserName("");
    setPassword("");
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={username}
        placeholder="User email"
        onChange={(e) => setUserName(e.target.value)}
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
