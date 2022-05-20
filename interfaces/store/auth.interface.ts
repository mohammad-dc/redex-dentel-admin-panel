export interface ILoginInitialState {
  loading: boolean;
  error: Error | null;
  success: boolean;
}

export interface IAuthInitialState {
  loading: boolean;
  error: Error | null;
  authenticated: boolean;
}
