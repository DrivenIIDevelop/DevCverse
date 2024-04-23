
const imageUrl ='https://s3-alpha-sig.figma.com/img/bd93/8586/6db8780d7622c38f45672d8c843bb63f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S6k~IHoKYGCHtNC-VgojkspP78EurYUYXZ1ajyMsHk~oYsrN4QPjsZM0AyhXmMecAJQw6EEsMNZn9Adb2gowz2DGMGWD9lhPK9Ka5u-2q19NcPj~MP~LZ~8gBiX5bt~~iOcUWvPqgSW9ES9uMwZqgxJRY7Gs2WZfd44g8vz6cZfJKBRfS4KNKGRL8qtaIqrb60fWwJ0NEACICnudyUBGgaSCYNjKWoU2eoCbAONAqo-~qhgljk3cjrW-U7amMjkTCqvHEzau~5CaVfpn8RTB0VQR7JwfXbQOegJTris8v8-iGxpSB6Y-vLHaIycIWBBMAmE~7VYyYRc2AZPbYdkTgQ__'

export default function PromoSection() {
  return (
    <div className="flex mt-14 ">
      <img src={imageUrl} alt="ad image" className="w-[50%] object-cover" />

      <div className="w-[50%] flex flex-col items-center justify-center bg-[#E7FFE4] text-[#3F8947] py-24 px-8 gap-y-2">
        <p className="font-sans text-xl ">UP TO 30% OFF ALL HERBIVORE PRODUCTS</p>

        <p className="font-serif text-[40px] w-[80%] flex justify-center">Plant Powered for ALL</p>
        <p className="font-serif text-[40px] w-[80%] flex justify-center">Skin Types</p>


        <div className="flex gap-8 font-serif">
            <div className="flex flex-col items-center">
                <span className="text-3xl">7</span>
                <span className="">days</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-3xl">12</span>
                <span>hours</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-3xl">30</span>
                <span>minutes</span>
            </div>
        </div>

        <button className="px-8 py-4 w-[40%] bg-[#3F8947] rounded-lg text-sm text-[#262626] mt-4">Shop for the Herbivore</button>
      </div>
    </div>
  )
}
