import { useEffect, useState } from "react";
import CreateProduct from "../components/Products/CreateProduct";
import DeleteProduct from "../components/Products/DeleteProduct";
import UpdateProduct from "../components/Products/UpdateProduct";
import { useProductContext } from "../context/ProductContext";

import { RxCross2 } from "react-icons/rx";

export default function Admin() {
  const { allProducts } = useProductContext();
  // console.log("products in Admin component: ", allProducts);
  const { getAllProducts } = useProductContext();

  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [productToUpdate, setProductToUpdate] = useState(null);

  function openCreateProduct() {
    setShowCreateProduct(true);
  }

  function closeCreateProduct() {
    setShowCreateProduct(false);
  }

  function openDeleteProduct(product) {
    // console.log("product in openDeleteProduct: ", product);
    setProductToDelete(product);
    setShowDeleteProduct(true);
  }

  function closeDeleteProduct() {
    setProductToDelete(null);
    setShowDeleteProduct(false);
  }

  function openUpdateProduct(product) {
    // console.log("product in openUpdateProduct: ", product);
    setProductToUpdate(product);
    setShowUpdateProduct(true);
  }

  function closeUpdateProduct() {
    setProductToUpdate(null);
    setShowUpdateProduct(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto ">
      <h1 className="font-serif text-[40px] text-center mb-12 mt-8">
        Welcome, Admin!
      </h1>
      <button
        className="px-8 py-2 w-[300px] rounded-lg font-sans text-base text-[#FFF] bg-[#BF4C9A] flex justify-center items-center self-center mb-14"
        onClick={openCreateProduct}
      >
        Create New Product
      </button>

      {productToUpdate && (
        <div className="max-w-[1440px] mx-auto fixed top-[20%] w-full bg-[rgba(255,255,255,0.05)] flex justify-center items-between z-50">
          <div className="flex gap-36 px-20 py-16 w-[60%] h-[740px] bg-gradient-to-br from-white via-[#EFEFEF] to-gray-200 rounded-lg">
            <RxCross2
              onClick={closeUpdateProduct}
              className="bg-[#FFF] w-[40px] h-[40px] rounded-[50%] p-0.5 cursor-pointer hover:bg-[#BF4C9A] hover:text-[#FFF]"
              text="Update Product"
            />
            <UpdateProduct
              product={productToUpdate}
              closeFunction={closeUpdateProduct}
            />
          </div>
        </div>
      )}

      {productToDelete && (
        <div className="max-w-[1440px] mx-auto fixed top-[25%] w-full bg-[rgba(255,255,255,0.05)] flex justify-center items-center z-50">
          <div className="flex justify-evenly p-16 w-[50%] h-[400px] bg-gradient-to-br from-white via-[#EFEFEF] to-gray-200 rounded-lg">
            <RxCross2
              onClick={closeDeleteProduct}
              className="bg-[#FFF] w-[40px] h-[40px] rounded-[50%] p-0.5 cursor-pointer hover:bg-[#BF4C9A] hover:text-[#FFF]"
            />
            <DeleteProduct
              product={productToDelete}
              closeFunction={closeDeleteProduct}
            />
          </div>
        </div>
      )}

      <div className="flex  ">
        <ul className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 mx-16 gap-8 font-sans text-base mb-20">
          {allProducts.map((product) => {
            return (
              <>
                <li
                  key={product.id}
                  className="relative px-3 py-3 border border-[#ccc] rounded-lg"
                >
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col p-2">
                    <h2 className="font-sans text-xl px-2 text-[#262626]">
                      {product.brand}
                    </h2>
                    <p className="font-sans text-sm px-2 truncate">
                      {product.name}
                    </p>
                    {/* <p>{product.price}</p> */}
                    {/* <p>{product.description}</p> */}
                    <div className="flex justify-between items-center px-2 relative">
                      <button
                        className="w-[40%] flex justify-center items-center font-sans lg:text-sm border border-[#262626] gap-2 px-8 py-2 rounded-lg mt-2.5 hover:text-[#FFF] hover:bg-[#BF4C9A] hover:border-none hover:transition ease-in-out"
                        onClick={() => openUpdateProduct(product)}
                      >
                        Update
                      </button>
                      <button
                        className="w-[40%] flex justify-center items-center font-sans lg:text-sm border border-[#262626] gap-2 px-8 py-2 rounded-lg mt-2.5 hover:text-[#FFF] hover:bg-[#BF4C9A] hover:border-none hover:transition ease-in-out"
                        onClick={() => openDeleteProduct(product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
        {showCreateProduct ? (
          <div className="max-w-[1440px] mx-auto absolute top-[25%] w-full bg-[rgba(255,255,255,0.05)] flex justify-center items-center z-50">
            <div className="flex justify-evenly p-16 w-[60%] h-[700px] bg-gradient-to-br from-white via-[#EFEFEF] to-gray-200 rounded-lg">
              <RxCross2
                onClick={closeCreateProduct}
                className="bg-[#FFF] w-[40px] h-[40px] rounded-[50%] p-0.5 cursor-pointer hover:bg-[#BF4C9A] hover:text-[#FFF]"
              />
              <CreateProduct closeFunction={closeCreateProduct} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
