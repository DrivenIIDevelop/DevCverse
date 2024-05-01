import { useState } from "react";

export default function Quiz6() {
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState(0);

  function handleAnswerChange(text, number) {
    setSelected(number)
    setAnswer(text);
    console.log(answer);
  }

  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">How does your skin feel throughout the day?</p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 1 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("Balanced and comfortable", 1)}
        >
          Balanced and comfortable
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 2 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() =>
            handleAnswerChange("A bit oily in the T-zone by midday", 2)
          }
        >
          A bit oily in the T-zone by midday
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 3 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("Consistently shiny or greasy", 3)}
        >
          Consistently shiny or greasy
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 4 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() =>
            handleAnswerChange("Tight or dry, especially after cleansing", 4)
          }
        >
          Tight or dry, especially after cleansing
        </p>
      </div>
    </div>
  );
}
