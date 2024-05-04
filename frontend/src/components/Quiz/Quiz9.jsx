import { useState } from "react";

export default function Quiz9() {
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState(0);

  function handleAnswerChange(text, number) {
    setSelected(number);
    setAnswer(text);
    console.log(answer);
  }

  return (
    <div className="font-sans flex flex-col gap-[40px] ">
      <p className="text-xl">How would you describe your skin tone?</p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className={` ${selected === 1 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() =>
            handleAnswerChange("Fair or light with pink undertones", 1)
          }
        >
          Fair or light with pink undertones
        </p>
        <p
          className={` ${selected === 2 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() =>
            handleAnswerChange(
              "Light to medium with neutral or warm undertones", 2
            )
          }
        >
          Light to medium with neutral or warm undertones
        </p>
        <p
          className={` ${selected === 3 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() =>
            handleAnswerChange("Medium to deep with warm or golden undertones", 3)
          }
        >
          Medium to deep with warm or golden undertones
        </p>
        <p
          className={` ${selected === 4 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() => handleAnswerChange("Deep with rich, dark undertones", 4)}
        >
          Deep with rich, dark undertones
        </p>
      </div>
    </div>
  );
}
