import { useState } from "react";

export default function Quiz5() {
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState(0);

  function handleAnswerChange(text, number) {
    setSelected(number);
    setAnswer(text);
    console.log(answer);
  }

  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">
      How does your skin typically react to new skincare products?
      </p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 1 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("It adapts easily without any adverse reactions", 1)}
        >
          It adapts easily without any adverse reactions
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 2 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("It might get a few pimples initially but then adjusts", 2)}
        >
          It might get a few pimples initially but then adjusts
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 3 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("It tends to break out or become irritated", 3)}
        >
          It tends to break out or become irritated
        </p>
        <p
          className={`px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626] ${selected === 4 ? "bg-[#F2FFF6] border-[#4CBF71] border-4 text-[#4CBF71] shadow-answer-hover" : ""}`}
          onClick={() => handleAnswerChange("It becomes red, itchy, or inflamed easily", 4)}
        >
          It becomes red, itchy, or inflamed easily
        </p>
      </div>
    </div>
  );
}
