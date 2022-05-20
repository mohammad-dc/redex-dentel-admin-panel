import { combineReducers } from "redux";
import * as authReducers from "./auth";

const reducers = combineReducers({
  auth: authReducers.authReducer,
  login: authReducers.loginReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
