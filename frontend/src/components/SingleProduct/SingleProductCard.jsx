import { useState } from "react";
import { img1, img2, img3, img4, img5, img6, img7 } from "./singleProductImage";
import { FaStar } from "react-icons/fa";
import badges from "../../assets/Badges.png";
import purchaseOption from "../../assets/purchaseOption.png";
import cartIcon from "../../assets/cart.svg";
import like from "../../assets/like.svg";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const product = {
  name: "Glass Skin Water-Gel Moisturizer",
  price: 43.0,
  description: "Product Description",
  skin_type: "Normal",
  brand: "Peach & Lily",
  imageUrl: [img1, img2, img3, img4, img5, img6, img7],
};

export default function SingleProductCard() {
  const [productQuantity, setProductQuantity] = useState(1);
  const [category, setCategory] = useState("Details");

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

  return (
    <div className="flex flex-col pr-14">
      <span className="font-sans text-sm text-[#BF4C9A] flex gap-1 mb-2">
        <FaStar />
        Suitable for your skin type
      </span>
      <h1 className="font-serif text-[40px] text=[#2C2C2C] font-light mb-2">
        {product.name}
      </h1>
      <p className="font-sans text-2xl font-normal text-[#9F9BA6] mb-2">
        {product.brand}
      </p>
      <p className="font-sans text-2xl text-[#260F1F] mb-2">${product.price.toFixed(2)}</p>
      <p className="font-sans text-xl text-[#260F1F] mb-2">Size: 1.69 oz/ 50ml</p>
      <img src={badges} alt="product badges" className="mb-2"/>
      <img src={purchaseOption} alt="" className="mb-2"/>
      <div className="flex justify-between gap-3 mb-2">
        <span className="flex gap-5 border border-black rounded-lg py-2 justify-center items-center text-center w-[20%]">
          <FaMinus onClick={decreaseQuantity} />{" "}
          <div className="flex justify-end w-[10px]">{productQuantity}</div>
          <FaPlus onClick={increaseQuantity} />
        </span>
        <button className="flex justify-center items-center gap-2 border border-black rounded-lg py-2 px-14 w-[70%]">
          <img src={cartIcon} alt="" /> Add to cart
        </button>
        <button className="flex justify-center items-center border border-black py-2 px-4 rounded-lg w-[10%]">
          <img src={like} alt="like button" />
        </button>
      </div>
      <p className="font-sans text-sm text-[#333] mb-3">
        Pay with AfterPay Interest-free payments. <span className="underline">Learn more</span>
      </p>
      <div className="flex gap-5 font-sans text-base text-[#666] mb-0.5">
        <p className={`${category === 'Details' ? 'text-[#BF4C9A]' : 'text-[#666]'}`} onClick={() => handleCategoryChange("Details")}>Details</p>
        <p className={`${category === 'Ingredients' ? 'text-[#BF4C9A]' : 'text-[#666]'}`} onClick={() => handleCategoryChange("Ingredients")}>Ingredients</p>
        <p className={`${category === 'How to use' ? 'text-[#BF4C9A]' : 'text-[#666]'}`} onClick={() => handleCategoryChange("How to use")}>How to use</p>
        <p className={`${category === 'Share' ? 'text-[#BF4C9A]' : 'text-[#666]'}`} onClick={() => handleCategoryChange("Share")}>Share</p>
      </div>
      <p className="font-sans text-base text-[#333]">
        Instantly hydrates, balances and strengthens your skin with the power of
        vegan pre- and probiotics and hyaluronic acid. The perfect end to your
        skincare routine, our Glass Skin Water-Gel Moisturizer provides instant
        and long-lasting hydration for a Glass Skin glow. This breakthrough
        formula delivers a proprietary vegan prebiotic and probiotic complex
        that strengthens your skin’s unique microbiome – the environment in
        which your skin functions – to strengthen skin and curb breakouts. The
        moisturizer is also expertly blended with natural antioxidants and
        vitamins found in peach and kiwi extracts, combined with calming
        chamomile, and licorice that helps skin appear more even-toned and
        brighter. Meanwhile, 3 different weights of hyaluronic acid hydrates
        deeply while beta glucans help bind moisture to skin for long-lasting
        hydration. The finishing touch is powered by our signature VoluSmooth™
        that leaves skin looking and feeling smooth.
      </p>
    </div>
  );
}
