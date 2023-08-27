import { createSlice } from "@reduxjs/toolkit";

const allMovie=createSlice({
    name:"movie",
    initialState:[],
    reducers:{
        addMoviefromDb:(store,action)=>{
            store.push(action.payload)
        }
    }
})

export const {addMoviefromDb}=allMovie.actions
export default allMovie.reducer