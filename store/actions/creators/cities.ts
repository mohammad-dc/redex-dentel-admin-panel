import { Dispatch } from "react";
import { CitiesOperationsActions, CityAction } from "../action/cities";
import { CityOperationsTypes, GetCitiesTypes } from "../types/cities";
import * as API from "../../../utils/logic/api";
import { IAddCity } from "../../../interfaces/cities.interface";

export const getCitiesCreator = () => {
  return (dispatch: Dispatch<CityAction>) => {
    dispatch({
      type: GetCitiesTypes.GET_CITIES_LOADING,
      loading: true,
    });
    API.get("ar/cities/admin/details", {})
      .then((res) => {
        dispatch({
          type: GetCitiesTypes.GET_CITIES_SUCCESS,
          loading: false,
          payload: res.data.response.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: GetCitiesTypes.GET_CITIES_ERROR,
          loading: false,
          error: error.response.data,
        });
      });
  };
};

export const addCityCreator = (body: IAddCity) => {
  return (dispatch: Dispatch<CitiesOperationsActions>) => {
    dispatch({
      type: CityOperationsTypes.OPERATION_CITY_LOADING,
      loading: true,
      action: "ADD",
    });
    API.post("ar/cities/admin/add", body)
      .then((res) => {
        dispatch({
          type: CityOperationsTypes.OPERATION_CITY_SUCCESS,
          loading: false,
          success: true,
        });
      })
      .catch((error) => {
        dispatch({
          type: CityOperationsTypes.OPERATION_CITY_ERROR,
          loading: false,
          error: error.response.data,
        });
      });
  };
};

export const updateCityCreator = (id: String, body: IAddCity) => {
  return (dispatch: Dispatch<CitiesOperationsActions>) => {
    dispatch({
      type: CityOperationsTypes.OPERATION_CITY_LOADING,
      loading: true,
      action: "UPDATE",
    });
    API.put(`ar/cities/admin/update/${id}`, body)
      .then((res) => {
        dispatch({
          type: CityOperationsTypes.OPERATION_CITY_SUCCESS,
          loading: false,
          success: true,
        });
      })
      .catch((error) => {
        dispatch({
          type: CityOperationsTypes.OPERATION_CITY_ERROR,
          loading: false,
          error: error.response.data,
        });
      });
  };
};

export const activateCityCreator = (
  id: String,
  action: "ACTIVATE" | "DEACTIVATE"
) => {
  return (dispatch: Dispatch<CitiesOperationsActions>) => {
    dispatch({
      type: CityOperationsTypes.OPERATION_CITY_LOADING,
      loading: true,
      action: action,
    });
    API.put(`ar/cities/admin/activation/${action.toLowerCase()}/${id}`, {})
      .then((res) => {
        dispatch({
          type: CityOperationsTypes.OPERATION_CITY_SUCCESS,
          loading: false,
          success: true,
        });
      })
      .catch((error) => {
        dispatch({
          type: CityOperationsTypes.OPERATION_CITY_ERROR,
          loading: false,
          error: error.response.data,
        });
      });
  };
};
