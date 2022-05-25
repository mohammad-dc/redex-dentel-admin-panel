import { combineReducers } from "redux";
import * as authReducers from "./auth";
import * as patientsReducers from "./patients";
import * as doctorsReducers from "./doctor";
import * as citiesReducers from "./cities";
import * as reportsReducers from "./reports";
import * as reservationsReducers from "./reservations";
import * as searchReducers from "./search";

const reducers = combineReducers({
  auth: authReducers.authReducer,
  login: authReducers.loginReducer,
  patients: patientsReducers.patientsReducer,
  doctors: doctorsReducers.doctorsReducer,
  cities: citiesReducers.citiesReducer,
  reports: reportsReducers.reportsReducer,
  recent_reports: reportsReducers.recentReportsReducer,
  reports_reasons: reportsReducers.reportsReasonsReducer,
  reservations: reservationsReducers.reservationsReducer,
  search: searchReducers.searchReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
