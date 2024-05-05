import { useState } from "react";

export default function Quiz7() {
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
        How does your skin respond to changes in the weather?
      </p>

      <div className="flex flex-col gap-[40px] font-sans text-base text-[#666]">
        <p
          className={` ${selected === 1 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() =>
            handleAnswerChange("It adjusts well to different climates", 1)
          }
        >
          It adjusts well to different climates
        </p>
        <p
          className={` ${selected === 2 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() =>
            handleAnswerChange("It tends to get oilier in humid weather", 2)
          }
        >
          It tends to get oilier in humid weather
        </p>
        <p
          className={` ${selected === 3 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() =>
            handleAnswerChange("It becomes drier in colder weather", 3)
          }
        >
          It becomes drier in colder weather
        </p>
        <p
          className={` ${selected === 4 ? "px-3 py-2 w-full rounded-lg bg-[#F2FFF6] border-4 border-[#4CBF71] text-[#4CBF71]" : "px-3 py-2 w-full border border-[#666] rounded-lg hover:bg-[#E5FFEE] hover:border-[#808080] hover:border-1 hover:text-[#262626]"}`}
          onClick={() =>
            handleAnswerChange(
              "It's sensitive to extreme temperatures and becomes easily irritated", 4
            )
          }
        >
          It&apos;s sensitive to extreme temperatures and becomes easily
          irritated
        </p>
      </div>
    </div>
  );
}
