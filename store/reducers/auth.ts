import {
  IAuthInitialState,
  ILoginInitialState,
} from "../../interfaces/store/auth.interface";
import { AuthAction, LoginAction } from "../actions/action/auth";
import { AuthTypes, LoginTypes } from "../actions/types/auth";

const authInitialState: IAuthInitialState = {
  loading: false,
  authenticated: false,
  error: null,
};

const loginInitialState: ILoginInitialState = {
  loading: false,
  success: false,
  error: null,
};

export const authReducer = (
  state: IAuthInitialState = authInitialState,
  action: AuthAction
) => {
  switch (action.type) {
    case AuthTypes.VERIFY_ADMIN_LOADING:
      return { ...state, loading: action.loading };
    case AuthTypes.VERIFY_ADMIN_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        authenticated: action.authenticated,
        error: null,
      };
    case AuthTypes.VERIFY_ADMIN_ERROR:
      return {
        ...state,
        loading: action.loading,
        authenticated: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const loginReducer = (
  state: ILoginInitialState = loginInitialState,
  action: LoginAction
) => {
  switch (action.type) {
    case LoginTypes.LOGIN_ADMIN_LOADING:
      return { ...state, loading: action.loading };
    case LoginTypes.LOGIN_ADMIN_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        success: action.success,
        error: null,
      };
    case LoginTypes.LOGIN_ADMIN_ERROR:
      return {
        ...state,
        loading: action.loading,
        success: false,
        error: action.error,
      };
    default:
      return state;
  }
};
