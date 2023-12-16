import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
    name: "cartFakeFavData",
    initialState: [],
    reducers: {
        addToFav(state, action) {
            state.push(action.payload)
            console.log(state)
        },
        removeFromFav(state, action) {
            const idToRemove = action.payload.id;
            return state.filter((item) => item.id !== idToRemove);  // This should be updated to use Immer
        }
    }
})

export const { addToFav, removeFromFav } = FavouriteSlice.actions
export default FavouriteSlice.reducer