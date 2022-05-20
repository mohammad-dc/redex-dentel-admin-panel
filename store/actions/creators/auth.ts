import { ILogin } from "../../../interfaces/auth.interface";
import { AuthTypes, LoginTypes } from "../types/auth";
import * as API from "../../../utils/logic/api";
import { Dispatch } from "react";
import { AuthAction, LoginAction } from "../action/auth";
import { saveCookie } from "../../../helper/cookie";

export const verifyAdminCreator = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthTypes.VERIFY_ADMIN_LOADING,
      loading: true,
    });
    API.get("admin/verify", {})
      .then(() => {
        dispatch({
          type: AuthTypes.VERIFY_ADMIN_SUCCESS,
          loading: false,
          authenticated: true,
        });
      })
      .catch((error) => {
        dispatch({
          type: AuthTypes.VERIFY_ADMIN_ERROR,
          loading: false,
          authenticated: false,
          error: error.response.data,
        });
      });
  };
};

export const loginAdminCreator = (body: ILogin) => {
  return (dispatch: Dispatch<LoginAction>) => {
    dispatch({
      type: LoginTypes.LOGIN_ADMIN_LOADING,
      loading: true,
    });
    API.post("admin/login", body)
      .then((res) => {
        saveCookie("token", res.data.response.token);
        dispatch({
          type: LoginTypes.LOGIN_ADMIN_SUCCESS,
          loading: false,
          success: true,
        });
      })
      .catch((error) => {
        dispatch({
          type: LoginTypes.LOGIN_ADMIN_ERROR,
          loading: false,
          success: true,
          error: error.response.data,
        });
      });
  };
};
