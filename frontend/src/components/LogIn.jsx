import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

import separator from "../assets/signup/separator.svg";
import apple from "../assets/signup/apple.svg";
import google from "../assets/signup/google.svg";
import fb from "../assets/signup/fb.svg";

import { RxCross2 } from "react-icons/rx";

const Login = ({ handleLogin }) => {
  // console.log("function in the login component: ", handleLogin);
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
    <div className="absolute pr-16 w-full h-[852px] bg-transparent bg-[#FFF] flex justify-end z-30">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[30%] py-8 px-6 bg-gradient-to-br from-white via-[#EFEFEF] to-gray-200 z-50"
      >
        <div className="flex items-center">
          <RxCross2
            className="w-5 h-5 cursor-pointer"
            onClick={() => handleLogin()}
          />
          <h1 className="w-[90%] font-serif font-normal text-[40px] text-[#262626] mb-4 text-center">
            Sign In
          </h1>
        </div>
        <p className="font-sans text-base text-center mb-8 px-4">Join our Skincare community for exclusive features.</p>

        <div className="flex flex-col gap-0.5 font-sans text-base mb-4 w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={username}
            placeholder="User email"
            onChange={(e) => setUserName(e.target.value)}
            required
            className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
          />
        </div>

        <div className="flex flex-col gap-0.5 font-sans text-base mb-4">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            value={password}
            placeholder="User password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
          />
        </div>

        <div className="flex justify-between items-center mt-[24px]">
          <div className="flex gap-2 items-center">
            <input type="checkbox" id="keep sign in" name="keep sign in" className="w-[20px] h-[20px]"/>
          <label htmlFor="keep sign in" className="font-sans text-sm text-[#666] ">Keep me Signed In</label>
          </div>
          
          <p className="font-sans text-sm text-[#666]">Can&apos;t access account?</p>
        </div>

        <button
          type="submit"
          className="mt-[40px] mb-8 w-full bg-[#BF4C9A] px-8 py-3 rounded-lg text-[#FFF]"
        >
          SIGN IN
        </button>

        <img src={separator} alt="separator" className="w-full mb-8" />

        <div className="flex justify-around mb-8">
          <img
            src={apple}
            alt="apple logo"
            className="w-[80px] h-[65px] rounded-lg bg-[#FFF] p-2"
          />
          <img
            src={google}
            alt="google logo"
            className="w-[80px] h-[65px] rounded-lg bg-[#FFF] p-2"
          />
          <img
            src={fb}
            alt="facebook logo"
            className="w-[80px] h-[65px] rounded-lg bg-[#FFF] p-2"
          />
        </div>

        <p className="font-serif text-base text-[#000] text-center">
          Need an account?{" "}
          <Link
            to="/signup"
            className="underline"
            onClick={() => handleLogin()}
          >
            Sign Up
          </Link>
        </p>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
