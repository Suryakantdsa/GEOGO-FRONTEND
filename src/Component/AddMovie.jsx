import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useCloudinaryUpload } from "./helper/useCloudinaryUpload";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const AddMovie = () => {
    const navigate = useNavigate()
    const [castName, getName] = useState("");
    const [isLoading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        genres: "",
        releaseYear: "",
        description: "",
        trailerLink: "",
        language: "",
        posterImg: "",
        duration: "",
        cast: [],
        director: "",
        writer: "",
    });
    // console.log(formData)
    const handleSubmit = async (e) => {
        console.log(formData)
        try {
            setLoading(true)
            const imageUrl = await useCloudinaryUpload(formData.posterImg);
            const response = await axios.post("https://movier-app.onrender.com/addmovie", {
                ...formData,
                posterImg: imageUrl,
            });
            console.log(response.data);
            // Reset the form data or redirect to another page
            alert("Movie data is added sucessfully")
            setLoading(false)
            navigate("/")

        } catch (error) {
            console.error("Error adding movie:", error);
            alert("Error adding movie:",error)
            setLoading(true)
        }
    };

    const handleAddCast = () => {
        if (castName) {
            setFormData((prevData) => ({
                ...prevData,
                cast: [...prevData.cast, castName],
            }));
            getName("");
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "posterImg") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: e.target.files[0],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center  h-screen">
                <div className="w-full sm:w-[500px] rounded-lg shadow-lg mt-0 h-[70%]">
                    <fieldset className=" p-4 m-2 border-2 border-green-400">
                        <legend className="text-2xl font-semibold">Add New Movie</legend>
                        <div className="flex justify-between">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full p-2 mb-3 mr-2 rounded-md border focus:outline-none focus:border-green-400"
                            />
                            <input
                                type="text"
                                name="genres"
                                placeholder="genres"
                                value={formData.genres}
                                onChange={handleChange}
                                className="w-full p-2 mb-3 rounded-md border focus:outline-none focus:border-green-400"
                            />
                        </div>
                        <div className="flex justify-between">
                            <input
                                type="number"
                                name="releaseYear"
                                placeholder="releaseYear"
                                value={formData.releaseYear}
                                onChange={handleChange}
                                className="w-full p-2 mb-3 mr-2 rounded-md border focus:outline-none focus:border-green-400"
                            />
                            <input
                                type="text"
                                name="director"
                                placeholder="director"
                                value={formData.director}
                                onChange={handleChange}
                                className="w-full p-2 mb-3 rounded-md border focus:outline-none focus:border-green-400"
                            />
                        </div>
                        <div className="flex justify-between">
                            <input
                                type="text"
                                name="writer"
                                placeholder="writer"
                                value={formData.writer}
                                onChange={handleChange}
                                className="w-full p-2 mb-3 mr-2 rounded-md border focus:outline-none focus:border-green-400"
                            />
                            <input
                                type="text"
                                name="duration"
                                placeholder="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                className="w-full p-2 mb-3 rounded-md border focus:outline-none focus:border-green-400"
                            />
                        </div>
                        <div className="flex justify-between">
                            <input
                                type="text"
                                name="language"
                                placeholder="Language"
                                value={formData.language}
                                onChange={handleChange}
                                className="w-full p-2 mb-3 mr-2 rounded-md border focus:outline-none focus:border-green-400"
                            />
                            <input
                                type="text"
                                name="trailerLink"
                                placeholder=" Paste trailer Link"
                                value={formData.trailerLink}
                                onChange={handleChange}
                                className="w-full p-2 mb-3 rounded-md border focus:outline-none focus:border-green-400"
                            />
                        </div>
                        <input
                            type="file"
                            name="posterImg"
                            //   value={formData.posterImg}
                            onChange={handleChange}
                            className="w-full p-2 mb-3 rounded-md border focus:outline-none focus:border-green-400"
                        />
                        <div className=" w-full font-bold ">
                            {formData?.cast.join(" , ")}
                        </div>
                        <div className="flex justify-center items-center mb-2">
                            <input
                                type="text"
                                name="cast"
                                placeholder="Cast name"
                                value={castName}
                                onChange={(e) => {
                                    getName(e.target.value);
                                }}
                                className="w-[80%] p-2 rounded-md border focus:outline-none focus:border-green-400"
                            />
                            <button
                                className="w-[5rem]  bg-green-600 hover:bg-green-700 text-white font-semibold p-2 "
                                onClick={() => handleAddCast()
                                }>
                                Add cast
                            </button>
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="description"
                                id="description"
                                cols="30"
                                rows="5"
                                onChange={handleChange}
                                placeholder="Write a short description...!"
                                className="w-full p-2 rounded-md border focus:outline-none focus:border-green-400"
                            />
                        </div>
                    </fieldset>
                    <button
                        onClick={() => handleSubmit()}
                        className="bg-green-600 hover:bg-green-700 ml-2 text-white font-semibold px-4 py-2 rounded-md focus:outline-none">
                        Add Movie
                    </button>
                    {
                        isLoading &&
                        <Loading/>
                    }
                </div>
            </div>
        </>
    );
};

export default AddMovie;
