import { createContext, useState, useContext } from "react";


export const ProductContext = createContext({
  allProducts: [],
  singleProduct: null,
  getAllProducts: () => {},
  getSingleProduct: () => {},
  createProduct: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
  error: null,
});

export const ProductContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("data in getAllProducts: ", data);
      setAllProducts(data);
    } catch (error) {
      setError(error);
      console.log("error in getAllProducts: ", error);
    }
  };

  const getSingleProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/products/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("data in getSingleProduct: ", data);
      setSingleProduct(data);
    } catch (error) {
      setError(error);
      console.log("error in getSingleProduct: ", error);
    }
  };

  const createProduct = async (formData) => {
    try {
      const response = await fetch('http://localhost:8000/products/create-products', {
        method: 'POST',
        body: formData, 
      });
      console.log("response in createProduct: ", response);
      if (response.ok) {
        const productResponse = await response.json();
        console.log("Product created successfully: ", productResponse);
        getAllProducts();
        return productResponse;
      } else {
        const errorData = await response.json();
        console.log("Failed to create product: ", errorData);
        setError(new Error("Failed to create product"));
      }
    } catch (error) {
      setError(error);
      console.log("error in createProduct: ", error);
    }
  };

  const updateProduct = async (product) => { 
    try {
      const response = await fetch(`http://localhost:8000/products/update/${product.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      console.log("response in updateProduct: ", response);
      getAllProducts();
    } catch (error) {
      setError(error);
      console.log("error in updateProduct: ", error);
    }
  };

  const deleteProduct = async (id) => { 
    try {
      const response = await fetch(`http://localhost:8000/products/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("response in deleteProduct: ", response);
      getAllProducts();
    } catch (error) {
      setError(error);
      console.log("error in deleteProduct: ", error);
    }
  };

  // console.log("providing context: ", allProducts, singleProduct, error, getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct)

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        singleProduct,
        getAllProducts,
        getSingleProduct,
        createProduct,
        updateProduct,
        deleteProduct,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
