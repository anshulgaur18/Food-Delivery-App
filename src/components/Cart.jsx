import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  

  const dispatch = useDispatch();

  const handleClearCart = ()=>{
    dispatch(clearCart());
  }

  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button className="bg-red-600 p-2 m-5" onClick={() => handleClearCart()}>
        Clear Cart
      </button>

      <div className="flex">
     {
        cartItems.map((item)=>{
            return(
            
            <FoodItems key={item?.card?.info?.id} {...item?.card?.info} />
            )
        })
     }
           
        
      </div>
    </div>
  );
};

export default Cart;
