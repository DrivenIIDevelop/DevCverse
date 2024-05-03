import { useState } from "react";

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCartContext } from "../../context/CartContext";

export default function CartItemCard({ user, item }) {
  //   console.log("item in CartItemCard component: ", item);

  const [productQuantity, setProductQuantity] = useState(item.product_quantity);
  const { updateCartItem, getAllCartItems, deleteCartItem } = useCartContext();

  async function handleDecreaseItem() {
    let newQuantity = productQuantity - 1;
    if(newQuantity <= 0){
      newQuantity = 1;
    }
    await updateCartItem(item.id, item.product_id, newQuantity);
    setProductQuantity(newQuantity);
    getAllCartItems(user.User.id);
  }
  async function handleIncreaseItem() {
    const newQuantity = productQuantity + 1;
    await updateCartItem(item.id, item.product_id, newQuantity);
    setProductQuantity(newQuantity);
    getAllCartItems(user.User.id);
  }

  async function handleDeleteCartItem() {
    await deleteCartItem(item.id);
    getAllCartItems(user.User.id);
  }

  return (
    <li className="flex gap-2 border-b-2 border-b-[#E6E6E6] pb-2">
      <img
        src={item.product_image}
        alt="item image"
        className="w-[96px] h-[96px] rounded-lg object-cover"
      />
      <div className="flex flex-col w-[60%] justify-between">
        <div className="flex flex-col">
          <p>{item.product_brand}</p>
          <p className="font-sans text-sm truncate">{item.product_name}</p>
        </div>

        <div>
          <span className="flex gap-3 border border-[#E6E6E6] rounded-lg p-1 justify-center items-center text-center w-[30%] bg-[#FFF]">
            <FaMinus onClick={handleDecreaseItem} />
            <div className="flex justify-end w-[10px]">{productQuantity}</div>
            <FaPlus onClick={handleIncreaseItem} />
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center font-serif text-base text=[#333]">
        <p>$ {(item.product_price * productQuantity).toFixed(2)}</p>
        <FaRegTrashAlt onClick={handleDeleteCartItem} />
      </div>
    </li>
  );
}
