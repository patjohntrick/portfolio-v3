import { Strings } from "../constant/Strings";

const { NAME } = Strings;

type StyledPicContainerProps = {
  imagePath?: string;
  className?: string;
};

export const StyledPicContainer = ({
  imagePath,
  className,
}: StyledPicContainerProps) => {
  return (
    <div
      className={`border-[1px] h-[280px] w-[280px] rounded bg-white overflow-hidden ${className}`}
    >
      <img src={imagePath} alt={NAME} className="object-cover h-full w-full" />
    </div>
  );
};
