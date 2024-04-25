import { useState } from "react";
import { useProductContext } from "../../context/ProductContext";


export default function CreateProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productSkinType, setProductSkinType] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productImage, setProductImage] = useState('');

  console.log("productName: ", productName);
  console.log("productPrice: ", productPrice);
  console.log("productDescription: ", productDescription);
  console.log("productSkinType: ", productSkinType);
  console.log("productBrand: ", productBrand);
  console.log("productImage: ", productImage);
  
  const { createProduct } = useProductContext();
  const { getAllProducts } = useProductContext();
  // const { allProducts } = useProductContext();
  // const { getSingleProduct } = useProductContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', productName);
    formData.append('price', productPrice);
    formData.append('description', productDescription);
    formData.append('skin_type', productSkinType);
    formData.append('brand', productBrand);
    formData.append('file', productImage); 
  
    try {
      const response = await createProduct(formData);
      await getAllProducts();
      if (response.ok) {
        const newProduct = await response.json();
        console.log("Product created: ", newProduct);
        // You can update UI or state as needed here

      } else {
        throw new Error(`Failed to create product: ${response.status}`);
      }
    } catch (error) {
      console.error('Error creating product: ', error);
    }
  };
  


  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input type="text" value={productName} placeholder="Product Name" onChange={(e) => setProductName(e.target.value)} required/>
      <input type="number" value={productPrice} placeholder="Product Price" onChange={(e) => setProductPrice(e.target.value)} required/>
      <input type="text" value={productDescription} placeholder="Product Description" onChange={(e) => setProductDescription(e.target.value)} required/>
      <input type="text" value={productSkinType} placeholder="Product Skin Type" onChange={(e) => setProductSkinType(e.target.value)} required/>
      <input type="text" value={productBrand} placeholder="Product Brand" onChange={(e) => setProductBrand(e.target.value)} required/>
      <input type="file" onChange={(e) => setProductImage(e.target.files[0])} required/>
      <button type="submit">Create Product</button>
    </form>
  );
}
