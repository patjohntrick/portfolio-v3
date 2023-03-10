type StyledSectionProps = {
  children: any;
  className?: string;
};

export const StyledSection = ({ children, className }: StyledSectionProps) => {
  return (
    <div
      className={` max-w-[400px] m-auto pb-24 px-6 lg:max-w-[900px] ${className}`}
    >
      {children}
    </div>
  );
};
