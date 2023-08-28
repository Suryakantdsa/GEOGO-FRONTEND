import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesfromDb } from "./helper/Store/Slice/movieSlice";
import { addMasterFromDb } from "./helper/Store/Slice/masterMovieData";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Homepage = () => {
  // const [movieData, upadateMovie] = useState([])
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movie);
  // console.log(data)
  useEffect(() => {
    getMovieFromDB();
  }, []);

  const getMovieFromDB = async () => {
    try {
      const result = await fetch("https://movier-app.onrender.com/");
      const allData = await result.json();
      console.log(allData);
      // upadateMovie(allData)
      dispatch(addMoviesfromDb(allData));
      dispatch(addMasterFromDb(allData));
    } catch (error) {
      console.log("Something went wrong while data fetching");
    }
  };

  return (
    <div className=" flex flex-col items-center">
      <section id="filter-sort" className="px-2 py-2  flex justify-center">
        <div className="flex justify-start min-w-[200px] md:min-w-auto flex-wrap gap-1">
          <span className="bg-red-400 mr-4 font-bold px-2 rounded-md">All</span>
          <span className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Horror
          </span>
          <span className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Action
          </span>
          <span className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Drama
          </span>
          <span className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Romance
          </span>
          <span className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Comedy
          </span>
          <span className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Thriller
          </span>
          <span className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Science Friction
          </span>
          <span className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Documentary
          </span>
        </div>
        <div className="flex items-center h-[2rem]">
          <label htmlFor="sort" className="font-bold text-blue-600 text-sm">
            SORT BY
          </label>
          <select name="sort" id="sort" className="border shadow-lg ml-2">
            <option value="4star">List the movies</option>
            <option value="4star">4⭐ & above</option>
            <option value="3star">3⭐ & above</option>
            <option value="2star">2⭐ & above</option>
            <option value="new">Newest first</option>
            <option value="new">Oldest first</option>
          </select>
        </div>
      </section>
      {movieData.length === 0 ? (
        <Loading />
      ) : (
        <section className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-auto">
          {movieData.map((movie) => {
            return <MovieCard movie={movie} key={movie?._id} />;
          })}
        </section>
      )}
    </div>
  );
};

export default Homepage;
