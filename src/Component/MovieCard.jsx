import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addWishlist } from "./helper/Store/Slice/wishlistSlice";

const MovieCard = ({ movie }) => {
  const { title, posterImg, releaseYear, _id,genres,duration } = movie;
  const dispatch=useDispatch()
  return (
    <div className="w-[300px] h-[400px] md:w-[250px] md:h-[400px] flex flex-col p-2 m-2 border border-green-500 rounded-md shadow-xl">
      <Link className=" h-[65%] " to={`movie/${_id}`}>
        <img
          src={posterImg}
          alt="poster"
          className="w-full border h-full rounded-md shadow-lg   "
        />
      </Link>
      <Link to={`movie/${_id}`}>
        <p className="w-full font-bold text-xl text-center mt-2">
          {title} <span className="font-normal">({releaseYear})</span>
        </p>

      </Link>
      <div className="flex justify-between font-semibold px-2 bg-green-400 my-1">
          <h1>{genres}</h1>
          <h1>{duration}</h1>

      </div>
      
      <p className="w-full flex justify-between px-4">
        <span>⭐ 8.6</span>
        <span>
          <i className="fa-regular fa-star text-blue-600"></i>
        </span>
      </p>
      <button
        onClick={() => {

          dispatch(addWishlist(movie));
          alert(title +" is added to wishlist sucessfully")
        }}
        className="w-full mt-2 bg-green-200 font-bold text-blue-600">
        WishList <i className=" ml-2 fa-solid fa-plus"></i>
      </button>
      <button className="w-full mt-1">
        <i className="fa-solid fa-play mr-2"></i>Trailer
      </button>
    </div>
  );
};

export default MovieCard;
