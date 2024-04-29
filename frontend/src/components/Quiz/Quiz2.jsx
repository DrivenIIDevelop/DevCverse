import { useState } from "react";

export default function Quiz2() {
  const [answer, setAnswer] = useState("");

  function handleAnswerChange(text) {
    setAnswer(text);
  }

  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">
        How does your skin typically react to new skincare products?
      </p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange("It adapts easily without any adverse reactions")
          }
        >
          It adapts easily without any adverse reactions
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange(
              "It might get a few pimples initially but then adjusts"
            )
          }
        >
          It might get a few pimples initially but then adjusts
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange("It tends to break out or become irritated")
          }
        >
          It tends to break out or become irritated
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange("It becomes red, itchy, or inflamed easily")
          }
        >
          It becomes red, itchy, or inflamed easily
        </p>
      </div>
    </div>
  );
}
