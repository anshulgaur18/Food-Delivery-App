import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-slate-50 shadow-xl">
      <Link to="/">
        <img
          className="h-20 p-2 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Ever_Food_Review_Show.jpg/375px-Best_Ever_Food_Review_Show.jpg"
          alt="App logo"
        />
      </Link>

      <div className="header_items">
        <ul className="flex py-6 mr-20">
          <li className="font-semibold pr-16 flex flex-row justify-center items-center">
            <span className="p-1">
              <CiSearch />
            </span>
            <span>
              <Link >Search</Link>
            </span>
          </li>

          <li className="font-semibold pr-16 flex flex-row justify-center items-center">
            <span className="p-1">
              <CiDiscount1 />
            </span>
            <span>
              <Link to={"./offers"}>Offers</Link>
            </span>
          </li>
          <li className="font-semibold pr-16 flex flex-row justify-center items-center">
            <span className="p-1">
              <IoIosHelpBuoy />
            </span>
            <span>
              <Link>Help</Link>
            </span>
          </li>
          <li className="font-semibold pr-16 flex flex-row justify-center items-center">
            <span className="p-1">
              <IoPersonOutline />
            </span>
            <span>
              <Link>Sign In</Link>
            </span>
          </li>
          <li className="font-semibold pr-16 flex flex-row justify-center items-center">
            <span className="p-1">
              <CiShoppingCart />
            </span>
            <span>
              <Link to={"./cart"}>Cart {cartItems.length}</Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
