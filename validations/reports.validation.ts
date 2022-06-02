import * as yup from "yup";

export const reportsReasonsSchema = yup.object().shape({
  reason_ar: yup.string().required("يجب ادخال السبب باللغة العربية"),
  reason_en: yup.string().required("يجب ادخال السبب باللغة الانجليزية"),
});
