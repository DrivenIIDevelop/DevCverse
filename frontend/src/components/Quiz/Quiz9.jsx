import { useState } from "react";

export default function Quiz9() {
  const [answer, setAnswer] = useState("");

  function handleAnswerChange(text) {
    setAnswer(text);
  }

  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">How would you describe your skin tone?</p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange("Fair or light with pink undertones")
          }
        >
          Fair or light with pink undertones
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange(
              "Light to medium with neutral or warm undertones"
            )
          }
        >
          Light to medium with neutral or warm undertones
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() =>
            handleAnswerChange("Medium to deep with warm or golden undertones")
          }
        >
          Medium to deep with warm or golden undertones
        </p>
        <p
          className="px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#4CBF71] hover:border-4 hover:text-[#4CBF71] @apply hover:shadow-answer-hover"
          onClick={() => handleAnswerChange("Deep with rich, dark undertones")}
        >
          Deep with rich, dark undertones
        </p>
      </div>
    </div>
  );
}
