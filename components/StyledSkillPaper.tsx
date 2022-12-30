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
    <div className=" bg-white border-[1px] rounded-xl p-4 w-full">
      <StyledParagraph
        text={title}
        className=" text-center mb-6 text-gray-700 mt-4"
      />
      <div>
        {skills.map((value, index) => (
          <div key={index} className="flex items-start gap-2 mb-6">
            <BsPatchCheckFill className="mt-[6px] text-sm text-gray-700" />
            <div>
              <p className="mb-2">{value.skill}</p>
              {value.level && (
                <p className="text-black/60 text-sm">{value.level}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
