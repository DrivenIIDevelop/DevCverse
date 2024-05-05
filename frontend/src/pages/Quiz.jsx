import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import exclamation from "../assets/Exclamation.png";
import lightbulb from "../assets/lightbulb.png";
import Quiz1 from "../components/Quiz/Quiz1";
import Quiz2 from "../components/Quiz/Quiz2";
import Quiz3 from "../components/Quiz/Quiz3";
import Quiz4 from "../components/Quiz/Quiz4";
import Quiz5 from "../components/Quiz/Quiz5";
import Quiz6 from "../components/Quiz/Quiz6";
import Quiz7 from "../components/Quiz/Quiz7";
import Quiz8 from "../components/Quiz/Quiz8";
import Quiz9 from "../components/Quiz/Quiz9";
import Quiz10 from "../components/Quiz/Quiz10";

import { useState } from "react";

const quiz1Img =
  "https://s3-alpha-sig.figma.com/img/d1db/0f27/d2059f38018bb062bce922fa1b9e71e0?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVhl1XgykYS17p-NAzPxFNlHi5G4IdM69AB6HmYbBV2ZK5cgSs749WI~9B5oknfS-0HI~nI4Q6ig8lfcMsVCtZ1dASllbUXIXSVhsiYoDiCkzcOYGeUZb9qiOwTJbBouVJiDOBQRD1WQXuakJogd06lTcxhOEkWHahzkhWlktXMe68sl6n50oq~WXsssSy9HoAyY6TcXYPVqYuG166-fEf1d2M2FseVgIjQUSEtQyV0O-lHHp8amkbi4LgNH4aOI~buQXNbYns1vfe6h76b7wu~YGkG0dlnGzfOH4Z61~P8XJlD4wmUruhRlT-abxpSSK6ZjjwBzOU93UxvpKuyF8A__";
const quiz2Img =
  "https://s3-alpha-sig.figma.com/img/92d5/6b2c/7a8e840408a279026f70673fefc991f1?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZCKwQjABmGgyNszo90XBadx7Err1vk6PVvJqH7y60qTUPudiltQMD1x8~DRey0s~8Jchgutg5Y4v1lr7CjdgJ4n5i6YupqMmpJWJLeBcHcn5ZKARiVkMtBZHc8DJ0A92pGjO1h-SFHxtY52RHTbpxTQoZMWnf~hBymY7zeYzWtwPR7zV6FI2Ol9HDzVuy-lAHssCVT6N~9bojsEPziG8N6yqT5W87t-eLKMU4BPsK~anadxjpC8d5fRpW-dtDMIFSX6tVXZTYYLGiCzLCi8~X7fzBDMci3cFZv7VkHjRNeK7fVOGYd~kCNeTX9Y-PHVdljqAxVeiPMy5Y5Bp6VJWpA__";
const quiz3Img =
  "https://s3-alpha-sig.figma.com/img/0e89/c4b2/9c6bb9dd2adcf7482ab46f2388ac5e98?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ATIH15dXdShT2-ysZGWailDK6PrOf8Gn6fesHfCRLA~dWuvgR~-iOf02Ux-U6YLke0h5hiKV-xzwfZoz9u0UJ6QIpnt7hMpQv8uhsx3TisYQliidqO22cJW-xl2M4AQ~om6FEezmTYiRyVt7QuKI-g0RCmeEFLm1IcqSw64koWftEZ7N9wS7x-nH36J9g0UNNiBYK--LAdsqWb-zNk8Tv3tGUuYwocKAgBK1m8jScy7xOlcUE9H5z~RRPschfu3ooAulD3fWuyaygbleBBrSfY3aQ9CiTjXJ1NkVJW9bewUbG2dSGSw2WBDX3oXxeOaaGMV~K8yX06R9O~p7XPpAWA__";
