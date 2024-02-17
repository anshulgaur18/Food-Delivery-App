import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import "../App.css";
import { Link } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import { filteredData } from "../utils/helper";


const Body = () => {
 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2138156&lng=75.8647527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
   
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
   
    setIsLoading(false);
  }

  
 
  return (
    <>
     <div className="p-5 bg-gray-50 my-5 shadow-lg flex justify-center">
    <input
      type="text"
      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1 p-2 m-2"
      placeholder="Search"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
    <button
      className="p-2 m-2 w-24 bg-purple-900 font-bold text-white rounded-full hover:bg-red-500"
      onClick={() => {
        const data = filteredData(allRestaurants, search);

        setFilteredRestaurants(data);
      }}
    >
      Search
    </button>
  </div>
      {isLoading ? (
        <div className="flex flex-wrap justify-around px-14" >
          {Array(8).fill("").map((e,index) => (<ShimmerCard key={index}/>))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-around px-14">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link
              className="p-4"
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
