import { AuthTypes, LoginTypes } from "../types/auth";

//auth
interface IAuthLoadingAction {
  type: AuthTypes.VERIFY_ADMIN_LOADING;
  loading: boolean;
}

interface IAuthSuccessAction {
  type: AuthTypes.VERIFY_ADMIN_SUCCESS;
  loading: boolean;
  authenticated: boolean;
}

interface IAuthErrorAction {
  type: AuthTypes.VERIFY_ADMIN_ERROR;
  loading: boolean;
  authenticated: boolean;
  error: Error;
}

//login
interface ILoginLoadingAction {
  type: LoginTypes.LOGIN_ADMIN_LOADING;
  loading: boolean;
}

interface ILoginSuccessAction {
  type: LoginTypes.LOGIN_ADMIN_SUCCESS;
  loading: boolean;
  success: boolean;
}

interface ILoginErrorAction {
  type: LoginTypes.LOGIN_ADMIN_ERROR;
  loading: boolean;
  success: boolean;
  error: Error;
}

export type AuthAction =
  | IAuthLoadingAction
  | IAuthSuccessAction
  | IAuthErrorAction;

export type LoginAction =
  | ILoginLoadingAction
  | ILoginSuccessAction
  | ILoginErrorAction;
