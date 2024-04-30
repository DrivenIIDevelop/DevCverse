import { useState } from "react";

export default function Quiz4() {
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState(0);

  function handleAnswerChange(text, number) {
    setSelected(number);
    setAnswer(text);
  }

  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">
      How does your skin react to sun exposure?
      </p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 1 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("It tans easily and rarely burns", 1)}
        >
          It tans easily and rarely burns
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 2 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("It burns occasionally, then tans", 2)}
        >
          It burns occasionally, then tans
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 3 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("It burns easily and rarely tans", 3)}
        >
          It burns easily and rarely tans
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 4 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("It burns quickly and sometimes blisters", 4)}
        >
          It burns quickly and sometimes blisters
        </p>
      </div>
    </div>
  );
}
