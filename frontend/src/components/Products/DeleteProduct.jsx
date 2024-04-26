import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";


export default function DeleteProduct() {

    const { deleteProduct } = useProductContext();
    const { id } = useParams();

    console.log("id in deleteProduct component: ", id);

    const deleteId = Number(id)


    const handleDeleteProduct = (input) => {
        deleteProduct(input);
    }


  return (
    
    <button onClick={() => handleDeleteProduct(deleteId)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> Delete </button>
  )
}
