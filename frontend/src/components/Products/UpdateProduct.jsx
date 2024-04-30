import { useState } from "react";
import { useProductContext } from "../../context/ProductContext";

// const product = {
//   name: "test",
//   price: 12.36,
//   description: "test",
//   skin_type: "test",
//   brand: "test",
// };

export default function UpdateProduct({ product, closeFunction }) {
  // console.log("product in updateProduct component: ", product);
  const id = product.id;
  const { updateProduct } = useProductContext();

  const [productName, setProductName] = useState(product.name);
  const [productPrice, setProductPrice] = useState(product.price);
  const [productDescription, setProductDescription] = useState(
    product.description
  );
  const [productSkinType, setProductSkinType] = useState(product.skin_type);
  const [productBrand, setProductBrand] = useState(product.brand);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_id", Number(id));
    formData.append("name", productName);
    formData.append("price", parseFloat(productPrice));
    formData.append("description", productDescription);
    formData.append("skin_type", productSkinType);
    formData.append("brand", productBrand);

    // for (var pair of formData.entries()) {
    //   console.log("formData in update product component: ", pair[0] + ", " + pair[1]);
    // }

    updateProduct(Number(id), formData);
    closeFunction();
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="flex flex-col items-center gap-6 font-sans text-base"
    >
      <h1 className="font-serif mb-3 text-xl">Update Product</h1>
      <div className="flex gap-6">
        <div className="flex flex-col gap-0.5">
          <label htmlFor="product brand">Product Brand</label>
          <input
            type="text"
            value={productBrand}
            placeholder={productBrand}
            onChange={(e) => setProductBrand(e.target.value)}
            className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="product price">Product Price</label>
          <input
            type="number"
            value={productPrice}
            placeholder={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-0.5 w-full">
        <label htmlFor="product name">Product Name</label>
        <input
          type="text"
          value={productName}
          placeholder={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
        />
      </div>

      <div className="flex flex-col gap-0.5 w-full">
        <label htmlFor="product description">Product Description</label>
        <textarea
          type="text"
          value={productDescription}
          placeholder={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="w-full h-[150px] px-3 py-2 rounded-lg outline-[#9CA3AF] resize-none"
        />
      </div>

      <div className="flex gap-6 items-center justify-center w-full">
        <label htmlFor="skin type">Product Skin Type</label>
        <input
          type="text"
          value={productSkinType}
          placeholder={productSkinType}
          onChange={(e) => setProductSkinType(e.target.value)}
          className="px-3 py-2 rounded-lg outline-[#9CA3AF]"
        />
      </div>
      <button
        type="submit"
        className="px-8 py-2 mt-3 rounded-lg font-sans text-base text-[#FFF] bg-[#BF4C9A] flex justify-center items-center"
      >
        Update Product
      </button>
    </form>
  );
}
