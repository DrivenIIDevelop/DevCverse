import { createContext, useState, useContext } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

export const ProductContext = createContext({
  getAllProducts: () => {},
  getSingleProduct: () => {},
  error: null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
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
      setProducts(data);
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

  return (
    <ProductContext.Provider
      value={{
        products,
        singleProduct,
        getAllProducts,
        getSingleProduct,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
