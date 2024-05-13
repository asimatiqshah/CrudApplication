import { combineReducers } from "@reduxjs/toolkit";
import crudSlice from "./crudSlice";

const rootReducer = combineReducers({
    crudSlice : crudSlice
})

export default rootReducer;