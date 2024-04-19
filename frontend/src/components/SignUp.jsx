import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8000';

const Signup = () => {
  const [username, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { signup } = useUserContext();
  console.log("signup", signup);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("/auth/", {
        username,
        password,
      });

      signup(response.data); // Update user context
    } catch (error) {
      setError(error.message);
    }

    setUserEmail("");
    setPassword("");
  };

  // ... JSX for signup form and error display

  return (
    <form onSubmit={handleSubmit}>
      {/* Username and password input fields */}
      <input
        type="email"
        value={username}
        placeholder="User email"
        onChange={(e) => setUserEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        placeholder="User password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Signup</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
