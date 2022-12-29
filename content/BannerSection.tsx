import { StyledButton, StyledSubTitle, StyledTitle } from "../components";
import { StyledParagraph } from "../components/StyledParagraph";
import { StyledSection } from "../components/StyledSection";
import { Strings } from "../constant/Strings";
import { TbSend } from "react-icons/tb";
import { GiHand } from "react-icons/gi";
import { BsArrowDownShort } from "react-icons/bs";

const { NAME, JOB, BANNER_DESCRIPTION } = Strings;

export const BannerSection = () => {
  return (
    <div className="relative h-[90vh]">
      <StyledSection className=" absolute top-[50%] translate-y-[-50%] p-4">
        <div>
          <div>
            <div className="flex justify-start items-center gap-2">
              <StyledTitle text={NAME} className="text-4xl font-medium" />
              <GiHand className="text-yellow-400 text-4xl" />
            </div>
            <div className=" flex justify-start gap-4 items-center">
              <div className="bg-stone-400 h-[1px] w-[70px] hidden md:block"></div>
              <StyledSubTitle text={JOB} className="my-4 text-lg" />
            </div>
            <StyledParagraph text={BANNER_DESCRIPTION} className="mb-6" />
          </div>
          <StyledButton buttonText="Say hello" buttonIcon={<TbSend />} />
        </div>
        <div className=" hidden border-[1px] h-[280px] w-[280px] rounded bg-white md:block"></div>
      </StyledSection>
      {/* <StyledSection className="flex justify-start gap-2 items-center absolute top-[90%] left-[30%] translate-x-[-30%]">
        <StyledSubTitle text="Scroll down" />
        <BsArrowDownShort className="text-lg animate-bounce" />
      </StyledSection> */}
    </div>
  );
};
