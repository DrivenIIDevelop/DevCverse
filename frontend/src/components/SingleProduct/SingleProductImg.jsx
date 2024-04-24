import { useState } from "react";
import { img1, img2, img3, img4, img5, img6, img7 } from "./singleProductImage";

const product = {
  name: "Glass Skin Water-Gel Moisturizer",
  price: 100,
  description: "Product Description",
  skin_type: "Normal",
  brand: "Peach & Lily",
  imageUrl: [img1, img2, img3, img4, img5, img6, img7],
};

export default function SingleProductImg() {
  const [currentImage, setCurrentImage] = useState(product.imageUrl[0]);

  function handleImageChange(image) {
    setCurrentImage(product.imageUrl[image]);
  }
  return (
    <>

      <div className="flex gap-28 px-14">
        <div
          className="flex flex-col gap-3 w-[500px]"
          style={{ height: "750px" }}
        >
          <div className="w-full h-full">
            <img
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full grid grid-cols-7 gap-5 ">
            <img
              src={img1}
              alt="image 1"
              className="w-[60px] aspect-square rounded-lg"
              onClick={() => handleImageChange(0)}
            />
            <img
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
            />
          </div>
        </div>

      </div>
    </>
  );
}
