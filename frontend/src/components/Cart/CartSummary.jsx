import { useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import CartItemCard from "./CartItemCard";

export default function CartSummary({ user }) {
  const { allItems, getAllCartItems } = useCartContext();

  // console.log("allItems in CartSummary: ", allItems);

  useEffect(() => {
    getAllCartItems(user.User.id);
  }, []);

  if (!Array.isArray(allItems)) {
    return <div>Loading...</div>;
  }

  if (allItems.length === 0) {
    return <div>Please add items to your cart.</div>;
  }

  const totalPrice = allItems.reduce((acc, item) => {
    return acc + item.product_price * item.product_quantity;
  }, 0);

  return (
    <div
      className="w-full h-full px-[41px] pt-[125px]"
      style={{
        background: "linear-gradient(156deg, #FCFCFC 0%, #EFEFEF 65.53%)",
      }}
    >
      <h1 className="font-serif text-xl text-[#262626] mb-6">Order Summary</h1>
      <ul className="flex flex-col gap-4 mb-14 max-h-[70%] overflow-y-auto hide-scrollbar font-sans text-base text-[#333]">
        {allItems.map((item) => (
          <CartItemCard key={item.id} user={user} item={item} />
        ))}
      </ul>

      <div className="flex flex-col font-sans text-xl gap-3">
        <div className="flex  justify-between">
          <p>Subtotal</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>

        <div className="flex  justify-between">
          <p>Estimated Shipping</p>
          <p>$ {7.0}</p>
        </div>

        <div className="flex  justify-between">
          <p>Estimated Tax</p>
          <p>${(totalPrice * 0.1).toFixed(2)}</p>
        </div>

        <hr className="border-[#333] my-4" />

        <div className="flex  justify-between">
          <p>Estimated Total</p>
          <p>${(totalPrice + 7 + totalPrice * 0.1).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
