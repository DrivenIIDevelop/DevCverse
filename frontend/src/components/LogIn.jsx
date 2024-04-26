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
      return; 
    }

    await login(username, password);

    setUserName("");
    setPassword("");

  };

  return (
    <div className="absolute w-full h-[852px] bg-[rgba(255,255,255,0.3)] bg-[#FFF] flex justify-end z-30">
      <form onSubmit={handleSubmit} className="flex flex-col w-[30%] py-8 px-6 bg-gradient-to-br from-white via-[#EFEFEF] to-gray-200 z-50" >
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
        <button type="submit">SIGN IN</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
