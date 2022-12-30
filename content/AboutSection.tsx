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
      <div className=" lg:flex lg:justify-between">
        <StyledPicContainer className="mb-6 lg:w-[320px] lg:h-[360px]" />
        <div className="text-container lg:w-[500px]">
          {/* hidden */}
          <div className="flex-wrap justify-between items-center hidden lg:flex lg:w-full mb-6">
            <StyledPaper
              text={PASSIONATE}
              paperIcon={<BsFillSuitHeartFill className="text-red-700" />}
            />
            <StyledPaper
              text={FOCUS}
              paperIcon={<TbTarget className="text-yellow-500" />}
            />
            <StyledPaper
              text={TECH_SAVVY}
              paperIcon={<MdOutlinePhonelinkSetup className="text-blue-700" />}
            />
          </div>
          <StyledParagraph text={INTRODUCTION} className="mb-6 text-justify" />
          <StyledButton buttonText={CV} buttonIcon={<CgFileDocument />} />
        </div>
      </div>
    </StyledSection>
  );
};
