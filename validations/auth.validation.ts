import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("يجب ملء الحقل"),
  password: yup
    .string()
    .min(5, "يجب ادخال 5 احرف على الاقل")
    .required("يجب ملء الحقل"),
});
