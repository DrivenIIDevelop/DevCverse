

const heroCardImgUrl = "https://s3-alpha-sig.figma.com/img/91d4/2ca9/fe9a5d52d301b1fd68d1379c200f048a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KvMAvOkNUacA9nlsgEjxmEtSyPfkPF47Mwrdx9Im1d~hzh1aBsYd6fIytcZS5BCkb5ZUs-lK6DRfmA8hpoG9cgp1RvZR42vVH-xmO7OwOBWSbFrGYTRw2b34w7vBqHmiP8rtvqchHe2WftuvaHc3AfAvwv0DU7AvbvTTvTKHuvHRrYookL5c6vwwBScRCGvPJn-MWoVSAybgTZFd0G5Z2sU0K31SkLB83pjsU1M6CFnulL~nxkOWLuItzLuLm2ZYysoi0LCWh7KVXMY2PAkwmzJIlJU~FS2IGgv6QpDkr1c7BmyqUJQTa~u64hEzRITb6ZDJStxJ13YtuTDXQmzTvg__"

export default function HeroCard() {
  return (
    <div className="flex w-full gap-[77px] bg-gradient-to-r from from-[#FDF3FA] to-[#F7F7F7]">
        <div className="pl-[65px] flex flex-col justify-center">
            <p>NEW ARRIVAL</p>
            <p>Minimize Pores & Cleanse Skin</p>
            <p>Top Korean skincare product inspired by red mung bean to help nourish skin. </p>
            <button>Shop Beauty of Joseon</button>
        </div>

        <div className="relative overflow-hidden">
            <img src={heroCardImgUrl} alt="hero card image" className=" rounded-l-[1000px] relative left-28 "/>
        </div>
    </div>
  )
}


