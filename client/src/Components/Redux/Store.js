import { configureStore } from "@reduxjs/toolkit";
import ToggleOptionsSlice from "./Appslices";
import PagesSlice from "./Pages";
import filterSlice from './Filter';
import teamSlice from './Team'
import searchSlice from './Search'
const store = configureStore({
  reducer: {
    toggle: ToggleOptionsSlice,
    pages: PagesSlice,
    filter: filterSlice,
    team:teamSlice,
    search : searchSlice
  },
});
export default store;
