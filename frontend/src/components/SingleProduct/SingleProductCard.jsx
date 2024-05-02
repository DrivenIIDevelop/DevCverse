import { useState } from "react";
// import { img1, img2, img3, img4, img5, img6, img7 } from "./singleProductImage";
import { FaStar } from "react-icons/fa";
import badges from "../../assets/Badges.png";
import cartIcon from "../../assets/cart.svg";
import like from "../../assets/like.svg";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import checked from "../../assets/RadioCheck.svg";
import notChecked from "../../assets/RadioNotChecked.svg";
import horizontal_badge from "../../assets/Horizontal Badge.svg";
import { useCartContext } from "../../context/CartContext";
import { useUserContext } from "../../context/UserContext";

export default function SingleProductCard({ product }) {
  // console.log("product in SingleProductCard component: ", product);
  const [productQuantity, setProductQuantity] = useState(1);
  const [category, setCategory] = useState("Details");
  // const [productPrice, setProductPrice] = useState(product.price.toFixed(2));
  const [productPrice, setProductPrice] = useState(product.price);


  const { user } = useUserContext();
  console.log("user in singleproductcard: ", user);

  const { addCartItem } = useCartContext();

  // console.log("productPrice in singleproductcard: ", productPrice);

  function increaseQuantity() {
    setProductQuantity(productQuantity + 1);
  }

  function decreaseQuantity() {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  }

  function handleCategoryChange(category) {
    setCategory(category);
  }

  function handlePriceChange(price) {
    setProductPrice(price.toFixed(2));
  }

  function autoParagraphs() {
    const paragraphs = product.description.split(/(?<=\.)\s+/);

    return (
      <div className="font-sans text-sm text-[#333]">
        {paragraphs.map((para, index) => (
          <span key={index}>{para}</span>
        ))}
      </div>
    );
  }


  function handleAddCartItem() {
    addCartItem(user.User.id , product.id, productQuantity);
    
  }

  return (
    <div className="flex flex-col pr-14">
      <span className="font-sans text-sm text-[#BF4C9A] flex gap-1 mb-2 items-center">
        <FaStar className="text-lg flex justify-center" />
        <p className="flex justify-center">Suitable for your skin type</p>
      </span>
      <h1 className="font-serif text-[40px] text=[#2C2C2C] font-light mb-2">
        {product.name}
      </h1>
      <p className="font-sans text-2xl font-normal text-[#9F9BA6] mb-2">
        {product.brand}
      </p>
      <p className="font-sans text-2xl text-[#260F1F] mb-2">
        ${product.price.toFixed(2)}
        {/* ${product.price} */}
      </p>
      <p className="font-sans text-xl text-[#260F1F] mb-2">
        Size: {product.size}ml{" "}
        <span className="font-sans text-[#9F9BA6] text-sm ml-1">
         ({(product.size * 0.0338).toFixed(2)} oz)
        </span>
      </p>
      <img src={badges} alt="product badges" className="mb-2" />
      {/* <img src={purchaseOption} alt="" className="mb-2" /> */}
      <div className="mb-2">
        <div
          className={` flex gap-2 items-center justify-between text-sm mb-2 mt-2 ${
            productPrice === product.price.toFixed(2)
              ? // productPrice === product.price
                "text-[#CC70AE]"
              : "text-[#333]"
          }`}
        >
          <div className="flex gap-2 items-center">
            <img
              src={
                productPrice === product.price.toFixed(2) ? checked : notChecked
                // productPrice === product.price ? checked : notChecked
              }
              alt="one time purchase"
              onClick={() => handlePriceChange(product.price)}
            />
            <p>One-time purchase</p>
          </div>
          <p>${product.price.toFixed(2)}</p>
          {/* <p>${product.price}</p> */}
        </div>
        <div
          className={` flex gap-2 items-center justify-between text-sm mb-2 ${
            productPrice === (product.price * 0.9).toFixed(2)
              ? // productPrice === (product.price * 0.9)
                "text-[#CC70AE]"
              : "text-[#333]"
          }`}
        >
          <div className="flex items-center gap-2 relative">
            <img
              src={
                productPrice === (product.price * 0.9).toFixed(2)
                  ? // productPrice === (product.price * 0.9)
                    checked
                  : notChecked
              }
              alt="Subscribe & save 10%"
              onClick={() => handlePriceChange(product.price * 0.9)}
              className="w-[24px] h-[24px]"
            />
            <p className="text-sm">Subscribe & Save 10%</p>
            <img
              src={horizontal_badge}
              alt=""
              className="relative bottom-[8px]"
            />
          </div>
          {/* <p>${(product.price * 0.9).toFixed(2)}</p> */}
          <p>${product.price * 0.9}</p>
        </div>
      </div>
      <div className="flex justify-between gap-3 mb-3">
        <span className="flex gap-5 border border-black rounded-lg py-2 justify-center items-center text-center w-[20%]">
          <FaMinus onClick={decreaseQuantity} />{" "}
          <div className="flex justify-end w-[10px]">{productQuantity}</div>
          <FaPlus onClick={increaseQuantity} />
        </span>
        <button className="flex justify-center items-center gap-2 border border-black rounded-lg py-2 px-14 w-[70%]" onClick={handleAddCartItem}>
          <img src={cartIcon} alt="" /> Add to cart
        </button>
        <button className="flex justify-center items-center border border-black py-2 px-4 rounded-lg w-[10%]">
          <img src={like} alt="like button" />
        </button>
      </div>
      <p className="font-sans text-sm text-[#333] mb-4">
        Pay with AfterPay Interest-free payments.{" "}
        <span className="underline">Learn more</span>
      </p>
      <div className="flex gap-5 font-sans text-base text-[#666] mb-0.5">
        <p
          className={`${
            category === "Details" ? "text-[#BF4C9A]" : "text-[#666]"
          }`}
          onClick={() => handleCategoryChange("Details")}
        >
          Details
        </p>
        <p
          className={`${
            category === "Ingredients" ? "text-[#BF4C9A]" : "text-[#666]"
          }`}
          onClick={() => handleCategoryChange("Ingredients")}
        >
          Ingredients
        </p>
        <p
          className={`${
            category === "How to use" ? "text-[#BF4C9A]" : "text-[#666]"
          }`}
          onClick={() => handleCategoryChange("How to use")}
        >
          How to use
        </p>
        <p
          className={`${
            category === "Share" ? "text-[#BF4C9A]" : "text-[#666]"
          }`}
          onClick={() => handleCategoryChange("Share")}
        >
          Share
        </p>
      </div>
      {autoParagraphs(product.description)}
    </div>
  );
}
