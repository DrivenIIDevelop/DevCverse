import truck from "../../assets/labels/truck.png";
import arrow from "../../assets/labels/arrow.png";
import authentic from "../../assets/labels/authentic.png";

export default function Labels() {
  return (
    <div className="flex justify-center mt-14">
      <div className="flex space-x-[176px] font-serif">
        <div className="flex flex-col items-center gap-3">
          <img src={truck} alt="truck label" className="w-[120px] h-[120px]" />
          <p className="font-semibold text-xl text-[#732E5C]">Free Shipping</p>
          <p className="font-sans text-sm text-[#666]">On Order Above $80</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={arrow} alt="arrow label" className="w-[120px] h-[120px]" />
          <p className="font-semibold text-xl text-[#732E5C]">Easy Return</p>
          <p className="font-sans text-sm text-[#666]">15-Day Return Policy</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={authentic} alt="authentic label" className="w-[120px] h-[120px]" />
          <p className="font-semibold text-xl text-[#732E5C]">100% Authentic</p>
          <p className="font-sans text-sm text-[#666]">Product Sourced Directly</p>
        </div>
      </div>
    </div>
  );
}
