import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleforfilter: false,
    toggleformaketeam : false,
    toggleforviewteam: false,
    toggleloading:false
};

const ToggleOptionsSlice = createSlice({
    name: "ToggleOptions",
    initialState,
    reducers: {
        toggleChange(state, action) {
            const toggleName = action.payload;
            state[toggleName] = !state[toggleName];
        }
    }
});

export const { toggleChange } = ToggleOptionsSlice.actions;
export default ToggleOptionsSlice.reducer;