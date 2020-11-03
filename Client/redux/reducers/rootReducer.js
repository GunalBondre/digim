import { combineReducers } from "redux";
import { authentication } from "./auth.reducer";
import { alert } from "./alert.reducer";
import { registration } from "./register.reducer";

const rootReducer = combineReducers({
  authentication,
  alert,
  registration,
});

export default rootReducer;
