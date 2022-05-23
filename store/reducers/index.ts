import { combineReducers } from "redux";
import * as authReducers from "./auth";
import * as patientsReducers from "./patients";
import * as doctorsReducers from "./doctor";
import * as citiesReducers from "./cities";
import * as reportsReducers from "./reports";
import * as reservationsReducers from "./reservations";

const reducers = combineReducers({
  auth: authReducers.authReducer,
  login: authReducers.loginReducer,
  patients: patientsReducers.patientsReducer,
  doctors: doctorsReducers.doctorsReducer,
  cities: citiesReducers.citiesReducer,
  reports: reportsReducers.reportsReducer,
  reservations: reservationsReducers.reservationsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
