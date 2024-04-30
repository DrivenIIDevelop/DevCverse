import { useState } from "react";

export default function Quiz3() {
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState(0);

  function handleAnswerChange(text, number) {
    setSelected(number)
    setAnswer(text);
  }

  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">What are your main skincare concerns?</p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 1 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() =>
            handleAnswerChange(
              "Maintaining hydration and preventing fine lines", 1
            )
          }
        >
          Maintaining hydration and preventing fine lines
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 2 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() =>
            handleAnswerChange(
              "Evening out skin tone and reducing hyperpigmentation", 2
            )
          }
        >
          Evening out skin tone and reducing hyperpigmentation
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 3 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("Oily or greasy", 3)}
        >
          Oily or greasy
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 4 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() =>
            handleAnswerChange("Soothing irritation and reducing redness", 4)
          }
        >
          Soothing irritation and reducing redness
        </p>
      </div>
    </div>
  );
}
