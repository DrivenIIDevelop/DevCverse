import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Footer from "../components/Footer";
import progessBar from "../assets/cart/Progress.svg";
import line from "../assets/cart/Line.svg";

export default function Cart() {
  const [productQuantity, setProductQuantity] = useState(1);

  function increaseQuantity() {
    setProductQuantity(productQuantity + 1);
  }

  function decreaseQuantity() {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  }
  return (
    <div>
      <div className="flex flex-row px-20 ">
        <div className="w-[672px] px-15">
          <br />
          <div className="Status pt-10">
            <div className="flex flex-column text-center font-serif text-base">
              <div className="flex flex-col items-center">
                <img src={progessBar} alt="" className="w-[24px] h-[24px]" />
                <span>Shipping</span>
              </div>
              <div>
                <img
                  src={line}
                  alt=""
                  className="shrink-0 items-stretch px-[8px] py-[12px]"
                />
              </div>
              <div className="flex flex-col items-center">
                <img src={progessBar} alt="" className="w-[24px] h-[24px]" />
                <span>Payment</span>
              </div>
              <div>
                <img
                  src={line}
                  alt=""
                  className="shrink-0 items-stretch px-[8px] py-[12px]"
                />
              </div>
              <div className=" flex flex-col items-center">
                <img src={progessBar} alt="" className="w-[24px] h-[24px]" />
                <span>Review</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border-solid border-2 m-[56px] p-[32px] relative shrink-0">
            <span className="flex justify-center absolute -top-[15px] left-[225px] bg-white font-serif text-xl">
              Fast Checkout
            </span>
            <div className="Payment flex flex-column px-[32px] gap-8 justify-center ">
              <button className="w-[188px] h-[48px] border-2 border-black rounded-lg">
                Apple Pay
              </button>
              <button className="w-[188px] h-[48px] border-2 border-black rounded-lg">
                Google Pay
              </button>
              <button className="w-[188px] h-[48px] border-2 border-black rounded-lg">
                PayPal
              </button>
            </div>
          </div>
          <div className="text-center bg-black h-[1px] w-[672px] relative ">
            <span className="bg-white -top-[20px] absolute text-xl p-[10px]">
              OR
            </span>
          </div>
          <div className="">
            <form className="flex flex-col">
              <span className="text-2xl mt-[48px] mb-[24px] font-serif">
                Contact Information
              </span>

              <span className=" flex justify-end">
                Already have an account?{" "}
                <a href="#" className="underline">
                  Login
                </a>
              </span>

              <label className="py-3">Full Name</label>
              <input
                type="text"
                className="px-3"
                id=""
                placeholder="Enter your full name"
              />

              <label className="py-3">Email</label>
              <input
                type="text"
                className="px-3"
                id=""
                placeholder="Enter your email"
              />

              <div className="flex flex-col">
                <br />
                <span className="text-2xl font-serif">
                  Shipping Information
                </span>
                <div className="font-sans">
                  <label className="flex flex-col pt-8">Address</label>
                  <input
                    type="text"
                    className=""
                    id=""
                    placeholder="Enter your street address and apt/suite"
                  />
                </div>
                <div className="font-sans flex flex-row mt-10 justify-between">
                  <div className="flex flex-col">
                    <label className="py-1">City</label>
                    <input
                      type="text"
                      className="w-[202px] h-[40px] px-[8px] py-[12px] gap-[4px] items-center"
                      id=""
                      placeholder="Enter your city"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-1">State/Province</label>
                    <input
                      type="text"
                      className="h-[40px] px-[8px] py-[12px] gap-[4px] items-center"
                      id=""
                      placeholder="Enter your state/province"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-1">Zip Code</label>
                    <input
                      type="text"
                      className="w-[202px] h-[40px] px-[8px] py-[12px] gap-[4px] items-center"
                      id=""
                      placeholder="Enter your zip code"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="mt-[48px] mb-[24px]">
              <span className="text-2xl font-serif">Shipping Method</span>
            </div>
            <form className="flex flex-col font-sans">
              <div className="">
                <label className="text-base ">Standard </label>
                <span className="text-sm text-gray-500 ml-[7px]">
                  Arrives in 3-5 business days.
                </span>
                <span className="text-sm">$7.00</span>
              </div>
              <div className="">
                <label className="text-base">2-Day Express </label>
                <span className="text-sm text-gray-500 ml-[7px]">
                  Arrives in 2 business days.
                </span>
                <span className="text-sm">$15.00</span>
              </div>
              <div className="">
                <label className="text-base">Overnight </label>
                <span className="text-sm text-gray-500 ml-[7px]">
                  Arrives the next business day.
                </span>
                <span className="text-sm">$25.00</span>
              </div>
            </form>
          </div>
          <button className="rounded-md h-[48px] px-9 text-sm font-sans bg-[#BF4C9A] text-white ml-[70%] my-[60px]">
            Continue To Payment
          </button>
        </div>
        <div className="Order w-3/6 ">
          <img src="" alt="" />
        </div>
        <div className="pt-10">
          <div>
            <input type="text" name="" id="" placeholder="Enter promo code" />
            <span className="flex gap-5 border border-black rounded-lg py-2 justify-center items-center text-center w-[20%]">
              <FaMinus onClick={decreaseQuantity} />{" "}
              <div className="flex justify-end w-[10px]">{productQuantity}</div>
              <FaPlus onClick={increaseQuantity} />
            </span>
            <button>Apply</button>
          </div>
          <ul>
            <li>Subtotal</li>
            <li></li>
            <li>Estimated Shipping</li>
            <li></li>
            <li>Estimated Tax</li>
            <li></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
