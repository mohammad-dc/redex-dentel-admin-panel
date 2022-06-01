import {
  ICitiesInitialState,
  ICityOperationsInitialState,
} from "../../interfaces/store/cities.interface";
import { CitiesOperationsActions, CityAction } from "../actions/action/cities";
import { CityOperationsTypes, GetCitiesTypes } from "../actions/types/cities";

const citiesInitialState: ICitiesInitialState = {
  loading: false,
  results: [],
  error: null,
};

const CityOperationsInitialState: ICityOperationsInitialState = {
  loading: false,
  action: "NONE",
  success: false,
  error: null,
};

export const citiesReducer = (
  state: ICitiesInitialState = citiesInitialState,
  action: CityAction
) => {
  switch (action.type) {
    case GetCitiesTypes.GET_CITIES_LOADING:
      return { ...state, loading: true };
    case GetCitiesTypes.GET_CITIES_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case GetCitiesTypes.GET_CITIES_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const CitiesOperationsReducer = (
  state: ICityOperationsInitialState = CityOperationsInitialState,
  action: CitiesOperationsActions
) => {
  switch (action.type) {
    case CityOperationsTypes.OPERATION_CITY_LOADING:
      return { ...state, loading: true, action: action.action };
    case CityOperationsTypes.OPERATION_CITY_SUCCESS:
      return { ...state, loading: false, success: action.success, error: null };
    case CityOperationsTypes.OPERATION_CITY_ERROR:
      return { ...state, loading: false, error: action.error, success: false };
    default:
      return state;
  }
};
