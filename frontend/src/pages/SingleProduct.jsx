import SingleProductImg from "../components/SingleProduct/SingleProductImg";
import SingleProductCard from "../components/SingleProduct/SingleProductCard";
import reviewSectionImg from "../assets/Review Section.svg";
import Footer from "../components/Footer";
import { useProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



// import {
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
//   img6,
//   img7,
// } from "../components/SingleProduct/singleProductImage";
// import { useProductContext } from "../context/ProductContext";

// const product = {
//   name: "Glass Skin Water-Gel Moisturizer",
//   price: 100,
//   description: "Product Description",
//   skin_type: "Normal",
//   brand: "Peach & Lily",
//   imageUrl: [img1, img2, img3, img4, img5, img6, img7],
// };

export default function SingleProduct() {
  const { id } = useParams();
  const { singleProduct } = useProductContext();
  const { getSingleProduct } = useProductContext();

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  if (!singleProduct) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="max-w-[1440px] mx-auto flex justify-center">

      <div className="flex flex-col">
        <p className="font-sans text-[#000] text-sm mt-1 mb-14 pl-14">
          <span className="font-sans text-sm text-[#9F9BA6]">Best Sellers</span>{" "}
          &gt; [{singleProduct.brand}]{singleProduct.name}{" "}
        </p>

        <div className="flex gap-14">
          <SingleProductImg product={singleProduct} />
          <SingleProductCard product={singleProduct} />
        </div>

        <img
          src={reviewSectionImg}
          alt="product review section"
          className="mt-20 mb-32 mx-14"
        />
        <Footer />
      </div>
    </div>
  );
}
