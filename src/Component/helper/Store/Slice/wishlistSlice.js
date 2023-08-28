import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addWishlist: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const { addWishlist } = wishlist.actions;
export default wishlist.reducer;
