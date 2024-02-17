import React from "react";

import "../App.css";
import { image_cdn_url } from "./Constants";

const RestaurantCard = ({ name,locality,avgRating,cloudinaryImageId }) => {
    
  return (
    <div className=" p-2 w-64  my-4 shadow-md bg-slate-100 rounded-lg">
      <img className="h-56 w-64 rounded-md"
        src={image_cdn_url + cloudinaryImageId}
        alt="ddd"
      />
      <h3 className="font-semibold text-xl">{name}</h3>
      <h3>{locality}</h3>
      <h3>Rating { avgRating}</h3>
    </div>
  );
};

export default RestaurantCard;
