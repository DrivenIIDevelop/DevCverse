import { useState } from "react";

export default function Quiz1() {
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState(0);

  function handleAnswerChange(text, number) {
    setSelected(number);
    setAnswer(text);
  }


  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">
        How would you describe your skin&apos;s texture?
      </p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 1 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("Smooth and Even", 1)}
        >
          Smooth and Even
        </p>
        <p
           className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 2 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("Rough or bumpy in certain areas", 2)}
        >
          Rough or bumpy in certain areas
        </p>
        <p
           className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 3 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("Oily or greasy", 3)}
        >
          Oily or greasy
        </p>
        <p
           className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 4 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("Tight or dry", 4)}
        >
          Tight or dry
        </p>
      </div>
    </div>
  );
}
