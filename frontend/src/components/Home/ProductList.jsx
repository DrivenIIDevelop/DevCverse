import { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { allProducts } = useProductContext();
  const { getAllProducts } = useProductContext();
  // console.log("allProducts in ProductList component: ", allProducts);


  useEffect(() => {
    getAllProducts();
  }, []);

  if(!allProducts) return (
    <div className="text-3xl text-center my-8">Loading...</div>
  ) 

  const productArr = allProducts.slice(0, 8);

  return (
    <ul className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 mx-16">
      {productArr.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
