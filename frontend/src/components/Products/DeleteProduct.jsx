import { useProductContext } from "../../context/ProductContext";

export default function DeleteProduct({ product, closeFunction }) {
  // console.log("product in deleteProduct component: ", product);

  const { deleteProduct } = useProductContext();
  const id = product.id;

  // console.log("id in deleteProduct component: ", id);

  const deleteId = Number(id);

  const handleDeleteProduct = (input) => {
    deleteProduct(input);
    closeFunction();
  };

  return (
    <div className="flex flex-col px-8 py-8 items-center gap-16 font-sans text-base">
<div className="w=full gap-3">
  <h1 className="font-serif text-xl text-center">Are you sure you want to delete</h1> 
    <h1 className="font-serif text-xl text-center">{product.brand} {product.name}?</h1>
</div>
      

      <div className="flex gap-16 ">

        <button className="font-sans py-2 px-4 rounded border border-[#333]" onClick={() => closeFunction()}>
        Cancel
      </button>
       <button
      onClick={() => handleDeleteProduct(deleteId)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 font-sans rounded"
    >

      Delete
    </button>
    </div>
      </div>
      
   
  );
}
