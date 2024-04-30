import SingleProductImg from "../components/SingleProduct/SingleProductImg";
import SingleProductCard from "../components/SingleProduct/SingleProductCard";
import reviewSectionImg from "../assets/Review Section.svg";
import Footer from "../components/Footer";
import { useProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function SingleProduct() {
  const { id } = useParams();
  // console.log("id in singleProduct page: ", id);
const  { singleProduct }  = useProductContext();
  // console.log("singleProduct in singleProduct page: ", singleProduct);
  const { getSingleProduct } = useProductContext();
  // const singleProduct = getSingleProduct(Number(id));

  useEffect(() => {
    getSingleProduct(Number(id));
  }, [id]);

  // useEffect(() => {
  //   console.log("singleProduct in singleProduct page: ", singleProduct);
  // }, [singleProduct]);

  if (!singleProduct) {
    return <h1>Loading...</h1>;
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
