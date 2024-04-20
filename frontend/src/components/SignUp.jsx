import { useState } from "react";
import  {useUserContext}  from "../context/UserContext";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8000';

const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const  { userSignUp }  = useUserContext();
  // console.log("userSignup from context", userSignUp);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // console.log("in signup component", username, password);
    await userSignUp(username, password);

    // try {
    //   const res = await userSignUp(username, password);
    //   console.log("Signup successful:", res);
    // } catch (error) {
    //   console.error("Signup failed:", error);
    //   setError(error.message || "An unexpected error occurred.");
    // }

    setUserName("");
    setPassword("");
  };

  // useEffect(() => {
  //   userSignUp(username, password);
  // }, [])



  return (
    <form onSubmit={handleSubmit}>
      {/* Username and password input fields */}
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

export default Signup;
