import { useState } from "react";

export default function Quiz8() {
  const [answer, setAnswer] = useState("");

  function handleAnswerChange(text) {
    setAnswer(text);
  }

  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">How does your skin appear after cleansing?</p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange("Clean and refreshed without any tightness")
          }
        >
          Clean and refreshed without any tightness
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange("Clean but slightly oily in certain areas")
          }
        >
          Clean but slightly oily in certain areas
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange("Clean but shiny or greasy all over")
          }
        >
          Clean but shiny or greasy all over
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange("Clean but feeling tight or uncomfortable")
          }
        >
          Clean but feeling tight or uncomfortable
        </p>
      </div>
    </div>
  );
}
