import AdFrame from "../components/PromoSection";
import HeroCard from "../components/HeroCard";
import ProductList from "../components/ProductList";
import ProductNavBar from "../components/ProductNavBar";
import Labels from "../components/Labels";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-16">
      <HeroCard />
      <ProductNavBar />
      <ProductList />
      <AdFrame />
      <Labels />
    </div>
  )
}