const quiz4Img =
  "https://s3-alpha-sig.figma.com/img/80ca/57c3/2a66f03ad6c4bcfe2a441cf20a193efe?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CW2Jtm7mlkJ7QOIpoG8izExAzU2hl0ryPh0ymmCIX0-r0RE33DMnVbHsOXQ7OcVHxGjgRB~xk3j9YUM6JEMwBKMKc89JWDyRPVe~V7V6fSWgYg7Oyvh9ZFEelYKPgMZikdhPZwB-pnLMH0OUdBnLmgs2ydBjjdr7mL6OJByrEVEmgZIX-x6dRkXU3LfPD-lLR5BQzwasg9pGLG68U3Wfgt9Oo2QfYaNlSCZpTS5zHVakf~AFtCiECYHzux-QQ5qdCmcOjjEbJPpF5~BllV1YGOuvb8uACyEriFDjlRoVhkX~qnXrOWBvpSOMWnlqg9OrRHH3KvOfK8pP8JhZ6ghKzg__";
const quiz5Img =
  "https://s3-alpha-sig.figma.com/img/2672/ef46/66b3f2300f3bf1c137ab8cc5773efec4?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eUjdLdIuIJHo6C08O7nGsrj0jWb5-qTwd5gP8yeHrDyM7-xNzlNCEFp69kx0dKx9SlZ3d46Dz1sQHiR599aQFlGfe0fweGB8xUvtNBkxF5aAhQJxWAvLx-DGZUY-gvA~P1E~CEjIJgCFZXBbaRl~dm9T5FYS7Zzd9DhHPa5Y8tM38bcu3P3PZpC1qWgYG5IJfwur32Nx2~rArNaJwCxsTd6KbQlP~Q4YZUi2nHHsgi3sNgwpBvxfI8BDp6qGQXaYe2pcXMuKdZusHGpSAoHApubssvFgSVYVMO3UBv4pcCis2PJ188XdDe5YRPDjTZVqSqcRJzChZHNlsXORiGy2HQ__";
const quiz6Img =
  "https://s3-alpha-sig.figma.com/img/6011/a892/00f06853fd2f046af4fb14b3bb1dd5a6?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WMERwHY3DcfWZSzsuDgQtAufAQErnGvRhsjKHBZSugeH2wRjBp~0NP1qJ9XSfJJVCIfQjAi8-l0wMoMuWxu8jY1TKJY~kZYdBKE7hAaKh2AZ1o7Yz5vJkzvzWdv0vSszYzf060cl3li7l5DIuBtLsN9HbddkVRbZ~HYwxWWG-jeVj-Cyjs2KRsPyhsyPJ5GAjb82XZ9mQuGL4hXr4DBYIXHokVBhUa-jOWdpQBaYTrHGmNCTH0kEN7njJAiPzRJ1V7kufIhBz6IUISe98jalUtuLWpkXOjbl5N9U96IdnMTWwxglYd6O-~NP6iAh23gFvlldQ7ybPuLCuUCbn50mbA__";
const quiz7Img =
  "https://s3-alpha-sig.figma.com/img/6ed0/9494/50adba025b2a50f6af0d3401abaa9e2b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghzvu5T8f4FIYc4EKcq4KorKY3tVjDKzdLxDDCpv~ZgeDODPRNZAHtS9SzKs4TGkirHfcxKBwflyN6vYO1WQW01dOsroLtQiOsf5~wv9dp-74oSuK4WH6yAlSlL~4w8i5tpNXE1s4VnEzAm8srKd-gxY1ASSiR09ovfU4J5qXjFCq-AD-jpU2iYF8B3QSIYVatdIkYbnbPId3l0tQm4F4UBCBLeRleRDCFAyUdsyItj8~It6U258v4ybqYOK3mZDMWoRd18N6wVbo1wtHW0WD8FEbUk2r7-eSSWeHbwtshXRPuFxplSu3ZQhtrTnIUD~C4p-e4EKuoGdjtZM3GZkIQ__";
const quiz8Img =
  "https://s3-alpha-sig.figma.com/img/a93e/c279/90ded94ae77d623147a0bd0a65b3d405?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HkmLf09rVIkB5cKweWdzv-loFyeUZm9jKeyhPf9sqBIchLquzfzxOMtSixJKWg2bPE6WHsSace28Q9pdKqJW-EL6Y4l7CXNxasRoKyPZgGF9N3X2UH5ZQN~bKbRhMMLT46FMwYV~MOXFLTVVm3-Ys00eCrlmEYoSj2lKgeqSnvB60uHyG7Mhktrm0WTqJoQikvDaezpEeKiEynn6f5vdOK8UKdrAhBOr6WS0D3bz5RS~jfk3ZJT4HEuqDxzWcSsBGw7-NG3VxkIwoTQqb8KVRadnmJ7B6XOl5-VvOkFP-3W6jS6xJJEbORfIBEbOpiw5UwNWRfGkbscQlAwKqgIRdg__";
