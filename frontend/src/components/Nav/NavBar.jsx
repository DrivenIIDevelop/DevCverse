import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from "react";

import logo from "../../assets/logo/logo.svg";
import brand_r from "../../assets/logo/brand-r.svg";
import brand_e from "../../assets/logo/brand-e.svg";
import brand_n from "../../assets/logo/brand-n.svg";
import brand_a from "../../assets/logo/brand-a.svg";
import brand_i from "../../assets/logo/brand-i.svg";
import searchIcon from "../../assets/search.svg";
import cartIcon from "../../assets/cart.svg";
import InferiorNav from "./InferiorNav";
import Login from "../LogIn";

import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showUser, setShowUser] = useState(false);
  // const [showSignUp, setShowSignUp] = useState(false);

  const { user } = useUserContext();
  // console.log("user in NavBar component: ", user);
  const { getUser } = useUserContext();

  function handlePopUp() {
    setShowPopUp(!showPopUp);
  }

  function handleClick() {
    window.alert("Feature coming soon!🚀");
  }

  function handleLogin() {
    setShowLogin(!showLogin);
  }

  function handleSignUp() {
    setShowLogin(false);
  }

  function handleShowUser() {
    setShowUser(!showUser);
  }

  useEffect(() => {
    getUser();
  }, []);

  // if (!user) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <nav className="max-w-[1440px] mx-auto mt-6 px-16 relative">
      <div className="flex justify-between w-full relative">
        <select
          name="language"
          id=""
          className="px-3 py-2 font-epilogue font-sm font-normal text-[#666] items-center rounded-[8px] border border-[#666]"
          onClick={handleClick}
        >
          <option value="english">English</option>
          <option value="Spanish">Spanish</option>
          <option value="chinese">Chinese</option>
        </select>

        <Link to="/">
          <div className="flex gap-3">
            <img src={logo} alt="logo" className="" />
            <div className="flex items-center">
              <img src={brand_r} alt="brand" className="" />
              <img src={brand_e} alt="brand" className="" />
              <img src={brand_n} alt="brand" className="" />
              <img src={brand_a} alt="brand" className="" />
              <img src={brand_i} alt="brand" className="" />
            </div>
          </div>
        </Link>
        <div className="flex items-center">
          <img src={searchIcon} alt="search" className="px-2 py-2" />
          <img src={cartIcon} alt="cart" className="px-2 py-2" />
          {user ? (
            // <img src={user.avatar} alt="user" className="px-2 py-2" />
            <FaRegUser className="text-2xl mx-1.5" onClick={handleShowUser} />
          ) : (
            <button
              className="px-4 py-2 text-white rounded-[8px] items-center bg-[#BF4C9A]"
              onClick={handlePopUp}
            >
              Sign In
            </button>
          )}
        </div>
        {user && user.User.role === "admin" && showUser && (
          <div className="font-sans text-base px-6 py-6 rounded-lg absolute top-[60px] right-0 z-20 bg-[#F2DBEB]  text-[#732E5C] shadow-even flex flex-col gap-3" onMouseLeave={() => handleShowUser()}>
            <Link to='/admin' className="hover:underline hover:font-medium transition duration-300 ease-in-out">
              Manage Products
            </Link>
            <Link to='/cart' className="hover:underline hover:font-medium transition duration-300 ease-in-out">Cart</Link>
           
          </div>
        )}

        {user && user.User.role === "user" && showUser && (
          <div className="font-sans text-base px-6 py-6 rounded-lg absolute top-[60px] right-0 z-20 bg-[#F2DBEB]  text-[#732E5C] shadow-even flex flex-col gap-3" onMouseLeave={() => handleShowUser()}>
            <Link to='/cart' className="hover:underline hover:font-medium transition duration-300 ease-in-out">Cart</Link>
          </div>
        )}

        {showPopUp && (
          <div
            className="font-sans text-base px-6 py-6 rounded-lg absolute top-[60px] right-0 z-40 bg-[#F2DBEB]  text-[#732E5C] shadow-even flex flex-col gap-3"
            onMouseLeave={() => handlePopUp()}
          >
            <p
              className="hover:underline hover:font-medium transition duration-300 ease-in-out"
              onClick={handleLogin}
            >
              Sign In
            </p>
            <Link to="/signup">
              <p
                className="hover:underline hover:font-medium transition duration-300 ease-in-out"
                onClick={handleSignUp}
              >
                Create Account
              </p>
            </Link>
          </div>
        )}
      </div>
      <InferiorNav  user={user} />
      {!user && showLogin ? <Login handleLogin={handleLogin}/> : null}
    </nav>
  );
}
