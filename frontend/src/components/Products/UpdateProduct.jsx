import { useState } from "react";
import { useProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

export default function UpdateProduct() {
  const { id } = useParams();
  const { updateProduct } = useProductContext();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productSkinType, setProductSkinType] = useState("");
  const [productBrand, setProductBrand] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("id", id);
    formData.append("name", productName);
    formData.append("price", parseFloat(productPrice));
    formData.append("description", productDescription);
    formData.append("skin_type", productSkinType);
    formData.append("brand", productBrand);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }   

    updateProduct(id, formData);
   
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={productName}
        placeholder={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        value={productPrice}
        placeholder={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <input
        type="text"
        value={productDescription}
        placeholder={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <input
        type="text"
        value={productSkinType}
        placeholder={productSkinType}
        onChange={(e) => setProductSkinType(e.target.value)}
      />
      <input
        type="text"
        value={productBrand}
        placeholder={productBrand}
        onChange={(e) => setProductBrand(e.target.value)}
      />
      <button type="submit">Update Product</button>
    </form>
  );
}
