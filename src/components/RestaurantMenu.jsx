import useRestaurant from "../utils/useRestaurant";
import { useParams } from "react-router-dom";
import { image_cdn_url } from "./Constants";
import "../App.css";
import { menu_cdn_url } from "./Constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  console.log(restaurant);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="flex justify-around mx-24">
        <div className="flex flex-col m-4 p-4 ">
          <img
            className="h-72 w-80"
            src={
              image_cdn_url + restaurant[0]?.card?.card?.info?.cloudinaryImageId
            }
            alt="dhabha"
          />

          <div className="m-2 ">
            <h1 className="font-bold text-2xl font-sans">
              {restaurant[0]?.card?.card?.info?.name}
            </h1>
            <h2 className="font-medium font-serif">
              Restaurant Id :{restaurant[0]?.card?.card?.info?.id}
            </h2>

            <h3 className="font-medium font-serif">
              {restaurant[0]?.card?.card?.info?.areaName}
            </h3>
            <h3 className="font-medium font-serif">
              {restaurant[0]?.card?.card?.info?.city}
            </h3>
            <h3 className="font-medium font-serif">
              {restaurant[0]?.card?.card?.info?.avgRating} Stars
            </h3>
            <h3 className="font-medium font-serif">
              {restaurant[0]?.card?.card?.info?.costForTwoMessage}
            </h3>
          </div>
        </div>
        <div className="m-4">
          <h1 className="text-2xl font-bold">Menu Items</h1>
          {(restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card?.categories)
            ? restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[1]?.itemCards?.map(
                (item) => {
                  return (
                    <div className="flex flex-wrap" key={item?.card?.info?.id}>
                      {console.log(item?.card?.info)}
                      <h1>
                        {item?.card?.info?.name} -
                        <button
                          className=" m-2 w-10 bg-purple-900 font-bold text-white rounded-md hover:bg-red-500"
                          onClick={() => handleAddItem(item)}
                        >
                          Add
                        </button>
                      </h1>
                    </div>
                  );
                }
              )
            : restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                (item) => {
                  return (
                    <div className="flex flex-wrap" key={item?.card?.info?.id}>
                      {console.log(item?.card?.info)}
                      <h1>
                        {item?.card?.info?.name} -
                        <button
                          className=" m-2 w-10 bg-purple-900 font-bold text-white rounded-md hover:bg-red-500"
                          onClick={() => handleAddItem(item)}
                        >
                          Add
                        </button>
                      </h1>
                    </div>
                  );
                }
              )}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
