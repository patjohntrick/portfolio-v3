import { StyledTitle } from "./StyledTitle";
import { FormikProps, FieldProps, FieldInputProps } from "formik";

type StyledFieldProps = {
  fieldText: string;
  fieldPlaceHolder: string;
  line: number;
  touched?: any;
  handleBlur?: any;
  values?: any;
  errors?: any;
};

export const StyledField = ({
  fieldText,
  fieldPlaceHolder,
  errors,
  line,
  touched,
  handleBlur,
  values,
}: StyledFieldProps) => {
  const fieldStyles = "rounded-md border-1px";

  return (
    <div>
      <StyledTitle text={fieldText} />
      {line > 1 ? (
        <textarea
          rows={line}
          className={fieldStyles}
          placeholder={fieldPlaceHolder}
        />
      ) : (
        <input
          type="text"
          placeholder={fieldPlaceHolder}
          className={fieldStyles}
        />
      )}
    </div>
  );
};
