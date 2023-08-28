import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesfromDb } from "./helper/Store/Slice/movieSlice";
import { addMasterFromDb } from "./helper/Store/Slice/masterMovieData";
import Loading from "./Loading";

const Homepage = () => {
  // const [movieData, upadateMovie] = useState([])
  const [LoadingOn, setOn] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movie);
  const masterData = useSelector((store) => store.masterData);
  // console.log(data)
  useEffect(() => {
    getMovieFromDB();
  }, []);

  const getMovieFromDB = async () => {
    try {
      setOn(true);
      const result = await fetch("https://movier-app.onrender.com/");
      const allData = await result.json();

      console.log(allData);
      // upadateMovie(allData)
      if (allData) {
        setOn(false);
        dispatch(addMoviesfromDb(allData));
        dispatch(addMasterFromDb(allData));
      }
    } catch (error) {
      console.log("Something went wrong while data fetching");
    }
  };
  const filterMovie = (genre) => {
    const lowerCaseGenre = genre.toLowerCase();

    if (lowerCaseGenre !== "all") {
      const result = masterData.filter(
        (data) => data.genres.toLowerCase() === lowerCaseGenre
      );
      dispatch(addMoviesfromDb(result));
    } else {
      dispatch(addMoviesfromDb(masterData));
    }
  };
  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    sortMovie(); 
  };
  const sortMovie=()=>{
        switch (selectedSort) {
          case "2014":
            const below= movieData.filter((movie) => movie.releaseYear <= 2014);
            dispatch(addMoviesfromDb(below));
            break;
          case "2015":
            const above= movieData.filter((movie) => movie.releaseYear >= 2015);
            dispatch(addMoviesfromDb(above));
            break;
          case "new":
            const newest= [...movieData].sort((a, b) =>a.releaseYear -b.releaseYear );
            dispatch(addMoviesfromDb(newest));
            break;
          case "old":
            const oldest= [...movieData].sort((a, b) => b.releaseYear-a.releaseYear  );
            dispatch(addMoviesfromDb(oldest));
            break;
          default:
            dispatch(addMoviesfromDb(masterData));
            break;
        }
  }


  return (
    <div className=" flex flex-col ">
      <section
        id="filter-sort"
        className="px-2 py-2  flex justify-between w-full">
        <div className="flex justify-start min-w-[200px] md:min-w-auto flex-wrap gap-1">
          <button
            onClick={() => filterMovie("all")}
            className="bg-red-400 mr-4 font-bold px-2 rounded-md">
            All
          </button>
          <button
            onClick={() => filterMovie("Horror")}
            className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Horror
          </button>
          <button
            onClick={() => filterMovie("Action")}
            className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Action
          </button>
          <button
            onClick={() => filterMovie("Drama")}
            className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Drama
          </button>
          <button
            onClick={() => filterMovie("Romance")}
            className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Romance
          </button>
          <button
            onClick={() => filterMovie("Comedy")}
            className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Comedy
          </button>
          <button
            onClick={() => filterMovie("Thriller")}
            className="bg-green-100 mr-4 font-bold px-2 rounded-md">
            Thriller
          </button>
        </div>
        <div className="flex items-center h-[2rem]">
          <label htmlFor="sort" className="font-bold text-blue-600 text-sm">
            SORT BY
          </label>
          <select
            name="sort"
            id="sort"
            value={selectedSort}
            onChange={handleSortChange}
            className="border shadow-lg ml-2">
            <option value="">List the movies</option>
            <option value="new">Newest first</option>
            <option value="old">Oldest first</option>
            <option value="2014">2015 year or below</option>
            <option value="2015">2015 year or above</option>
          </select>
        </div>
      </section>
      {LoadingOn && <Loading />}
      {movieData.length > 0 ? (
        <section className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-auto">
          {movieData?.map((movie) => {
            return <MovieCard movie={movie} key={movie?._id} />;
          })}
        </section>
      ) : (
        !LoadingOn && (
          <h1 className="text-4xl font-bold mt-2">
            No movie Record is found ..🫡🫠
          </h1>
        )
      )}
    </div>
  );
};

export default Homepage;
