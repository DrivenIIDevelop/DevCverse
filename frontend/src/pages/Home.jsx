import AdFrame from "../components/AdFrame";
import HeroCard from "../components/HeroCard";
import ProductList from "../components/ProductList";
import ProductNavBar from "../components/ProductNavBar";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-16">
      <HeroCard />
      <ProductNavBar />
      <ProductList />
      <AdFrame />
    </div>
  )
}
