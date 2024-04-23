import PromoSection from "../components/Home/PromoSection";
import HeroCard from "../components/Home/HeroCard";
import ProductList from "../components/Home/ProductList";
import ProductNavBar from "../components/Home/ProductNavBar";
import Labels from "../components/Home/Labels";
import Recommendations from "../components/Home/Recommendations";
import Reviews from "../components/Home/Reviews";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <HeroCard />
      <ProductNavBar />
      <ProductList />
      <PromoSection />
      <Labels />
      <Recommendations />
      <Reviews />
      <Footer />
    </div>
  )
}
