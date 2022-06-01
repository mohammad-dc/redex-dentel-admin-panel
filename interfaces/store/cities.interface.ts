import { citiesOperationTypes } from "../../types";

export interface ICity {
  _id: string;
  city_ar: string;
  city_en: string;
  active: boolean;
}

export interface ICitiesInitialState {
  loading: boolean;
  results: ICity[];
  error: Error | null;
}

export interface ICityOperationsInitialState {
  loading: boolean;
  success: boolean;
  action: citiesOperationTypes;
  error: Error | null;
}
