import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { StyledTitle } from "./StyledTitle";
import { Strings } from "../constant/Strings";
import { StyledParagraph } from "./StyledParagraph";
import { StyledField } from "./StyledField";
import { StyledButton } from "./StyledButton";
import { TbSend } from "react-icons/tb";
import { StyledSection } from "./StyledSection";

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

  const fieldStyle = "";

  const formSchema = Yup.object().shape({
    name: Yup.string().required(REQUIRED_NAME),
    email: Yup.string().required(REQUIRED_EMAIL),
    message: Yup.string().required(REQUIRED_MESSAGE),
  });
  return (
    <div className="lg:max-w-[400px] lg:m-auto">
      <StyledParagraph
        text={SEND_A_MESSAGE}
        className="text-[#333333] mb-6 text-xl text-center"
      />
      <div className="">
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
          }) => (
            <>
              <form onSubmit={submitForm} className=" space-y-6">
                {/* name */}
                <div className=" w-full relative">
                  <p
                    className={`text-xs py-1 px-1 absolute bg-[#FAFAFA] -top-3 left-3 ${
                      touched.name && errors.name
                        ? "text-red-700"
                        : "text-black/70"
                    }`}
                  >
                    {touched.name && errors.name ? errors.name : USER_NAME}
                  </p>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={ENTER_NAME}
                    className={`border-[1px] rounded-lg p-4 outline-none focus:border-black/60 w-full ${
                      touched.name &&
                      errors.name &&
                      "border-red-700 focus:border-red-700"
                    }`}
                  />
                </div>
                {/* email */}
                <div className=" w-full relative">
                  <p
                    className={`text-xs py-1 px-1 absolute bg-[#FAFAFA] -top-3 left-3 ${
                      touched.email && errors.email
                        ? "text-red-700"
                        : "text-black/70"
                    }`}
                  >
                    {touched.email && errors.email ? errors.email : EMAIL}
                  </p>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={ENTER_EMAIL}
                    className={`border-[1px] rounded-lg p-4 outline-none focus:border-black/60 w-full ${
                      touched.email &&
                      errors.email &&
                      "border-red-700 focus:border-red-700"
                    }`}
                  />
                </div>
                {/* message */}
                <div className=" w-full relative">
                  <p
                    className={`text-xs py-1 px-1 absolute bg-[#FAFAFA] -top-3 left-3 ${
                      touched.message && errors.message
                        ? "text-red-700"
                        : "text-black/70"
                    }`}
                  >
                    {touched.message && errors.message
                      ? errors.message
                      : ENTER_MESSAGE}
                  </p>
                  <textarea
                    rows={4}
                    name="message"
                    id="message"
                    value={values.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={ENTER_MESSAGE}
                    className={`border-[1px] rounded-lg p-4 outline-none focus:border-black/60 w-full -mb-2 ${
                      touched.message &&
                      errors.message &&
                      "border-red-700 focus:border-red-700"
                    }`}
                  />
                </div>
                {/* <div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched && errors && <p>{errors.email}</p>}
              </div>
              <div>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  value={values.message}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched && errors && <p>{errors.message}</p>}
              </div> */}
                {/* <input type="submit" value="Submit" /> */}
                <StyledButton
                  buttonText={SEND_A_MESSAGE}
                  buttonIcon={<TbSend />}
                />
              </form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};
