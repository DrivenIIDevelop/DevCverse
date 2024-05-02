import { useCartContext } from "../../context/CartContext";


export default function CartSummary() {

  const { allItems, getAllCartItems } = useCartContext();
  return (
    <div>
     Cart Summary
    </div>
  )
}
