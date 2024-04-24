import SingleProductImg from "../components/SingleProduct/SingleProductImg";
import SingleProductCard from "../components/SingleProduct/SingleProductCard";
import reviewSectionImg from "../assets/Review Section.svg";
import Footer from "../components/Footer";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
} from "../components/SingleProduct/singleProductImage";

const product = {
  name: "Glass Skin Water-Gel Moisturizer",
  price: 100,
  description: "Product Description",
  skin_type: "Normal",
  brand: "Peach & Lily",
  imageUrl: [img1, img2, img3, img4, img5, img6, img7],
};

export default function SingleProduct() {
  return (
    <div className="">
      <p className="font-sans text-[#000] text-sm mt-1 mb-14 px-14">
        <span className="font-sans text-sm text-[#9F9BA6]">Best Sellers</span>{" "}
        &gt; [{product.brand}]{product.name}{" "}
      </p>

      <div className="flex">
        <SingleProductImg />
        <SingleProductCard />
      </div>

      <img
        src={reviewSectionImg}
        alt="product review section"
        className="mt-20 mb-32 mx-14"
      />
      <Footer />
    </div>
  );
}
