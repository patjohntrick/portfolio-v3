import { StyledForm, StyledSection, StyledSectionTitle } from "../components";
import { Strings } from "../constant/Strings";

const { CONTACT, GET_IN_TOUCH } = Strings;

export const ContactSection = () => {
  return (
    <StyledSection>
      <StyledSectionTitle title={CONTACT} subTitle={GET_IN_TOUCH} />
      <div className="grid place-content-center">
        <StyledForm />
      </div>
    </StyledSection>
  );
};
