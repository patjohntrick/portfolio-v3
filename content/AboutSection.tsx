import { CgFileDocument } from "react-icons/cg";

import {
  StyledButton,
  StyledPaper,
  StyledParagraph,
  StyledPicContainer,
  StyledSection,
  StyledSectionTitle,
} from "../components";
import { Strings } from "../constant/Strings";

const { ABOUT, ABOUT_SUB, INTRODUCTION, FOCUS, PASSIONATE, TECH_SAVVY, CV } =
  Strings;

export const AboutSection = () => {
  return (
    <StyledSection>
      <StyledSectionTitle title={ABOUT} subTitle={ABOUT_SUB} />
      <div>
        <StyledPicContainer className="mb-6" />
        <div className="text-container">
          {/* hidden */}
          <div className="flex-wrap justify-center items-center gap-4 hidden">
            <StyledPaper text={PASSIONATE} />
            <StyledPaper text={FOCUS} />
            <StyledPaper text={TECH_SAVVY} />
          </div>
          <StyledParagraph text={INTRODUCTION} className="mb-6" />
          <StyledButton buttonText={CV} buttonIcon={<CgFileDocument />} />
        </div>
      </div>
    </StyledSection>
  );
};
