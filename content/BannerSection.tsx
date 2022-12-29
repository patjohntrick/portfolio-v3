import { StyledButton } from "../components";
import { StyledParagraph } from "../components/StyledParagraph";
import { StyledSection } from "../components/StyledSection";
import { Strings } from "../constant/Strings";
import { TbSend } from "react-icons/tb";

const { NAME, JOB, BANNER_DESCRIPTION } = Strings;

export const BannerSection = () => {
  return (
    <StyledSection className="flex justify-center border-2 gap-4 h-[700px]">
      <div className="w-[400px] border-2">
        <p>{NAME}</p>
        <div className="flex gap-4 justify-start items-center">
          <div className="bg-stone-900 h-[1px] w-[100px]"></div>
          <p>{JOB}</p>
        </div>
        <StyledParagraph text={BANNER_DESCRIPTION} />
        <StyledButton buttonText="Say hello" buttonIcon={<TbSend />} />
      </div>
      <div className="border-[1px] h-[400px] w-[400px] rounded"></div>
    </StyledSection>
  );
};
