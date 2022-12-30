type StyledPaperProps = {
  text: string;
  className?: string;
};

export const StyledPaper = ({ text, className }: StyledPaperProps) => {
  return (
    <div
      className={`p-4 bg-white border-[1px] rounded w-[150px] h-[150px] grid place-content-center ${className}`}
    >
      <div className="text-container text-center">
        <p>{text}</p>
        <p className="text-sm text-black/60">100%</p>
      </div>
    </div>
  );
};
