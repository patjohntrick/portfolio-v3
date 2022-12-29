type StyledTitleProps = {
  text: string;
  className?: string;
};

export const StyledTitle = ({ text, className }: StyledTitleProps) => {
  return <p className={`text-2xl text-gray-700 ${className}`}>{text}</p>;
};
