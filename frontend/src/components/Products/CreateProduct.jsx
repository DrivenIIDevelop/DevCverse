import { useState } from "react";
import { useProductContext } from "../../context/ProductContext";

export default function CreateProduct({ closeFunction }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0.00);
  const [productDescription, setProductDescription] = useState("");
  const [productSkinType, setProductSkinType] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productImage, setProductImage] = useState("");

  const { createProduct } = useProductContext();

  const formattedPrice = parseFloat(productPrice);
  const inputPrice = formattedPrice.toFixed(2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", inputPrice);
    formData.append("description", productDescription);
    formData.append("skin_type", productSkinType);
    formData.append("brand", productBrand);
    formData.append("file", productImage);

    // console.log("formData in create product component: ", formData);

    await createProduct(formData);
    // navigate("/admin");
    closeFunction();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 font-sans text-base"
    >
      <div className="flex gap-6">
        <div className="flex flex-col gap-0.5">
          <label htmlFor="product name">Product name</label>
          <input
            type="text"
            value={productName}
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
            required
            className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label htmlFor="product price">Product Price</label>
          <input
            type="number"
            value={productPrice}
            placeholder="Product Price"
            onChange={(e) => setProductPrice(e.target.value)}
            required
            className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
            step="0.01"
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-0.5">
          <label htmlFor="product skin type">Product Skin Type</label>
          <input
            type="text"
            value={productSkinType}
            placeholder="Product Skin Type"
            onChange={(e) => setProductSkinType(e.target.value)}
            required
            className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label htmlFor="Product Brand">Product Brand</label>
          <input
            type="text"
            value={productBrand}
            placeholder="Product Brand"
            onChange={(e) => setProductBrand(e.target.value)}
            required
            className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-0.5">
        <label htmlFor="product description">Product Description</label>
        <textarea
          type="text"
          value={productDescription}
          placeholder="Product Description"
          onChange={(e) => setProductDescription(e.target.value)}
          required
          className="w-full h-[150px] px-3 py-2 rounded-lg outline-[#9CA3AF] resize-none"
        />
      </div>

      <div className="w-full flex gap-2 items-center mb-8">
        <label htmlFor="product image">Product Image</label>
        <input
          type="file"
          onChange={(e) => setProductImage(e.target.files[0])}
          required
          className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
        />
      </div>
      <button
        type="submit"
        className="px-8 py-2 w-[300px] rounded-lg font-sans text-base text-[#FFF] bg-[#BF4C9A] flex justify-center items-center"
      >
        Create Product
      </button>
    </form>
  );
}
