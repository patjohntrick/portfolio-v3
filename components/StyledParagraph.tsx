type StyledParagraphProps = {
  text: string;
  className?: string;
};

export const StyledParagraph = ({ text, className }: StyledParagraphProps) => {
  return <p className={` text-black/60 text-lg ${className}`}>{text}</p>;
};
