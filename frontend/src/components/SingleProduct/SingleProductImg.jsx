// import { useState } from "react";
// import { img1, img2, img3, img4, img5, img6, img7 } from "./singleProductImage";


export default function SingleProductImg({ product }) {
  // console.log("product in SingleProductImg: ", product);
  // const [currentImage, setCurrentImage] = useState(product.image_url);


  // function handleImageChange(image) {
  //   setCurrentImage(product.image_url[image]);
  // }

  return (
    <>

      <div className="flex gap-28 pl-14">
        <div
          className="flex flex-col gap-3 w-[500px]"
          style={{ height: "750px" }}
        >
          <div className="w-full h-full">
            <img
              // src={currentImage}
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full grid grid-cols-7 gap-5 ">
            <img
              src={product.image_url}
              alt="image 1"
              className="w-[60px] aspect-square rounded-lg"
              // onClick={() => handleImageChange(0)}
            />
            {/* <img
              src={img2}
              alt="image 2"
              className="w-[60px] aspect-square rounded-lg"
              onClick={() => handleImageChange(1)}
            />
            <img
              src={img3}
              alt="image 3"
              className="w-[60px] aspect-square rounded-lg"
              onClick={() => handleImageChange(2)}
            />
            <img
              src={img4}
              alt="image 4"
              className="w-[60px] aspect-square rounded-lg"
              onClick={() => handleImageChange(3)}
            />
            <img
              src={img5}
              alt="image 5"
              className="w-[60px] aspect-square rounded-lg"
              onClick={() => handleImageChange(4)}
            />
            <img
              src={img6}
              alt="image 6"
              className="w-[60px] aspect-square rounded-lg"
              onClick={() => handleImageChange(5)}
            />
            <img
              src={img7}
              alt="image 7"
              className="w-[60px] aspect-square rounded-lg"
              onClick={() => handleImageChange(6)}
            /> */}
          </div>
        </div>

      </div>
    </>
  );
}