const quiz9Img =
  "https://s3-alpha-sig.figma.com/img/88ab/184e/8bbe50d4b89d64a9f8c1321d0bc0ad39?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JCXZ7W2p5H8S11RTREBCbz5o3P8XRkF96fk~Ppe2lO5uz0OFIAlFdYdfUOopteK2Id0vY-i~f5F8Mcyrl6rXHhn2iwHefz0VahvtpRJUcAJ0uV2DWYR1J6L7nN~6npKGypUq6Neuxi9nUw5Y7EHBF4LJO6iZ3o~KZ5J0x6uaSBojpWo8R9nC3rDMwKMKeuDLMhlGEdKT9v-na0qNDIbDRY8v5LfR4lqCf0uCrURc6~-WReaslDCs2upLJj3J8OtAcHoX4v5gwLyDWvchLpOztN5zeZZUEtO4y5OCewUylxwZzJ-6ipqj093lKiP--3jcZZyuvoePOIKUrwAVOPus8g__";
const quiz10Img =
  "https://s3-alpha-sig.figma.com/img/e013/e9fc/989346602fd130cbe2117af27f04d778?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0JfjDWRvq73KCoYgQoI-f2Vnnk5R-ID8T42HjeXicqnKkJw5HrCmNGbaooHXxReQoD2Mlw2YSOszqcyOCdCFaRSSb1gV1dLJLo1hSSJx4TULz~yb-BtVjzrb0GOBVmyXPbbMW2zSK1U5FEb1HCcn~RXRs0WprbJxR0ryKuSgFUDmo95ZGBjP96kCsFdQS-CCmsbrF2WYO5CVN9K-vBoIm611CvZeyBOGv2pTAquMaJ3lOQ93hVw7DJB1GbS6h4H9ueBA56bFm7nqG-fma6d4USm-7-2veKVd1iecJZBK~y2FPG7Tcpc9iMR~6X-A0T0pXZvNG-BeQqpvn3FgUOBog__";
