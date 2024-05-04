import { useState } from "react";
import { useProductContext } from "../../context/ProductContext";

export default function CreateProduct({ closeFunction }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0.0);
  const [productDescription, setProductDescription] = useState("");
  const [productSkinType, setProductSkinType] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productImage, setProductImage] = useState("");
  const [targetRange, setTargetRange] = useState("");
  const [productSize, setProductSize] = useState(0);

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
    formData.append("target", targetRange);
    formData.append("size", productSize); 

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
      </div>

      <div className="w-full flex gap-6">
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
        <div className="w-full flex flex-col gap-0.5">
          <label htmlFor="skin type">Product Skin Type</label>
          <select
            value={productSkinType}
            onChange={(e) => setProductSkinType(e.target.value)}
            required
            className="px-3 py-3 rounded-lg text-[#9CA3AF] "
          >
            <option value="">Select Skin Type</option>
            <option value="oily">Oily</option>
            <option value="dry">Dry</option>
            <option value="normal">Normal</option>
            <option value="combination">Combination</option>
            <option value="sensitive">Sensitive</option>
            <option value="uncertain">Uncertain</option>
            <option value="mature">Mature</option>
            <option value="acne">Acne</option>
          </select>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-full flex flex-col gap-0.5">
          <label htmlFor="target range">Target Range</label>
          <select
            value={targetRange}
            onChange={(e) => setTargetRange(e.target.value)}
            required
            className="px-3 py-3 rounded-lg text-[#9CA3AF] w-full"
          >
            <option value="">Select Target Range</option>
            <option value="reduces_irregularities">
              Reduce Irregularities
            </option>
            <option value="oily_skin">Oily Skin</option>
            <option value="ph_balance">PH Balance</option>
            <option value="dry_skin">Dry Skin</option>
            <option value="microbiome_balances">Microbiome Balance</option>
            <option value="skin_irritation">Skin Irritation</option>
            <option value="acne">Acne</option>
            <option value="texture_irregularities">
              Texture Irregularities
            </option>
            <option value="dullness">Dullness</option>
            <option value="visible_shine">Visible Shine</option>
            <option value="congestion">Congestion</option>
            <option value="skin_texture">Skin Texture</option>
            <option value="aging">Aging</option>
            <option value="hydration">Hydration</option>
            <option value="moisture_balance">Moisture Balance</option>
            <option value="skin_barrier">Skin Barrier</option>
            <option value="dark_spots">Dark Spots</option>
            <option value="blemish_skin">Blemish Skin</option>
            <option value="brightens">Brightens</option>
            <option value="supports">Supports</option>
            <option value="exfoliating">Exfoliating</option>
            <option value="dark_spot_correcting">Dark Spot Correcting</option>
            <option value="hyperpigmentation">Hyperpigmentation</option>
            <option value="skin_tone">Skin Tone</option>
          </select>
        </div>

        <div className="w-[40%] flex flex-col gap-0.5">
          <label htmlFor="product size">Product Size (ml)</label>
          <input
            type="number"
            value={productSize}
            placeholder="Product Size"
            onChange={(e) => setProductSize(e.target.value)}
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
