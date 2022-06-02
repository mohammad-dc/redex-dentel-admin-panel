import React, { FC } from "react";
import {
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
import { reportsReasonsSchema } from "../../../validations/reports.validation";
import { IReportBody } from "../../../interfaces/reports.interface";
//store
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionReportsCreators } from "../../../store";
import { RootState } from "../../../store/reducers";
import RedexAlert from "../../alert";
import { IReportsReasons } from "../../../interfaces/store/report.interface";
import { EditIcon } from "@chakra-ui/icons";

const UpdateReportReasonModel: FC<{ reason: IReportsReasons }> = ({
  reason,
}) => {
  const initialValues: IReportBody = {
    reason_ar: reason.reason_ar,
    reason_en: reason.reason_en,
  };

  const dispatch = useDispatch();
  const { updateReportReasonCreator } = bindActionCreators(
    actionReportsCreators,
    dispatch
  );
  const { loading, error, success } = useSelector(
    (state: RootState) => state.operations_reports_reasons
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
            validationSchema={reportsReasonsSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              updateReportReasonCreator(reason._id, values);
              actions.setSubmitting(false);
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <ModalHeader>{"تعديل سبب ابلاغ"}</ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody>
                  <VStack spacing={4} align="flex-start">
                    {!success && error && (
                      <RedexAlert status={"error"} msg={error.message} />
                    )}
                    <FormControl
                      isInvalid={!!errors.reason_ar && touched.reason_en}
                    >
                      <FormLabel htmlFor="reason_ar">
                        {"السبب (العربية)"}
                      </FormLabel>
                      <Field
                        as={Input}
                        id="reason_ar"
                        name="reason_ar"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.reason_ar}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.reason_en && touched.reason_en}
                    >
                      <FormLabel htmlFor="reason_en">
                        {"السبب (الانجليزية)"}
                      </FormLabel>
                      <Field
                        as={Input}
                        id="reason_en"
                        name="reason_en"
                        type="text"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.reason_en}</FormErrorMessage>
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

export default UpdateReportReasonModel;
