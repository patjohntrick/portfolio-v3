type StyledSubTitleProps = {
  text: string;
  className?: string;
};

export const StyledSubTitle = ({ text, className }: StyledSubTitleProps) => {
  return <p className={`text-lg text-gray-700 ${className}`}>{text}</p>;
};
