import { BsPatchCheckFill } from "react-icons/bs";
import { StyledParagraph } from "./StyledParagraph";

type SkillsProps = {
  skill: string;
  level?: string;
};

type StyledSkillsPaperProps = {
  skills: SkillsProps[];
  title: any;
};

export const StyledSkillPaper = ({ skills, title }: StyledSkillsPaperProps) => {
  return (
    <div className=" bg-white border-[1px] rounded-xl p-4 w-full lg:w-[400px] lg:px-6 pb-6">
      <StyledParagraph
        text={title}
        className=" text-center text-lg mb-6 text-[#333333] mt-4"
      />
      <div className=" lg:grid lg:grid-rows-3 lg:grid-flow-col gap-4">
        {skills.map((value, index) => (
          <div key={index} className="flex items-start gap-2 mb-4 lg:mb-2">
            <BsPatchCheckFill className="mt-[6px] text-sm text-gray-700" />
            <div>
              <p className="mb-1">{value.skill}</p>
              {/* {value.level && (
                <p className='text-black/60 text-sm'>{value.level}</p>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
