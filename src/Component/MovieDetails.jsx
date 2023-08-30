import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTorecentlyview } from "./helper/Store/Slice/RecentlyviewSlice";

const MovieDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [MovieDetails, setMovieDetails] = useState({});
  const {
    title,
    writer,
    director,
    description,
    cast,
    trailerLink,
    duration,
    posterImg,
    language,
    genres,
    releaseYear,
  } = MovieDetails;
  useEffect(() => {
    getMovieDetails();
  }, []);
  const getMovieDetails = async () => {
    try {
      let result = await fetch(
        `https://movier-app.onrender.com/movie/${params.id}`
      );
      result = await result.json();
      setMovieDetails(result);
      dispatch(addTorecentlyview(result))
    } catch (error) {
      alert("Failed in fetching movie details..❗❗");
    }
  };
  const deleteMovie = async () => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this movie?"
      );
      if (confirmed) {
        let result = await fetch(
          `https://movier-app.onrender.com/movie/${params.id}`,
          {
            method: "Delete",
          }
        );
        result = await result.json();
        if (result) {
          alert("The Movie is deleted...👍 ✅");
          navigate("/");
        }
      }
    } catch (error) {
      alert("Failed to delete the movie ❗❗❗❗❗❗");
    }
  };

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="w-full h-[12%] items-center flex justify-between px-6">
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <ul className="flex list-disc px-8 py-1 ">
            <li className="mr-8">{releaseYear}</li>
            <li className="mr-8">{language}</li>
            <li className="mr-8">{genres}</li>
            <li className="">{duration}</li>
          </ul>
        </div>
        <div>
          <button className="bg-slate-800 border-2 border-green-600 rounded-xl text-white p-2 mr-1">
            Edit Movie ✏️
          </button>
          <button
            onClick={() => deleteMovie()}
            className="bg-slate-800 border-2 border-green-600 rounded-xl text-white  p-2">
            Delete Movie ❌
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse md:flex-row border shadow-2xl p-4 ">
        <img
          src={posterImg}
          alt="poster"
          className="rounded-md shadow-lg w-[300px] h-[300px] md:w-[25%] md:h-[400px] border border-orange-700 mx-4"
        />
        <div className="w-full md:w-[50%] h-[400px] border border-orange-700">
          <video
            className="w-full h-[400px]"
            src={trailerLink}
            controls></video>
        </div>
      </div>
      <div className="mt-8 p-4 w-full bg-white rounded-lg shadow-xl">
        <p className="text-lg font-semibold mb-2">Description:</p>
        <p className="mb-2">{description}</p>
        <p className="text-lg font-semibold mb-2">Director:</p>
        <p className="mb-2">{director}</p>
        <p className="text-lg font-semibold mb-2">Writer:</p>
        <p className="mb-2">{writer}</p>
        <p className="text-lg font-semibold mb-2">Cast:</p>
        <p className="mb-2">{cast}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
