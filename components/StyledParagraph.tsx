type StyledParagraphProps = {
  text: string;
  className?: string;
};

export const StyledParagraph = ({ text, className }: StyledParagraphProps) => {
  return <p className={` text-[#575757] text-lg ${className}`}>{text}</p>;
};
