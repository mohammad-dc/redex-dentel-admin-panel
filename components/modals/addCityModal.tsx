import React from "react";
import {
  Box,
  Button,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormControl,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { citiesSchema } from "../../validations/citites.validation";
import { IAddCity } from "../../interfaces/cities.interface";
//store
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCitiesCreators } from "../../store";
import { RootState } from "../../store/reducers";
import RedexAlert from "../alert";

const initialValues: IAddCity = {
  city_ar: "",
  city_en: "",
};

const AddCityModal = () => {
  const dispatch = useDispatch();
  const { addCityCreator } = bindActionCreators(actionCitiesCreators, dispatch);
  const { loading, error, success } = useSelector(
    (state: RootState) => state.operations_city
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>اضافة مدينة</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={initialValues}
            validationSchema={citiesSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              addCityCreator(values);
              actions.setSubmitting(false);
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <ModalHeader>{"اضافة مدينة"}</ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody>
                  <VStack spacing={4} align="flex-start">
                    {!success && error && (
                      <RedexAlert status={"error"} msg={error.message} />
                    )}
                    <FormControl
                      isInvalid={!!errors.city_ar && touched.city_en}
                    >
                      <FormLabel htmlFor="city_ar">
                        {"المدينة (العربية)"}
                      </FormLabel>
                      <Field
                        as={Input}
                        id="city_ar"
                        name="city_ar"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.city_ar}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.city_en && touched.city_en}
                    >
                      <FormLabel htmlFor="city_en">
                        {"المدينة (الانجليزية)"}
                      </FormLabel>
                      <Field
                        as={Input}
                        id="city_en"
                        name="city_en"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.city_en}</FormErrorMessage>
                    </FormControl>
                  </VStack>
                </ModalBody>

                <ModalFooter dir="ltr">
                  <Button mr={3} variant="ghost" onClick={onClose}>
                    {"اغلاق"}
                  </Button>
                  <Button colorScheme="blue" type="submit" isLoading={loading}>
                    {"اضافة"}
                  </Button>
                </ModalFooter>
              </form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCityModal;
