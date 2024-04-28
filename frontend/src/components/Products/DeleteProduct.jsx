import { useProductContext } from "../../context/ProductContext";

export default function DeleteProduct({ product, closeFunction }) {
  // console.log("product in deleteProduct component: ", product);

  const { deleteProduct } = useProductContext();
  const id = product.id;

  console.log("id in deleteProduct component: ", id);

  const deleteId = Number(id);

  const handleDeleteProduct = (input) => {
    deleteProduct(input);
    closeFunction();
  };

  return (
    <button
      onClick={() => handleDeleteProduct(deleteId)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      {" "}
      Delete{" "}
    </button>
  );
}
