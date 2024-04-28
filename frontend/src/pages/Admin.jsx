import { useEffect, useState } from "react";
import CreateProduct from "../components/Products/CreateProduct";
import DeleteProduct from "../components/Products/DeleteProduct";
import UpdateProduct from "../components/Products/UpdateProduct";
import { useProductContext } from "../context/ProductContext";

import { RxCross2 } from "react-icons/rx";

const productList = [
  {
  id: 1,
  brand: "Anua",
  name: "Heartleaf Qurecetinol - Pore Deep Cleansing Foam", 
  price: 16.23,
  review: 4.9,
  reviewCount: 127,
  image: "https://s3-alpha-sig.figma.com/img/52cb/1354/58f73ac859d25fb75cd61dd434902379?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HKMlVbWOtf4q753LAmyWSnH127FaygDCygxfiLB~O8FFHr23OwcdDYlKh5fSiYrNSsP85R1WkzyJnDrPXx2wJGVoBQBWSKhs2OR~bOghy6vIkc5IddRFkPARVYbcXD3MzNVfsgVI1EFFVoyIkqO5MYpawqGUiG3khZOFpk7hJTtj5vgsrlXaBdc4Ve3irKZYsK0Ba9Svtmhl2rfKSvwgyIhi5ChIBDqJouivOPrbnlfOrruBrxLLwMQ6d~F4dNU5AqSsy5u~RUq7dTherxbYeVpYfKFuEHqsJV8ln9l4nywdAe18W1dwzTgXCgG4cL9VpFiOIfCMgVHY124eXj~Jng__",
  badge: ["Clean", "Cruelty-Free"],
  like: false,
  },
]

const productArr = []

for (let i = 0; i < 8; i++) {
  productArr.push(productList[0])
}


export default function Admin() {
  const { allProducts } = useProductContext();
  // console.log("products in Admin component: ", allProducts);
  const { getAllProducts } = useProductContext();

  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);

  function openCreateProduct() {
    setShowCreateProduct(true);
  }

  function closeCreateProduct() {
    setShowCreateProduct(false);
  }

  function openDeleteProduct() {
    setShowDeleteProduct(true);
  }

  function closeDeleteProduct() {
    setShowDeleteProduct(false);
  }

  function openUpdateProduct() {
    setShowUpdateProduct(true);
  }

  function closeUpdateProduct() {
    setShowUpdateProduct(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-serif text-[40px] text-center mb-12 mt-8">Welcome, Admin!</h1>
        <button
          className="px-8 py-2 w-[300px] rounded-lg font-sans text-base text-[#FFF] bg-[#BF4C9A] flex justify-center items-center self-center mb-14" 
          onClick={openCreateProduct}
        >
          Create New Product
        </button>
        <div className="flex  ">
          <ul className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 mx-16 gap-8">
          {productArr.map((product) => {
            return (
              <>
                <li key={product._id} >
                  <img src={product.image} alt={product.name} className="rounded-lg"/>
                  <div className="flex flex-col">
                    <h2>{product.brand}</h2>
                    <h2>{product.name}</h2>
                    {/* <p>{product.price}</p> */}
                    {/* <p>{product.description}</p> */}
                    <div className="flex gap-1">
                      <button>Update</button>
                      <button>Delete</button>
                    </div>
                  </div>
                </li>
              </>
            );
          })}</ul>
        </div>
        {showCreateProduct ? (
          <div className="absolute pt-[8%] w-full bg-[rgba(255,255,255,0.4)] bg-[#FFF] flex justify-center items-center z-50">
            <div className="flex gap-8 justify-evenly p-16 w-[60%] h-[550px] bg-gradient-to-br from-white via-[#EFEFEF] to-gray-200 rounded-lg">

            <RxCross2 onClick={closeCreateProduct} className="bg-[#FFF] w-[40px] h-[40px] rounded-[50%] p-0.5"/>
            <CreateProduct />
            </div>
          </div>
        ) : null}
        {showDeleteProduct ? (
          <div>
            <DeleteProduct />
          </div>
        ) : null}
        {showUpdateProduct ? (
          <div>
            <UpdateProduct />
          </div>
        ) : null}
      </div>
    </>
  );
}
