type StyledPaperProps = {
  text: string;
  className?: string;
  paperIcon?: any;
};

export const StyledPaper = ({
  text,
  className,
  paperIcon,
}: StyledPaperProps) => {
  return (
    <div
      className={` bg-white border-[1px] rounded-xl w-[150px] h-[120px] grid place-content-center ${className}`}
    >
      <div className='text-container text-center'>
        <div className=' grid place-content-center mb-2'>{paperIcon}</div>
        <p>{text}</p>
        <p className='text-sm text-black/60'>100%</p>
      </div>
    </div>
  );
};
