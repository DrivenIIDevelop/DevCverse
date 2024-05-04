const tonerImg =
  "https://s3-alpha-sig.figma.com/img/44bb/da94/2a0c8020c6fa7a127d88c0a0364145a3?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IOqlGPJfrfv9p3FfTPtJPxVL09JUniU5HTI3-WaG~tR3EuW0BiNRR9yMd39oMoOJ0bmigR0~yqBoXy9~PH8fxFGgZvk-yr9mQQejG0YA4ouxtXFA8bRy9xdakVuh32FrD0Q2lQwHni2v6BsRSmf7u8X9-Mx36jwZdvvVf1f4x5MRjRsSQLc14KXELKzr3EKv8w4jekUAcJqN-83Nrp3CPxGVC9dFy4HAONLxHlVO5mqoB6kT~L7ORuIAM2W1BhRQGaMcV25itNiDILhGU94-XoOPn4gt-R-f-wAn5LZ12340fDiORBUDUHW719snmN~6i2hPrsKsMcCvtGd4bci4HQ__";
const paulasImg =
  "https://s3-alpha-sig.figma.com/img/7ac9/09b4/6c66b93d373fb8d1eb05ba686dbb7791?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YX5wH6fhVhWKtJahaM1rQ~nElMnTSodjYddQEVg3uKwcYThRLyVy2eaUBJv2gPRvWrYEO7jclFwxBOiluKod8tJ3qFA0Qf0w-rVXKjLosTAB2qQRq48P7fXM-BGhdw3BjmO~mbzCU72tzbF7Aa0XqpSp07EG3Vg3-ucNfprTO5q9I6sb07dkFyLIXpnyWnx9kRu1bsFhFnEXQcgMVlkrgt1J-2L~eoT-U4kPsuktOS9Lg6Vfm3MXaffLavqvORzWaQePxataiBWOfnjOMFaWmY0k2i4HDuepORH0-9Z5YNVdqVG9nhC4mHoVMgqIZ1FRQJ2pB8ylH~z9u~w34OefFw__";
const maskImg =
  "https://s3-alpha-sig.figma.com/img/963c/bc19/cc150b8d53ca2e7e3b180b11c0b85c66?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EijcVMNL08GzSawVWnIHoj-Wlw2EQR7YCboREKLdFMvUyDhtDsy7Tx3xuXiIsN1sCx57RX8zZ7hT2iurhU4EXWMLgoWQ3KOSJL75v-J17bz~xlEHsjwBj2B2hPiyy6o4giXBi9KK3tfXywhPX5TooUCROOmparrIadIHEztz~sOsSYLFhxV0VhxuuigDw8JJqMFQVq-WynHna8p~1Z6RykeNZoEmXyaZrRQMEFN7DVb-J8mYPk16aZTdo3tTEMKKvCCD772zXi9iyDBgt~fpAGdtYmFNFRE3ndguF-ehi-oJdFyXAnQcvfCypxMPdyhs3rSF9yYaRDLQq3q63RrcLA__";

export default function Recommendations() {
  function handleClick() {
    window.alert("Feature coming soon!🚀");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 my-14 gap-3 mx-14">
      <div className="">
        <img
          src={tonerImg}
          alt="toner image"
          className="aspect-square object-cover"
        />
        <p className="font-serif text-2xl md:text-3xl font-light text=[#333] flex justify-center mt-4">
          Best Toners
        </p>
        <p className="font-sans text-xs md:text-sm text-[#262626] flex justify-center py-4">
          View top-rated toners based on skin-type, reviews, & more.
        </p>
        <button
          className="w-full font-serif font-light text-[#262626] text-sm flex justify-center border border-[#262626] rounded-lg px-8 py-3"
          onClick={handleClick}
        >
          View Toners
        </button>
      </div>

      <div className="">
        <img
          src={paulasImg}
          alt="paula's image"
          className="aspect-square object-cover"
        />
        <p className="font-serif text-2xl md:text-3xl font-light text=[#333] flex justify-center mt-4">
          Paula’s Choice Bundles
        </p>
        <p className="font-sans text-xs md:text-sm text-[#262626] flex justify-center py-4">
          Check out Paula&apos;s Choice bundles for your skincare journey.
        </p>
        <button
          className="w-full font-serif font-light text-[#262626] text-sm flex justify-center border border-[#262626] rounded-lg px-8 py-3"
          onClick={handleClick}
        >
          View Paul’s Choice
        </button>
      </div>

      <div className="aspect-w-1 aspect-h-1">
        <img
          src={maskImg}
          alt="mask image"
          className="aspect-square object-cover"
        />
        <p className="font-serif text-2xl md:text-3xl font-light text=[#333] flex justify-center mt-4">
          Refresh Your Skin
        </p>
        <p className="font-sans text-xs md:text-sm text-[#262626] flex justify-center py-4">
          Revitalize skin with face masks in your routine.
        </p>
        <button
          className="w-full font-serif font-light text-[#262626] text-sm flex justify-center border border-[#262626] rounded-lg px-8 py-3"
          onClick={handleClick}
        >
          View Face Masks
        </button>
      </div>
    </div>
  );
}
