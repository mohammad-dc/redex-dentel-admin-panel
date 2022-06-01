import { ICity } from "../../../interfaces/store/cities.interface";
import { citiesOperationTypes } from "../../../types";
import { CityOperationsTypes, GetCitiesTypes } from "../types/cities";

// get cities
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

//operation city
interface IOperationCityLoadingAction {
  type: CityOperationsTypes.OPERATION_CITY_LOADING;
  loading: boolean;
  action: citiesOperationTypes;
}

interface IOperationCitySuccessAction {
  type: CityOperationsTypes.OPERATION_CITY_SUCCESS;
  loading: boolean;
  success: boolean;
}

interface IOperationCityErrorAction {
  type: CityOperationsTypes.OPERATION_CITY_ERROR;
  loading: boolean;
  error: Error | null;
}

//update city

export type CityAction =
  | IGetCitiesLoadingAction
  | IGetCitiesSuccessAction
  | IGetCitiesErrorAction;

export type CitiesOperationsActions =
  | IOperationCityLoadingAction
  | IOperationCitySuccessAction
  | IOperationCityErrorAction;
