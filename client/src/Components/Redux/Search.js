import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const searchSlice = createSlice({
 name: "Search",
 initialState,
 reducers:{
    search(state,action){
        return action.payload
    }
 }


})

export const {search} =  searchSlice.actions;
export default searchSlice.reducer;