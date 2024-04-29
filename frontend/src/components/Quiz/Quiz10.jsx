import { useState } from "react";

export default function Quiz10() {
  const [answer, setAnswer] = useState("");

  function handleAnswerChange(text) {
    setAnswer(text);
  }

  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">
        How does your skin feel when exposed to harsh or fragranced skincare
        products?
      </p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() => handleAnswerChange("It remains calm and unaffected")}
        >
          It remains calm and unaffected
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange(
              "It might experience a slight tingle, but nothing severe"
            )
          }
        >
          It might experience a slight tingle, but nothing severe
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() => handleAnswerChange("It becomes irritated or red")}
        >
          It becomes irritated or red
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange(
              "It stings or burns immediately upon application"
            )
          }
        >
          It stings or burns immediately upon application
        </p>
      </div>
    </div>
  );
}
