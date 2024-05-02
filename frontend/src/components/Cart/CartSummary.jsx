import { useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import CartItemCard from "./CartItemCard";
import { useUserContext } from "../../context/UserContext";


export default function CartSummary( { user }) {

  const { allItems, getAllCartItems } = useCartContext();

  console.log("allItems in CartSummary: ", allItems);

  useEffect(() => {
    getAllCartItems(user.User.id);
  }, [])

  if (!Array.isArray(allItems)) {
    return (
      <div>Loading...</div>
    )
  }

  if (allItems.length === 0) {
    return (
      <div>Please add items to your cart.</div>
    )
  }


  return (
    <div>
     <ul className="flex flex-col gap-4">
     {allItems.map((item) => (
        <CartItemCard key={item.id} user={user} item={item} />
      ))}
     </ul>
    </div>
  )
}
