import logo from "../assets/logo/logo.svg";
import brand_r from "../assets/logo/brand-r.svg";
import brand_e from "../assets/logo/brand-e.svg";
import brand_n from "../assets/logo/brand-n.svg";
import brand_a from "../assets/logo/brand-a.svg";
import brand_i from "../assets/logo/brand-i.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="flex flex-col my-14">
      <div className="flex justify-between border border-x-0 border-y-[#BF4C9A] py-8">
        <div className="flex gap-3 px-14">
          <img src={logo} alt="logo" className="" />
          <div className="flex">
            <img src={brand_r} alt="brand" className="" />
            <img src={brand_e} alt="brand" className="" />
            <img src={brand_n} alt="brand" className="" />
            <img src={brand_a} alt="brand" className="" />
            <img src={brand_i} alt="brand" className="" />
          </div>
        </div>

        <div className="w-[60%] grid grid-cols-4 gap-3">
          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-base font-normal text-[#333]">About</h1>
            <ul className="text-sm font-sans font-normal list-none flex flex-col gap-2 text-[#333]">
              <li>Our Story</li>
              <li>Join Our Team</li>
              <li>Contact Us</li>
              <li>Help</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-base font-normal text-[#333]">Customers</h1>
            <ul className="text-sm font-sans font-normal list-none flex flex-col gap-2 text-[#333]">
              <li>Orders & Shipping</li>
              <li>Customer Care</li>
              <li>Return Policy</li>
              <li>Refer a Friend</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-base font-normal text-[#333]">Explore</h1>
            <ul className="text-sm font-sans font-normal list-none flex flex-col gap-2 text-[#333]">
              <li>Promotions</li>
              <li>Ranai Rewards</li>
              <li>Accessibility</li>
              <li>Staff Picks</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-base font-normal text-[#333]">Follow Us</h1>
            <ul className="text-sm font-sans font-normal list-none flex flex-col gap-2 text-[#333]">
              <li className="flex gap-1 items-center"><FaFacebook /> Facebook</li>
              <li className="flex gap-1 items-center"><FaInstagramSquare /> Instagram</li>
              <li className="flex gap-1 items-center"><FaThreads /> Threads</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 px-14">
        <div className="flex justify-between items-center font-sans text-sm text-[#333]">
          <p>©ranai 2024. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Cookies Settings</p>
          </div>
        </div>
        <div className="py-4">
          <p className="pl-2 flex gap-2 items-center text-xs text-[#333]"><CiGlobe className="text-base"/> English (United States)</p>
        </div>
      </div>
    </footer>
  );
}
