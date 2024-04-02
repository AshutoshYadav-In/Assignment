import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const PagesSlice = createSlice({
    name: "pages",
    initialState,
    reducers: {
        incrementDecrement(state, action) {
            const operationType = action.payload;
            if (operationType === "increment") {
                state = Math.max(state + 1, 1);
            } else if (operationType === "decrement") {
                state = Math.max(state - 1, 1); 
            }
            return state;
        }
    }
});

export const { incrementDecrement } = PagesSlice.actions;
export default PagesSlice.reducer;
