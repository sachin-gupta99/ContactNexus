import { combineReducers } from "@reduxjs/toolkit";

import toastReducer from "./toast";
import userReducer from "./user";

const rootReducer = combineReducers({
  toast: toastReducer,
  user: userReducer,
});

export default rootReducer;
