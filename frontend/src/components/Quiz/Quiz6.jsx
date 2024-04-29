import { useState } from "react";

export default function Quiz6() {
  const [answer, setAnswer] = useState("");

  function handleAnswerChange(text) {
    setAnswer(text);
  }

  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">How does your skin feel throughout the day?</p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() => handleAnswerChange("Balanced and comfortable")}
        >
          Balanced and comfortable
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange("A bit oily in the T-zone by midday")
          }
        >
          A bit oily in the T-zone by midday
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() => handleAnswerChange("Consistently shiny or greasy")}
        >
          Consistently shiny or greasy
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange("Tight or dry, especially after cleansing")
          }
        >
          Tight or dry, especially after cleansing
        </p>
      </div>
    </div>
  );
}
