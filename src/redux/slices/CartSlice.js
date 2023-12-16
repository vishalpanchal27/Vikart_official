const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
    name: "favourite",
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
            console.log(state)
        },
        remove(state, action) {
            const idToRemove = action.payload.id;
            return state.filter((item) => item.id !== idToRemove);
        }
    }
})

export const { add, remove } = CartSlice.actions
export default CartSlice.reducer