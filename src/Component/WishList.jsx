import React from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import SideNavbar from "./SideNavbar";
import { useSelector } from "react-redux";

const WishList = () => {
    const wishlist=useSelector(store=>store.wishlist)
    console.log(wishlist)
  return (
    <div className="w-screen h-screen">
    
      <Navbar />
      <h1>My wishList {wishlist.length}</h1>
      {

      }
    </div>
  );
};

export default WishList;
