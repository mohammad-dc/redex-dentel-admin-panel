import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { InputControl } from "formik-chakra-ui";
import { Formik, Form, useFormik } from "formik";
import { ILogin } from "../../../interfaces/auth.interface";
import { loginSchema } from "../../../validations/auth.validation";

const initialValues: ILogin = {
  email: "",
  password: "",
};

export default function Login() {
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      actions.setSubmitting(true);
      console.log(values);
      actions.setSubmitting(false);
    },
  });
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>تسجيل الدخل للمسؤول</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            مرحبا بك في لوحة القيادة ✌️
          </Text>
        </Stack>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);
            console.log(values);
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>البريد الاكتروني</FormLabel>
                  <InputControl name="email" />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl id="password">
                  <FormLabel>كلمة المرور</FormLabel>
                  <InputControl name="password" />
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    تسجيل الدخول
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Form>
        </Formik>
      </Stack>
    </Flex>
  );
}
