import { useState } from "react";
import { useProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

const product = {
    name: "test",
    price: 12.36,
    description: "test",
    skin_type: "test",
    brand: "test",
    };

export default function UpdateProduct() {
  const { id } = useParams();
  const { updateProduct } = useProductContext();

  const [productName, setProductName] = useState(product.name);
  const [productPrice, setProductPrice] = useState(product.price);
  const [productDescription, setProductDescription] = useState(product.description);
  const [productSkinType, setProductSkinType] = useState(product.skin_type);
  const [productBrand, setProductBrand] = useState(product.brand);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const updateProductData = {
    //         product_id: Number(id),
    //         name: productName,
    //         price: parseFloat(productPrice),
    //         description: productDescription,
    //         skin_type: productSkinType,
    //         brand: productBrand,
    //       }
    

    const formData = new FormData();
    formData.append("product_id", Number(id));
    formData.append("name", productName);
    formData.append("price", parseFloat(productPrice));
    formData.append("description", productDescription);
    formData.append("skin_type", productSkinType);
    formData.append("brand", productBrand);

    for (var pair of formData.entries()) {
      console.log("formData in update product component: ", pair[0] + ", " + pair[1]);
    }   

    updateProduct(Number(id), formData);
   
  };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center" encType="multipart/form-data">
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
