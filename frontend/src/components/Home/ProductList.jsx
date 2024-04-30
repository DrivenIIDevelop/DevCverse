import { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";





export default function ProductList() {
  
  const { allProducts } = useProductContext();
  const { getAllProducts } = useProductContext();
  // console.log("allProducts in ProductList component: ", allProducts);

  const productArr = []
  
  for (let i = 0; i < 8; i++) {
    productArr.push(allProducts[i])
  }

  useEffect(() => {
      getAllProducts();
  }, []);

  return (
    <ul className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 mx-16">
        {productArr.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </ul>
  )
}
