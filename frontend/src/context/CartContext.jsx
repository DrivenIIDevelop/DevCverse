import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

export const CartContext = createContext({
    allItems: null,
    getAllCartItems: () => {},
    addCartItem: () => {},
    updateCartItem: () => {},

});

export const CartContextProvider = ({ children }) => {
  
  const [allItems, setAllItems] = useState(null);
  const [error, setError] = useState(null);

  const getAllCartItems = async (user_id) => {
    console.log("user_id in getAllCartItems function: ", user_id);
    console.log("in the getAllCartItems function~~~~")
    try {
      const response = await fetch(`http://localhost:8000/cart/user/${user_id}`);
      console.log("response in getAllCartItems function: ", response);
      const data = await response.json();
      console.log("data in getAllCartItems function: ", data);
      setAllItems(data);
    } catch (error) {
      setError(error);
      console.log("error in getAllCartItems: ", error);
    }
  };

  const addCartItem = async (user_id, product_id, quantity) => {
    try {
      const response = await fetch(`http://localhost:8000/cart/add-item/${product_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id, quantity }),
      });
      const data = await response.json();
      console.log("data in addCartItem function: ", data);
      getAllCartItems(user_id);
    } catch (error) {
      setError(error);
      console.log("error in addCartItem: ", error);
    }
  }

  const updateCartItem = async (cartItemId, productId, quantity) => {
    try {
      const response = await axios.put(`http://localhost:8000/cart/update/${productId}`, {
        cart_item_id: cartItemId,
        quantity: quantity
      });
  
      if (response.data.message === 'Product updated successfully') {
        // Update your state here
      }
    } catch (error) {
      console.error('Error updating cart item', error);
    }
  };
  

  useEffect(() => {
    // console.log("in the useEffect in CartContextProvider: ");
    getAllCartItems();
  }, []);

//   console.log("allItems in CartContextProvider: ", allItems);
//   console.log("getAllCartItems in CartContextProvider: ", getAllCartItems);
  return (
    <CartContext.Provider value={{  allItems, getAllCartItems, addCartItem, updateCartItem}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
