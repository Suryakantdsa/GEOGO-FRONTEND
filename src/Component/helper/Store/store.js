import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Slice/movieSlice";



const store=configureStore({
    reducer:{
        movie:movieSlice
    }
})
export default store