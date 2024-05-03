import { Link } from "react-router-dom";
import aboutImg from "../assets/aboutFrame.png";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <img src={aboutImg} alt="about image" className="mb-16" />

      <div className="flex mb-16 justify-center gap-8">
        <Link
          to="/"
          className="px-8 py-2 w-[300px] rounded-lg font-sans text-base text-[#262626] border border-[#262626] flex justify-center items-center"
        >
          Go to Homepage
        </Link>
        <Link
          to="quiz"
          className="px-8 py-2 w-[300px] rounded-lg font-sans text-base text-[#FFF] bg-[#BF4C9A] flex justify-center items-center"
        >
          Unlock Your Glow! Quiz
        </Link>
      </div>

      <Footer />
    </div>
  );
}
