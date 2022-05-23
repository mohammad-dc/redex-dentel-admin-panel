import { Dispatch } from "react";
import { CityAction } from "../action/cities";
import { GetCitiesTypes } from "../types/cities";
import * as API from "../../../utils/logic/api";

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
