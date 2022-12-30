import { BsArrowRightShort, BsGithub } from "react-icons/bs";

import { StyledParagraph } from "./StyledParagraph";
import { Strings } from "../constant/Strings";

const { DEMO } = Strings;

type StyledWorkPaperProps = {
  projectPath?: string;
  imagePath?: string;
};

export const StyledWorkPaper = ({
  imagePath,
  projectPath,
}: StyledWorkPaperProps) => {
  return (
    <div className=" border-[1px] bg-white rounded-xl p-4 w-full lg:w-[320px]">
      <div className=" rounded-xl border-[1px] overflow-hidden h-[200px] mb-4">
        <img
          src={imagePath}
          alt="Project Image"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" flex justify-between items-center">
        <div className=" flex justify-start gap-2 items-center">
          <StyledParagraph text={DEMO} className="text-gray-700 text-sm" />
          <p>
            <BsArrowRightShort className=" text-gray-700 text-lg" />
          </p>
        </div>
        <div>
          <BsGithub className="text-gray-700 text-lg" />
        </div>
      </div>
    </div>
  );
};
