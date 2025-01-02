import React from "react";
import Image from "next/image";

const Card = ({ recommend }) => {
  const { name, price, image, _id } = recommend;

  return (
    <div
      key={_id}
      className="bg-[#F3F3F3] w-full h-full flex flex-col justify-between rounded-xl px-3 pt-3"
    >
      <div className="relative w-full h-56">
        <Image
          className="rounded-lg object-cover"
          src={image}
          alt={name}
          fill
        />
        <h4 className="absolute top-2 right-2 bg-black text-white text-[20px] font-medium mb-3 px-2 py-1">
          ${price}
        </h4>
      </div>
      <div className="p-4 flex flex-col justify-between items-center">
        <h2 className="text-[24px] font-semibold text-black">{name}</h2>
        <div className="flex justify-center mt-4">
          <button className="bg-[#E8E8E8] text-[#B58130] border-b-2 border-[#B58130] px-5 py-2 text-[16px] font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
