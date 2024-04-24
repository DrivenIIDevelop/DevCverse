import { useState } from "react";
import { img1, img2, img3, img4, img5, img6, img7 } from "./singleProductImage";

const product = {
  name: "Glass Skin Water-Gel Moisturizer",
  price: 100,
  description: "Product Description",
  skin_type: "Normal",
  brand: "Peach & Lily",
  imageUrl: [img1, img2, img3, img4, img5, img6, img7],
};

export default function SingleProductCard() {
  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
      <p>{product.skin_type}</p>
      <p>{product.brand}</p>
    </div>
  );
}
