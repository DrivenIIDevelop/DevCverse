import { useState } from "react";

export default function Quiz10() {
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
        How does your skin feel when exposed to harsh or fragranced skincare
        products?
      </p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className={` ${selected === 1 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() => handleAnswerChange("It remains calm and unaffected", 1)}
        >
          It remains calm and unaffected
        </p>
        <p
          className={` ${selected === 2 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() =>
            handleAnswerChange(
              "It might experience a slight tingle, but nothing severe", 2
            )
          }
        >
          It might experience a slight tingle, but nothing severe
        </p>
        <p
          className={` ${selected === 3 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() => handleAnswerChange("It becomes irritated or red", 3)}
        >
          It becomes irritated or red
        </p>
        <p
          className={` ${selected === 4 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() =>
            handleAnswerChange(
              "It stings or burns immediately upon application", 4
            )
          }
        >
          It stings or burns immediately upon application
        </p>
      </div>
    </div>
  );
}
