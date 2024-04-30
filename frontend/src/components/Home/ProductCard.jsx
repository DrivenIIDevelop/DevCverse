import { Link } from "react-router-dom";

import star from "../../assets/star.svg";
import cartIcon from "../../assets/cart.svg";
import likeIcon from "../../assets/like.svg";

export default function ProductCard({ product }) {
  // console.log("product in ProductCard component: ", product);

  function handleClick() {
    window.alert("Feature coming soon!🚀");
  } 

  return (
    <li className="p-2">
      <div className="">
        <Link to={`/products/${product.id}`}>

           <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-[330px] object-cover rounded-lg"
        />
        </Link>
       
      </div>

      <div className="p-2">
        <div className="flex justify-between">
          <p className="font-sans text-xl text-[#262626]">{product.brand} </p>
          <div className="flex gap-x-0.5 ">
            {/* <img src={star} alt="star" className="w-4 h-4" /> */}
            {/* <p className="font-sans text-xs">{product.review}</p> */}
            {/* <p className="font-sans text-xs">({product.reviewCount})</p> */}
          </div>
        </div>
        <p className="font-sans text-sm truncate">{product.name}</p>
        <div className="flex justify-between mt-2">
          <p className="font-sans text-base">${product.price}</p>
          <div className="flex gap-1">
            {product.badge && product.badge.length > 0
              ? product.badge.map((badge, index) => (
                  <span
                    key={index}
                    className={`font-sans text-xs ${
                      badge === "Clean"
                        ? "bg-[#D9EFFF] text-[#2090C9] border border-[#2090C9]"
                        : "bg-[#FEF7FB] text-[#B26B94] border border-[#B26B94]"
                    } px-2 py-1 rounded`}
                  >
                    {badge}
                  </span>
                ))
              : null}
          </div>
        </div>
        <div className="flex justify-between">
          <button className="w-[70%] flex justify-center items-center font-sans lg:text-sm border border-[#262626] gap-2 px-8 py-3 rounded-lg mt-2.5 " onClick={handleClick}>
            <img src={cartIcon} alt="cart" className="w-6 h-6" />
            <span className="hidden xl:inline">Add to cart</span>
          </button>
          <button className="w-[20%] flex justify-center items-center border border-[#262626] rounded-lg mt-2.5" onClick={handleClick}>
            <img src={likeIcon} alt="like button" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </li>
  );
}
