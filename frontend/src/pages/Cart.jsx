import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Footer from "../components/Footer";
import progessBar from "../assets/cart/Progress.svg";
import line from "../assets/cart/Line.svg";
import line1 from "../assets/cart/Line1.png";
import product from "../assets/cart/Product.png";
import { useCartContext } from "../context/CartContext";
import { useUserContext } from "../context/UserContext";
import radio from "../assets/cart/Radio.svg";
import { Link } from "react-router-dom";

export default function Cart() {
  const { user } = useUserContext();
  console.log("user in Cart component: ", user);

  const { allItems } = useCartContext();
  console.log("allItems in Cart component: ", allItems);

  const { getAllCartItems } = useCartContext();

  const [productQuantity, setProductQuantity] = useState(1);

  function increaseQuantity() {
    setProductQuantity(productQuantity + 1);
  }

  function decreaseQuantity() {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  }

  useEffect(() => {
    console.log("user in useEffect: ", user)
    console.log("in the cart component useEffect : ");
    if (user && user.User.id) {
      getAllCartItems(user.User.id);
    }
    console.log("after useEffect in cart component : ");
  },[user]);

  if (!user || !allItems)
    return <div className="text-3xl text-center my-8">Loading...</div>;

  return (
    <div className="">
      <div className="flex flex-row w-[1312px] h-[1313px] py-[60px] ml-[12%]">
        <div className="w-[672px] h-[1193px]">
          <br />
          <div className="Status pt-10">
            <div className="flex flex-column text-center font-serif text-base ml-[4%]">
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
                <Link to="/" className="underline">
                  Login
                </Link>
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
            <div className="w-[672px] h-[222px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-neutral-800 text-2xl font-normal font-serif leading-loose">
                Shipping Method
              </div>
              <div className="w-[672px] h-[166px] relative">
                <div className="w-[672px] h-6 left-0 top-0 absolute justify-between items-center inline-flex">
                  <div className="justify-center items-end gap-2 flex">
                    <div className="w-6 h-6 relative"></div>
                    <div className="justify-center items-center gap-[7px] flex">
                      <img src={radio} alt="" />
                      <div className="text-zinc-800 text-base font-normal  leading-tight">
                        Standard
                      </div>
                      <div className="text-zinc-500 text-sm font-normal leading-tight">
                        Arrives in 3-5 business days
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-zinc-800 text-sm font-normal  leading-tight">
                    $7.00
                  </div>
                </div>
                <div className="w-[672px] h-6 left-0 top-[64px] absolute justify-between items-center inline-flex">
                  <div className="justify-center items-end gap-2 flex">
                    <div className="w-6 h-6 relative"></div>
                    <div className="justify-center items-center gap-[7px] flex">
                      <img src={radio} alt="" />
                      <div className="text-zinc-800 text-base font-normal font-['Epilogue'] leading-tight">
                        2-Day Express
                      </div>
                      <div className="text-zinc-500 text-sm font-normal font-['Epilogue'] leading-tight">
                        Arrives in 2 business days.
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-zinc-800 text-sm font-normal font-['Epilogue'] leading-tight">
                    $15.00
                  </div>
                </div>
                <div className="w-[672px] h-6 left-0 top-[128px] absolute justify-between items-center inline-flex">
                  <div className="justify-center items-end gap-2 flex">
                    <div className="w-6 h-6 relative"></div>
                    <div className="justify-center items-center gap-[7px] flex">
                      <img src={radio} alt="" />
                      <div className="text-zinc-800 text-base font-normal font-['Epilogue'] leading-tight">
                        Overnight
                      </div>
                      <div className="text-zinc-500 text-sm font-normal font-['Epilogue'] leading-tight">
                        Arrives the next business day.
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-zinc-800 text-sm font-normal font-['Epilogue'] leading-tight">
                    $25.00
                  </div>
                </div>
              </div>
            </div>
            <button className="rounded-md w-[229px] h-[48px] text-sm font-sans bg-[#BF4C9A] text-white ml-[70%] my-[60px]">
              Continue To Payment
            </button>
          </div>
        </div>
        <div>
          <div className="Order flex flex-col w-[560px] h-[1313px] ml-[10%] pt-[125px]">
            <div className="flex flex-col">
              <span className="font-serif text-2xl">Order Summery</span>
              <span className="flex justify-end">Edit Cart</span>
            </div>

            <div className="w-[477px] h-[465.42px] flex-col justify-start items-start gap-8 inline-flex">
              <div className="self-stretch justify-start items-start gap-[29px]">
                <div className="grow shrink basis-0 self-stretch justify-start items-start gap-6 flex">
                  <div className="grow shrink basis-0 self-stretch rounded-lg justify-center items-center flex">
                    <img className="w-24 h-24" src={product} />
                  </div>
                  <div className="w-[357px] flex flex-col gap-10">
                    <div className="w-[196px] h-[19.74px] text-zinc-800 text-base font-normal font-sans leading-tight">
                      Hanskin
                      <br />
                      Hyaluron Skin Essence
                    </div>
                    <div className="w-[111.44px] p-1 bg-white rounded-md border border-[##E6E6E6] justify-between items-start inline-flex ">
                      <FaMinus onClick={decreaseQuantity} />{" "}
                      <div className="flex justify-end w-[10px]">
                        {productQuantity}
                      </div>
                      <FaPlus onClick={increaseQuantity} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[477px] justify-start items-end gap-6 inline-flex">
                <div className="w-[357px] h-10 px-3 py-2 bg-white rounded-md border border-neutral-200 justify-start items-center gap-1 flex">
                  <div className="grow shrink basis-0 h-5 text-zinc-500 text-sm font-normal leading-tight">
                    Enter promo code
                  </div>
                </div>
                <div className="w-24 h-10 px-8 bg[##BF4C9A] rounded-lg justify-center items-center gap-2 flex">
                  <div className="text-center text-white text-base font-normal font-sans">
                    Apply
                  </div>
                </div>
              </div>
              <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-4 flex">
                <div className="w-[477px] justify-between items-start inline-flex">
                  <div className="text-zinc-800 text-xl font-normal font-sans leading-normal">
                    Subtotal
                  </div>
                  <div className="text-center text-zinc-800 text-xl font-normal font-sans leading-normal">
                    $25.00
                  </div>
                </div>
                <div className="w-[477px] justify-between items-end inline-flex">
                  <div className="text-zinc-800 text-xl font-normal font-sans leading-normal">
                    Estimated Shipping
                  </div>
                  <div className="text-zinc-800 text-xl font-normal font-sans leading-normal">
                    $7.00
                  </div>
                </div>
                <div className="w-[477px] justify-between items-end inline-flex">
                  <div className="text-zinc-800 text-xl font-normal font-sans leading-normal">
                    Estimated Tax
                  </div>
                  <div className="text-zinc-800 text-xl font-normal font-sans leading-normal">
                    $3.24
                  </div>
                </div>
                <div className="w-[477px] h-[0px] border border-zinc-800"></div>
                <div className="w-[477px] justify-between items-start inline-flex">
                  <div className="text-zinc-800 text-xl font-normal font-sans leading-normal">
                    Estimated Total
                  </div>
                  <div className="text-right text-zinc-800 text-xl font-normal font-sans leading-normal">
                    $35.24
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
