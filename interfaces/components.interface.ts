import { HandleSearchPageNameTypes } from "../types";

export interface ITableSearchInputProps {
  loading: boolean;
  pageName: HandleSearchPageNameTypes;
  reportsType?: string;
  spacer?: boolean;
}

export interface IAlertProps {
  status: "info" | "warning" | "success" | "error" | "loading";
  msg: string;
}
