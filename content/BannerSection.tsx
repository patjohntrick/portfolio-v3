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
    <div className="relative h-[90vh] max-w-[400px] m-auto lg:max-w-[900px]">
      <StyledSection className=" absolute top-[40%] translate-y-[-40%] p-4 lg:left-[50%] lg:translate-x-[-50%] lg:flex lg:justify-between lg:w-[750px] ">
        <div className=" lg:w-[380px]">
          <div>
            <div className="flex justify-start items-center gap-2">
              <StyledTitle text={NAME} className="text-4xl font-medium" />
              <GiHand className="text-yellow-400 text-4xl" />
            </div>
            <div className=" flex justify-start gap-4 items-center">
              <div className="bg-stone-400 h-[1px] w-[70px] hidden md:block"></div>
              <StyledSubTitle
                text={JOB}
                className="my-4 text-lg text-gray-700"
              />
            </div>
            <StyledParagraph text={BANNER_DESCRIPTION} className="mb-6" />
          </div>
          <StyledButton buttonText="Say hello" buttonIcon={<TbSend />} />
        </div>
        <div className=" hidden border-[1px] h-[265px] w-[265px] rounded-xl bg-white lg:block"></div>
      </StyledSection>
      {/* <StyledSection className="flex justify-start gap-2 items-center absolute top-[90%] left-[30%] translate-x-[-30%]">
        <StyledSubTitle text="Scroll down" />
        <BsArrowDownShort className="text-lg animate-bounce" />
      </StyledSection> */}
    </div>
  );
};
