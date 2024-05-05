import { useState } from "react";

export default function InferiorNav() {


  const [category, setCategory] = useState(1);

  function handleClick(n) {
    setCategory(n);
    window.alert("Feature coming soon!🚀");
  }

  return (
    <nav className="max-w-[1440px] flex justify-center font-serif">
      <div className="flex gap-[60px]">
        <span
          className={`px-4 py-6 ${
            category === 1
              ? "bg-gradient-to-r from from-[#994D80] to-[#E55CB8] text-transparent bg-clip-text"
              : "text-[#1A1A1A"
          } cursor-pointer`}
          onClick={() => handleClick(1)}
        >
          SHOP
        </span>
        <span
          className={`px-4 py-6 ${
            category === 2
              ? "bg-gradient-to-r from from-[#994D80] to-[#E55CB8] text-transparent bg-clip-text"
              : "text-[#1A1A1A"
          } cursor-pointer`}
          onClick={() => handleClick(2)}
        >
          BEST SELLERS
        </span>
        <span
          className={`px-4 py-6 ${
            category === 3
              ? "bg-gradient-to-r from from-[#994D80] to-[#E55CB8] text-transparent bg-clip-text"
              : "text-[#1A1A1A"
          } cursor-pointer`}
          onClick={() => handleClick(3)}
        >
          BRANDS
        </span>
        <span
          className={`px-4 py-6 ${
            category === 4
              ? "bg-gradient-to-r from from-[#994D80] to-[#E55CB8] text-transparent bg-clip-text"
              : "text-[#1A1A1A"
          } cursor-pointer`}
          onClick={() => handleClick(4)}
        >
          BLOG
        </span>
      </div>
    </nav>
  );
}
