import { CgFileDocument } from "react-icons/cg";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { TbTarget } from "react-icons/tb";

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
      <div className="flex-wrap justify-between items-center hidden lg:flex lg:w-full"></div>
      <StyledParagraph text={INTRODUCTION} className="mb-6 text-justify" />
      <StyledButton
        buttonText={CV}
        buttonIcon={<CgFileDocument />}
        download="../asssets/John_Patrick_Resurreccion.pdf"
      />
    </StyledSection>
  );
};
