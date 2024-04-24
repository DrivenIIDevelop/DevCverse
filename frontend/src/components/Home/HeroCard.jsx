import star1 from "../../assets/stars/star1.svg";
import star2 from "../../assets/stars/star2.svg";
import star3 from "../../assets/stars/star3.svg";

const heroCardImgUrl =
  "https://s3-alpha-sig.figma.com/img/91d4/2ca9/fe9a5d52d301b1fd68d1379c200f048a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ivc4W-PDlpNwV1SJLru3HpuHQHU6h~MN5E2-ISZII-fPeT0f3vCKMlQQ3QbR5MYcFMFCQsKiFgYuxTfTfudlyZnxusutvnUValOifzPpF2qT9~nc24mVHP4vQFx6qsxnHc~osTTC~OVmMC10Zw3mz9a~-7OHFbKoVlXCOY5AofqsfW1iPmglxE3B7yfGI53e-i4FX54UAaRAf3p065rq8wjeDjnHcqq8E28DQnjGBpO0f6-8lPG8pAibL6xvY7St78b8HLrzh328AVC92oUyW1qetjSwllNpNm-ugbGghk2K8Abtu8aRm3UEHHrik~lfggkNOX8wsHrqIJG4VV8Scw__";

export default function HeroCard() {
  function handleClick() {
    window.alert("Feature coming soon!🚀");
  }
  return (
    <div className="flex justify-between bg-gradient-to-r from from-[#FDF3FA] to-[#F7F7F7] overflow-hidden relative mx-16">
      <img
        src={star3}
        alt="star3"
        className="absolute top-[10%] right-[38%] w-[86px] h-[91px] z-10"
      />

      <div className="w-[45%] pl-[65px] flex flex-col justify-center gap-1 lg:gap-3 relative">
        <p className="font-sans text-xs sm:text-sm lg:text-base leading-6 font-normal">
          NEW ARRIVAL
        </p>
        <p className="font-serif sm:text-3xl lg:text-4xl relative">
          <img
            src={star1}
            alt="star1"
            className="absolute w-[35px] h-[38px] top-[-25px] left-[80px] -z-1"
          />
          Minimize Pores & Cleanse Skin
        </p>
        <p className="font-sans text-xs sm:text-sm lg:text-base leading-6 font-normal">
          Top Korean skincare product inspired by red mung bean to help nourish
          skin.{" "}
        </p>
        <button
          className="w-[50%] px-1 py-1 lg:px-4 lg:py-2 bg-[#BF4C9A] text-white font-sans text-xs sm:text-xs md:text-sm rounded-lg relative"
          onClick={handleClick}
        >
          <img
            src={star2}
            alt="start2"
            className="absolute w-[47px] h-[51px] right-[-100px] bottom-[-100px]"
          />
          Shop Beauty of Joseon
        </button>
      </div>

      <div className="relative left-36 w-[60%] rounded-l-[1000px] overflow-hidden">
        <img
          src={heroCardImgUrl}
          alt="hero card image"
          className="relative right-24 object-cover"
        />
      </div>
    </div>
  );
}
