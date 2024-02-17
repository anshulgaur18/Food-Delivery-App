import React from "react";
import { image_cdn_url } from "./Constants";

const FoodItems = ({ name,  imageId, defaultPrice,price }) => {
  console.log(name,  imageId, defaultPrice,price);
  return (
    <div className="p-2 w-64 mx-14 my-4 shadow-md bg-slate-100 rounded-lg">
      <img
        className="h-56 w-64 rounded-md"
        src={image_cdn_url + imageId}
        alt="ddd"
      />
      <h3 className="font-semibold text-xl">{name}</h3>
     
      <h3>Rupees {defaultPrice||price / 100}</h3>
    </div>
  );
};

export default FoodItems;