export default function Quiz() {
  const [quizNumber, setQuizNumber] = useState(1);

  function increaseQuizNumber() {
    setQuizNumber(quizNumber + 1);
  }

  function decreaseQuizNumber() {
    setQuizNumber(quizNumber - 1);
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="px-16">
        <div className="font-serif text-[40px] mb-3 flex flex-col items-center text-[#666]">
          <h1>Discover Your Ideal</h1>
          <h1 className="relative">
            Skincare Routine
            <img
              src={exclamation}
              alt="exclamation marks"
              className="absolute bottom-[1px] -right-[55px]"
            />
          </h1>
        </div>

        <div className="font-sans text-xl text-[#666] mb-8 flex flex-col items-center">
          <p>Take Our Quiz to Unveil the Perfect Skincare Regimen</p>
          <p> Tailored Just for You</p>
        </div>

        <div className="grid grid-cols-2 px-16 gap-[120px] mb-[40px]">
          <div className="flex flex-col justify-between">
            {quizNumber === 1 ? <Quiz1 /> : null}
            {quizNumber === 2 ? <Quiz2 /> : null}
            {quizNumber === 3 ? <Quiz3 /> : null}
            {quizNumber === 4 ? <Quiz4 /> : null}
            {quizNumber === 5 ? <Quiz5 /> : null}
            {quizNumber === 6 ? <Quiz6 /> : null}
            {quizNumber === 7 ? <Quiz7 /> : null}
            {quizNumber === 8 ? <Quiz8 /> : null}
            {quizNumber === 9 ? <Quiz9 /> : null}
            {quizNumber === 10 ? <Quiz10 /> : null}
            <div className="flex justify-between gap-6">
              <button className="px-8 py-2 w-[300px] rounded-lg font-sans text-base text-[#9F9BA6] bg-[#FFF] flex justify-center items-center border border-[#9F9BA6]" onClick={decreaseQuizNumber}>
                Previous
              </button>
              {quizNumber != 10 ? (
                <button
                  className="px-8 py-2 w-[300px] rounded-lg font-sans text-base text-[#FFF] bg-[#BF4C9A] flex justify-center items-center disabled:bg-[#9F9BA6] disabled:text-[#E6E6E6]"
                  onClick={increaseQuizNumber}
                  disabled={quizNumber === 10}
                >
                  Next
                </button>
              ) : null}
            </div>
          </div>
          {quizNumber === 1 ? (
            <img
              src={quiz1Img}
              alt="quiz1 image"
              className="w-[572px] h-[518px]"
            />
          ) : null}
          {quizNumber === 2 ? (
            <img
              src={quiz2Img}
              alt="quiz2 image"
              className="w-[572px] h-[518px]"
            />
          ) : null}
          {quizNumber === 3 ? (
            <img
              src={quiz3Img}
              alt="quiz3 image"
              className="w-[572px] h-[518px]"
            />
          ) : null}
          {quizNumber === 4 ? (
            <img
              src={quiz4Img}
              alt="quiz4 image"
              className="w-[572px] h-[518px]"
            />
          ) : null}
          {quizNumber === 5 ? (
            <img
              src={quiz5Img}
              alt="quiz5 image"
              className="w-[572px] h-[518px]"
            />
          ) : null}
          {quizNumber === 6 ? (
            <img
              src={quiz6Img}
              alt="quiz6 image"
              className="w-[572px] h-[518px]"
            />
          ) : null}
          {quizNumber === 7 ? (
            <img
              src={quiz7Img}
              alt="quiz7 image"
              className="w-[572px] h-[518px]"
            />
          ) : null}
          {quizNumber === 8 ? (
            <img
              src={quiz8Img}
              alt="quiz8 image"
              className="w-[572px] h-[518px]"
            />
          ) : null}
          {quizNumber === 9 ? (
            <img
              src={quiz9Img}
              alt="quiz9 image"
              className="w-[572px] h-[518px]"
            />
          ) : null}
          {quizNumber === 10 ? (
            <img
              src={quiz10Img}
              alt="quiz10 image"
              className="w-[572px] h-[518px]"
            />
          ) : null}
        </div>

        <div className="mx-16 flex px-3 py-2 bg-[#F5F5F5] font-sans text-xl text-[#666] gap-4 items-center rounded-lg">
          <img
            src={lightbulb}
            alt="lightbulb image"
            className="w-[25px] h-[32px]"
          />
          <p>
            Factors like hydration levels and exfoliation habits can affect skin
            texture. Regular exfoliation helps remove dead skin cells, promoting
            smoother texture.
          </p>
        </div>

        <div className="">
          <div className="px-16 flex justify-between items-center mt-[40px]">
            <div className="w-[88%] h-4 bg-[#F5F5F5] border border[#CCC] rounded-lg p-0.5 @apply shadow-quiz-progress">
              <span
                className={`block h-full rounded-lg bg-gradient-to-br from-[#994D80] to-[#E55CB8] transition duration-300 ease-in-out transition-property ${
                  quizNumber === 1 ? "w-[10%]" : ""
                } ${quizNumber === 2 ? "w-[20%]" : ""} ${
                  quizNumber === 3 ? "w-[30%]" : ""
                } ${quizNumber === 4 ? "w-[40%]" : ""} ${
                  quizNumber === 5 ? "w-[50%]" : ""
                } ${quizNumber === 6 ? "w-[60%]" : ""} ${
                  quizNumber === 7 ? "w-[70%]" : ""
                } ${quizNumber === 8 ? "w-[80%]" : ""} ${
                  quizNumber === 9 ? "w-[90%]" : ""
                } ${quizNumber === 10 ? "w-[100%]" : ""}
                `}
              ></span>
            </div>

            {quizNumber === 10 ?   <Link
            to="/about/results"
            className="w-[10%] font-sans text-sm underline text-[#BF4C9A]"
          >
            See Your Results
          </Link>:
            <Link to="/" className="w-[10%]">
              Take Quiz Later
            </Link>}
          </div>
          <p className="w-full text-center">{quizNumber} of 10</p>
        </div>
       
          {/* <Link
            to="/about/results"
            className="mx-16 mt-16 px-8 py-2 w-[300px] rounded-lg font-sans text-base text-[#FFF] bg-[#BF4C9A] flex justify-center items-center mb-16"
          >
            See Your Results
          </Link> */}
      
      </div>
      <Footer />
    </div>
  );
}
