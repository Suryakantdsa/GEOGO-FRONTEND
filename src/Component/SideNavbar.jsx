import React from "react";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="hidden md:flex flex-col justify-between w-[250px] h-full bg-green-100 p-3">
      <ul>
        <li>
          <Link to={"/addmovie"}>
            <button className="p-3 bg-green-300 rounded-xl font-bold flex items-center  ">
              <span className="bi bi-plus-circle-dotted px-2 text-3xl font-bold"></span>
              <span className="px-2">Add Movie</span>
            </button>
          </Link>
        </li>
        <Link to={"/"}>
          <li className="w-full p-2 hover:bg-green-300 mt-4">
            <i className="fa-solid fa-house pr-2"></i>Home
          </li>
        </Link>
        <Link to={"/wishlist"}>
          <li className="w-full p-2 hover:bg-green-300">
            <span id="boot-icon" className="bi bi-bookmark-plus pr-2"></span>
            WishList
          </li>
        </Link>
        <li className="w-full p-2 hover:bg-green-300">
          <i className="fa-solid fa-eye pr-2"></i>Recently View
        </li>
      </ul>
      <div className="p-2 font-bold text-2xl bg-green-300 m-0">
        <i className="fa-solid fa-user pr-2"></i>
        Profile
      </div>
    </div>
  );
};

export default SideNavbar;
