import { useUserContext } from "../../context/UserContext";
import { useState } from "react";

import logo from "../../assets/logo/logo.svg";
import brand_r from "../../assets/logo/brand-r.svg";
import brand_e from "../../assets/logo/brand-e.svg";
import brand_n from "../../assets/logo/brand-n.svg";
import brand_a from "../../assets/logo/brand-a.svg";
import brand_i from "../../assets/logo/brand-i.svg";
import searchIcon from "../../assets/search.svg";
import cartIcon from "../../assets/cart.svg";
import InferiorNav from "./InferiorNav";


export default function NavBar() {
  const [showPopUp, setShowPopUp] = useState(false);

  const { user } = useUserContext();

  function handlePopUp() {
    setShowPopUp(!showPopUp);
  }

  function handleClick() {
    window.alert("Feature coming soon!🚀");
  }
  return (
    <nav className="max-w-[1440px] mx-auto mt-6 px-16">
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

        <div className="flex gap-3">
          <img src={logo} alt="logo" className="" />
          <div className="flex">
            <img src={brand_r} alt="brand" className="" />
            <img src={brand_e} alt="brand" className="" />
            <img src={brand_n} alt="brand" className="" />
            <img src={brand_a} alt="brand" className="" />
            <img src={brand_i} alt="brand" className="" />
          </div>
        </div>

        <div className="flex">
          <img src={searchIcon} alt="search" className="px-2 py-2" />
          <img src={cartIcon} alt="cart" className="px-2 py-2" />
          {user ? (
            <img src={user.avatar} alt="user" className="px-2 py-2" />
          ) : (
            <button
              className="px-4 py-2 text-white rounded-[8px] items-center bg-[#BF4C9A]"
              onClick={handlePopUp}
            >
              Sign In
            </button>
          )}
        </div>
        {showPopUp && 
        <div className="font-sans text-base px-6 py-6 rounded-lg absolute top-[60px] right-0 z-20 bg-[#F2DBEB]  text-[#732E5C] shadow-even flex flex-col gap-3" onMouseLeave={() => handlePopUp()}>
          <p className="hover:underline hover:font-medium transition duration-300 ease-in-out">Sing In</p>
          <p className="hover:underline hover:font-medium transition duration-300 ease-in-out">Create Account</p>
        </div>}
      </div>
      <InferiorNav />
    </nav>
  );
}
