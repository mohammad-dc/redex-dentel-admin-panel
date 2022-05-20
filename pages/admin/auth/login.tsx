import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Heading,
  Text,
  FormErrorMessage,
  Input,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { ILogin } from "../../../interfaces/auth.interface";
import { loginSchema } from "../../../validations/auth.validation";
//store
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionAuthCreators } from "../../../store";
import { RootState } from "../../../store/reducers";
import { useEffect } from "react";
import { useRouter } from "next/router";

const initialValues: ILogin = {
  email: "",
  password: "",
};

const Login = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const { loginAdminCreator } = bindActionCreators(
    actionAuthCreators,
    dispatch
  );
  const { loading, success, error } = useSelector(
    (state: RootState) => state.login
  );

  useEffect(() => {
    success && route.push("/admin/dashboard");
  }, [success]);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>تسجيل الدخل للمسؤول</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            مرحبا بك في لوحة التحكم ✌️
          </Text>
        </Stack>

        <Box bg="white" p={6} rounded="md">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              loginAdminCreator(values);
              actions.setSubmitting(false);
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  {!success && error && (
                    <Alert status="error">
                      <AlertIcon />
                      {error.message}
                    </Alert>
                  )}
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">البريد الاكتروني</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">كلمة المرور</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <Button
                    isLoading={loading}
                    type="submit"
                    colorScheme="blue"
                    width="full"
                  >
                    تسجيل الدخول
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
