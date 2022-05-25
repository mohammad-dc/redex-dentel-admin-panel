import { combineReducers } from "redux";
import * as authReducers from "./auth";
import * as patientsReducers from "./patients";
import * as doctorsReducers from "./doctor";
import * as citiesReducers from "./cities";
import * as reportsReducers from "./reports";
import * as reservationsReducers from "./reservations";
import * as searchReducers from "./search";
import * as appReducers from "./app";

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
  app_users_counts: appReducers.usersCountsReducer,
  app_users_joining: appReducers.usersJoiningReducer,
  app_patients_cities: appReducers.patientsCitiesReducer,
  app_doctors_cities: appReducers.doctorsCitiesReducer,
  app_reservations_counts: appReducers.reservationsCountsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
