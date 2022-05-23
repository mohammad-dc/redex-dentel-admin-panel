import { ICity } from "../../../interfaces/store/cities.interface";
import { GetCitiesTypes } from "../types/cities";

interface IGetCitiesLoadingAction {
  type: GetCitiesTypes.GET_CITIES_LOADING;
  loading: boolean;
}

interface IGetCitiesSuccessAction {
  type: GetCitiesTypes.GET_CITIES_SUCCESS;
  loading: boolean;
  payload: ICity[];
}

interface IGetCitiesErrorAction {
  type: GetCitiesTypes.GET_CITIES_ERROR;
  loading: boolean;
  error: Error | null;
}

export type CityAction =
  | IGetCitiesLoadingAction
  | IGetCitiesSuccessAction
  | IGetCitiesErrorAction;
