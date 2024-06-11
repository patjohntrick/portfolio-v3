/* eslint-disable @next/next/no-img-element */
import { BsArrowRightShort, BsGithub } from "react-icons/bs";

import { StyledParagraph } from "./StyledParagraph";
import { Strings } from "../constant/Strings";
import { useRouter } from "next/router";

const { DEMO } = Strings;

type StyledWorkPaperProps = {
  projectPath: string;
  imagePath?: string;
  projectTitle: string;
  projectTechnology: string[];
};

export const StyledWorkPaper = ({
  imagePath,
  projectPath,
  projectTitle,
  projectTechnology,
}: StyledWorkPaperProps) => {
  const router = useRouter();

  return (
    <div
      className=" border-[1px] bg-white rounded-xl p-4 w-full lg:w-[320px] cursor-pointer"
      onClick={() => {
        router.push(projectPath);
      }}
    >
      <div className=" rounded-xl border-[1px] overflow-hidden h-[200px] mb-4 p-8 bg-slate-50">
        <img
          src={imagePath}
          alt="Project Image"
          className=" w-full h-full object-contain"
        />
      </div>
      <StyledParagraph text={projectTitle} className="mb-2" />
      <div className="flex flex-wrap">
        {projectTechnology.map((tech) => (
          <div
            key={tech}
            className=" mr-2 mb-2 border-[1px] p-1 rounded-lg bg-slate-50"
          >
            <p className="text-sm text-black/90">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
