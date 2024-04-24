import { useState } from "react";
import  {useUserContext}  from "../context/UserContext";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const  { userSignUp }  = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username || !password) {
      setError("Please enter both username and password");
      return; // Prevent sending request if data is missing
    }

    await userSignUp(username, password);

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
      <button type="submit">Signup</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;
