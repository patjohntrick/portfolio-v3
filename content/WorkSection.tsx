import { StyledSection, StyledSectionTitle } from "../components";
import { StyledWorkPaper } from "../components/StyledWorkPaper";

import { Strings } from "../constant/Strings";

const { WORKS, PERSONAL_PROJECTS, DEMO } = Strings;

export const WorkSection = () => {
  return (
    <StyledSection>
      <StyledSectionTitle title={WORKS} subTitle={PERSONAL_PROJECTS} />
      <div className=" flex flex-wrap gap-6">
        <StyledWorkPaper />
        <StyledWorkPaper />
        <StyledWorkPaper />
        <StyledWorkPaper />
      </div>
    </StyledSection>
  );
};
