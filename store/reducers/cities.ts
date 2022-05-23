import { ICitiesInitialState } from "../../interfaces/store/cities.interface";
import { CityAction } from "../actions/action/cities";
import { GetCitiesTypes } from "../actions/types/cities";

const citiesInitialState: ICitiesInitialState = {
  loading: false,
  results: [],
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
