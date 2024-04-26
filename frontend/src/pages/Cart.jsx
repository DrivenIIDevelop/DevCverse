
import Footer from '../components/Footer'

export default function Cart() {
  return (
    <div>
      <div className="flex flex-row px-20 ">
      <div className="w-3/6 px-15">
    <div className="Status">
        <ul className="flex flex-column text-center">
            <li className="basis-1/3">Shipping</li>
            <li className="basis-1/3">Payment</li>
            <li className="basis-1/3">Review</li>
        </ul>
    </div>
    <div>
      <span className="flex justify-center p-10">Fast Checkout</span>
    </div>
    <div className="Payment flex flex-column justify-center space-x-7">
        <button className="basis-1/3 border-2 border-black rounded-md p-4">Apple Pay</button>
        <button className="basis-1/3 border-2 border-black rounded-md">Google Pay</button>
        <button className="basis-1/3 border-2 border-black rounded-md">PayPal</button>
    </div>
    <div className=" text-center">
      <span>OR</span>
    </div>
    <div className="flex flex-col">
        <form className="flex flex-col">
            <span className="text-2xl">Contact Information</span>
            <span className=" flex justify-end">Already have an account? <a href='#' className="underline">Login</a></span>
            <label className="">Full Name</label>
            <input type="text" className="" id="" placeholder="Enter your full name" />
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" placeholder="Enter your email" />
          <div className="flex flex-col">
            <span className="text-2xl">Shipping Information</span>
            <label className="flex flex-col">Address</label>
            <input type="text" name="" id="" placeholder="Enter your street address and apt/suite" />
            <div className="flex flex-row font-sans">
            <label className="">City</label>
            <input type="text" className="" id="" placeholder="Enter your city" />
            <label className="">State/Province</label>
            <input type="text" className="font-sans" id="" placeholder="Enter your state/province" />
            <label className="">Zip Code</label>
            <input type="text" className="" id="" placeholder="Enter your zip code" />
            </div>
          </div>
        </form>
      <form className="flex flex-col ">
        <label htmlFor="">Standard <span>Arrives in 3-5 business days.</span></label>
        <label htmlFor="">2-Day Express <span>Arrives in 2 business days.</span></label>
        <label htmlFor="">Overnight <span>Arrives the next business day.</span></label>
      </form>
    </div>
    <div className=""></div>
    <button className="flex place-items-end rounded-md p-3 text-sm font-sans bg-[#BF4C9A] text-white ">Continue To Payment</button>
</div>
    <div className="Order w-3/6">
    <img src="" alt="" />

    </div>
    <div>
    <input type="text" name="" id="" placeholder='Enter promo code'/>
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
      <Footer />
    </div>
  )
}

