import { useState } from "react";

export default function ProductNavBar() {
  const [category, setCategory] = useState(1);

  async function setCategoryNum(n) {
    await setCategory(n); 
    window.alert("Feature coming soon!🚀");
  }

  return (
    <nav className="flex justify-between mt-14 items-center">
      <div className="flex gap-x-8">
        <span
          className={`px-2 py-4 font-serif text-base ${
            category === 1
              ? "bg-gradient-to-r from from-[#994D80] to-[#E55CB8] text-transparent bg-clip-text cursor-default"
              : "text-[#1A1A1A]"
          } `}
          onClick={() => setCategoryNum(1)}
        >
          NEW ARRIVALS
        </span>
        <span
          className={`px-2 py-4 font-serif text-base ${
            category === 2
              ? "bg-gradient-to-r from from-[#994D80] to-[#E55CB8] text-transparent bg-clip-text cursor-default"
              : "text-[#1A1A1A]"
          } `}
          onClick={() => setCategoryNum(2)}
        >
          BEST SELLERS
        </span>
        <span
          className={`px-2 py-4 font-serif text-base ${
            category === 3
              ? "bg-gradient-to-r from from-[#994D80] to-[#E55CB8] text-transparent bg-clip-text cursor-default"
              : "text-[#1A1A1A]"
          } `}
          onClick={() => setCategoryNum(3)}
        >
          OFFERS
        </span>
      </div>

      <div className="flex gap-x-3">
        <p className="font-sans text-sm flex items-center">Sort By</p>
        <select
          name="sort"
          id=""
          className="px-3 py-2 font-sans text-sm font-normal text-[#666] items-center rounded-[8px] border border-[#666]"
        >
          <option value="best_value">Best Value</option>
          <option value="brand">Brand</option>
          <option value="review">Review</option>
        </select>
      </div>
    </nav>
  );
}
