type StyledSubTitleProps = {
  text: string;
  className?: string;
};

export const StyledSubTitle = ({ text, className }: StyledSubTitleProps) => {
  return <p className={`text-lg text-black/60 ${className}`}>{text}</p>;
};
