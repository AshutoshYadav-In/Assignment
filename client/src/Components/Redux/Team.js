import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team : "",
  members: []
};
const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers:{
    teamname(state,action){
state.team = action.payload
    },
    addmembers(state,action){
      const existingMember = state.members.find(member => member._id === action.payload._id);
      if (existingMember) {
        // If member already exists, remove them
        state.members = state.members.filter(member => member._id !== action.payload._id);
      } else {
        // Otherwise, add the member
        if (!state.members.some(member => member.domain === action.payload.domain)) {
          state.members.push(action.payload);
        }
      }
    }
  }
});
export const {teamname,addmembers} = teamSlice.actions;
export default teamSlice.reducer;
