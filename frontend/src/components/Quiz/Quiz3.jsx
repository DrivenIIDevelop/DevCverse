import { useState } from "react";

export default function Quiz3() {
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState(0);

  function handleAnswerChange(text, number) {
    setSelected(number)
    setAnswer(text);
    console.log(answer);
  }

  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">What are your main skincare concerns?</p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className={` ${selected === 1 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() =>
            handleAnswerChange(
              "Maintaining hydration and preventing fine lines", 1
            )
          }
        >
          Maintaining hydration and preventing fine lines
        </p>
        <p
          className={` ${selected === 2 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() =>
            handleAnswerChange(
              "Evening out skin tone and reducing hyperpigmentation", 2
            )
          }
        >
          Evening out skin tone and reducing hyperpigmentation
        </p>
        <p
          className={` ${selected === 3 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() => handleAnswerChange("Oily or greasy", 3)}
        >
          Oily or greasy
        </p>
        <p
          className={` ${selected === 4 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
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
