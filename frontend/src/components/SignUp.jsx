import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

import separator from "../assets/signup/separator.svg";
import apple from "../assets/signup/apple.svg";
import google from "../assets/signup/google.svg";
import fb from "../assets/signup/fb.svg";

const signUpImg =
  "https://s3-alpha-sig.figma.com/img/3426/fa26/d07d8a495f567d6228282875227d55df?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EOxD8RlP~IHJs6oUCBq6IoHNuwLORW5grcBJXSV7bv7AlLmWvdOWyLb8fuI-m0PwHu~IDOe1VnQPKAmSpu35U2WYg3k1j6lPXCcLMd~WuaQ06juA4Dc76JLA7YvhNeeJCRvwdrPSDLYwTEZdTv5UvYlbot~n-enaGx3WMkwUFpz89MqB9nC4GYkoUeEgs6L0RRntAxbop7ruovX~eeopie890nIMcYSTFr8dYy9XJzir53quDfbADnIinnCQtDZEGHpRNuwD9qY1DmzWjZ9wgDuF3HgBum4MNFlUtSO1Eo~v5QwwC20fzqZ-06nvSLCqknBGpeK~KEPHVaU3PfJ80A__";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [skin_type, setSkinType] = useState("");
  const [error, setError] = useState(null);
  const { userSignUp } = useUserContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    const userData = {
      username,
      password,
      first_name,
      last_name,
      age,
      skin_type,
    };

    await userSignUp(userData);

    navigate("/about");
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto grid grid-cols-[3fr,2fr] px-16 ">
        <img src={signUpImg} alt="signUpImg" className="object-cover" />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col py-8 items-center px-6 bg-gradient-to-br from-white via-[#EFEFEF] to-gray-200"
        >
          <h1 className="font-serif font-normal text-[40px] text-[#262626] mb-4">
            Create Account
          </h1>
          <p className="font-sans text-sm text-[#000] mb-16">
            Join our Skincare community for exclusive features.
          </p>

          <div className="flex flex-col gap-4 font-sans text-sm text-[#333]">
            <div className="flex gap-6">
              <div className="flex flex-col gap-0.5">
                <label htmlFor="first name">First Name</label>
                <input
                  type="text"
                  value={first_name}
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="last name">Last Name</label>
                <input
                  type="text"
                  value={last_name}
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-0.5">
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

            <div className="flex flex-col gap-0.5">
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

            <div className="flex flex-col gap-0.5">
              <label htmlFor="age">Age Group</label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                className="px-3 py-2 rounded-lg text-[#9CA3AF] "
              >
                <option value="">Select Age Range</option>
                <option value="Below 18">Below 18</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-50">36-50</option>
                <option value="Above 50">Above 50</option>
              </select>
            </div>
            <div className="flex flex-col gap-0.5">
              <label htmlFor="skin type">Skin Type</label>
              <select
                value={skin_type}
                onChange={(e) => setSkinType(e.target.value)}
                required
                className="px-3 py-2 rounded-lg text-[#9CA3AF] "
              >
                <option value="">Select Skin Type</option>
                <option value="oily">Oily</option>
                <option value="dry">Dry</option>
                <option value="normal">Normal</option>
                <option value="combination">Combination</option>
                <option value="sensitive">Sensitive</option>
                <option value="uncertain">Uncertain</option>
                <option value="mature">Mature</option>
                <option value="acne">Acne</option>
              </select>
            </div>
            <div className="flex flex-col gap-0.5 mb-6">
              <label htmlFor="referred by">Referred by</label>
              <input
                type="text"
                id="referred by"
                placeholder="Enter if someone referred you"
                className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
              />
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="w-[24px] h-[24px]"
              />
              <label htmlFor="terms" className="font-sans text-sm text-[#333]">
                I have read terms and conditions agree to user agreement
              </label>
            </div>

            <button
              type="submit"
              className="mt-[40px] mb-8 w-full bg-[#BF4C9A] px-8 py-3 rounded-lg text-[#FFF]"
            >
              CREATE ACCOUNT
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
              Already a user? <Link to="/">SIGN-IN</Link>
            </p>
          </div>

          {error && <p>{error}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
