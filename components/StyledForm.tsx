import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { StyledTitle } from "./StyledTitle";
import { Strings } from "../constant/Strings";
import { StyledParagraph } from "./StyledParagraph";
import { StyledField } from "./StyledField";
import { StyledButton } from "./StyledButton";
import { TbSend } from "react-icons/tb";

interface FormProps {
  name: string;
  email: string;
  message: string;
}

const {
  SEND_A_MESSAGE,
  USER_NAME,
  EMAIL,
  MESSAGE,
  ENTER_EMAIL,
  ENTER_MESSAGE,
  ENTER_NAME,
  REQUIRED_EMAIL,
  REQUIRED_MESSAGE,
  REQUIRED_NAME,
} = Strings;

export const StyledForm = () => {
  const handleSubmit = (values: FormProps) => {
    console.log(values);
  };

  const formSchema = Yup.object().shape({
    name: Yup.string().required(REQUIRED_NAME),
    email: Yup.string().required(REQUIRED_EMAIL),
    message: Yup.string().required(REQUIRED_MESSAGE),
  });
  return (
    <div>
      <StyledParagraph text={SEND_A_MESSAGE} className="text-gray-700" />
      <div>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={formSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleBlur,
            handleChange,
            submitForm,
            touched,
            values,
            errors,
            isValid,
            setFieldValue,
            // handleSubmit,
          }) => (
            <form onSubmit={submitForm}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {touched && errors && <p>{errors.name}</p>}
              {/* <StyledButton
                buttonText={SEND_A_MESSAGE}
                buttonIcon={<TbSend />}
                type="submit"
                onClick={submitForm}
              /> */}
              <input type="submit" value="submit" />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
