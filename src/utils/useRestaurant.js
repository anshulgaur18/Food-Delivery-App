import { useState,useEffect } from "react";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState({});
    

    
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2138156&lng=75.8647527&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurant(json.data.cards);
    
  };
  return restaurant;
}

export default useRestaurant;