import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Slice/movieSlice";
import masterMovieData from "./Slice/masterMovieData";
import wishlistSlice from "./Slice/wishlistSlice";



const store=configureStore({
    reducer:{
        movie:movieSlice,
        masterData:masterMovieData,
        wishlist:wishlistSlice
    }
})
export default store