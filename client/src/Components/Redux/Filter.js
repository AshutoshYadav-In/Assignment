import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    domain: "all",
    gender: "all",
    available: "both"
}

const filterSlice = createSlice({
name: "filter",
initialState,
reducers:{
filterOptions(state,action){
    Object.assign(state, action.payload);
}
}
})
export const { filterOptions } = filterSlice.actions;
export default filterSlice.reducer;