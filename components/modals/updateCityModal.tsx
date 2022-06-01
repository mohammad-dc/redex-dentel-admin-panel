import React, { FC } from "react";
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
  IconButton,
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
import { ICity } from "../../interfaces/store/cities.interface";
import { EditIcon } from "@chakra-ui/icons";

const UpdateCityModal: FC<{ city: ICity }> = ({ city }) => {
  const initialValues: IAddCity = {
    city_ar: city.city_ar,
    city_en: city.city_en,
  };
  const dispatch = useDispatch();
  const { addCityCreator, updateCityCreator } = bindActionCreators(
    actionCitiesCreators,
    dispatch
  );
  const { loading, error, success } = useSelector(
    (state: RootState) => state.operations_city
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        colorScheme="orange"
        aria-label="edit"
        icon={<EditIcon />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={initialValues}
            validationSchema={citiesSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              updateCityCreator(city._id, values);
              actions.setSubmitting(false);
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <ModalHeader>{"تعديل المدينة"}</ModalHeader>
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
                    {"تعديل"}
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

export default UpdateCityModal;
