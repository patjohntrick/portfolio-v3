import { StyledSection, StyledSectionTitle } from "../components";
import { StyledSkillPaper } from "../components";
import { Strings, FRONT_END, BACK_END, OTHER_TOOLS } from "../constant/Strings";

const { SKILL, TECHNOLOGIES } = Strings;

export const SkillsSection = () => {
  return (
    <StyledSection>
      <StyledSectionTitle title={SKILL} subTitle={TECHNOLOGIES} />
      <div className="flex flex-wrap gap-6 justify-center">
        <StyledSkillPaper title={"Front End"} skills={FRONT_END} />
        <StyledSkillPaper title="Backend" skills={BACK_END} />
        <StyledSkillPaper title="Other tools" skills={OTHER_TOOLS} />
      </div>
    </StyledSection>
  );
};
