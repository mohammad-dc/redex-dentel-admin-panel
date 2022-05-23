import { Dispatch } from "react";
import { IGetReservationsRequestParams } from "../../../interfaces/store/reservation.interface";
import { ReservationAction } from "../action/reservations";
import { GetReservationsTypes } from "../types/reservations";
import * as API from "../../../utils/logic/api";

export const getReservationsCreator = (
  params: IGetReservationsRequestParams
) => {
  return (dispatch: Dispatch<ReservationAction>) => {
    dispatch({
      type: GetReservationsTypes.GET_RESERVATIONS_LOADING,
      loading: true,
    });

    API.get("ar/reservations/admin/all", params)
      .then((res) => {
        dispatch({
          type: GetReservationsTypes.GET_RESERVATIONS_SUCCESS,
          loading: false,
          payload: res.data.response.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: GetReservationsTypes.GET_RESERVATIONS_ERROR,
          loading: false,
          error: error.response.data,
        });
      });
  };
};
