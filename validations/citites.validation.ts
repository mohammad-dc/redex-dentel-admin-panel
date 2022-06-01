import * as yup from "yup";

export const citiesSchema = yup.object().shape({
  city_ar: yup.string().required("يجب ادخال المدينة باللغة العربية"),
  city_en: yup.string().required("يجب ادخال المدينة باللغة الانجليزية"),
});
