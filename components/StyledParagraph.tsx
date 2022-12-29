type StyledParagraphProps = {
  text: string;
};

export const StyledParagraph = ({ text }: StyledParagraphProps) => {
  return <p className=" text-stone-600 text-lg">{text}</p>;
};
