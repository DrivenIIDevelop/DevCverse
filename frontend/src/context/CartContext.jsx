import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

export const CartContext = createContext({
    allItems: null,
    getAllCartItems: () => {},

});

export const CartContextProvider = ({ children }) => {
  
  const [allItems, setAllItems] = useState(null);
  const [error, setError] = useState(null);

  const getAllCartItems = async (user_id) => {
    console.log("user_id in getAllCartItems function: ", user_id);
    console.log("in the getAllCartItems function~~~~")
    try {
      const response = await fetch(`http://localhost:8000/cart/${user_id}`);
      console.log("response in getAllCartItems function: ", response);
      const data = await response.json();
      console.log("data in getAllCartItems function: ", data);
      setAllItems(data);
    } catch (error) {
      setError(error);
      console.log("error in getAllCartItems: ", error);
    }
  };

  useEffect(() => {
    // console.log("in the useEffect in CartContextProvider: ");
    getAllCartItems();
  }, []);

//   console.log("allItems in CartContextProvider: ", allItems);
//   console.log("getAllCartItems in CartContextProvider: ", getAllCartItems);
  return (
    <CartContext.Provider value={{  allItems, getAllCartItems, }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
