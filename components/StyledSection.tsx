type StyledSectionProps = {
  children: any;
  className?: string;
};

export const StyledSection = ({ children, className }: StyledSectionProps) => {
  return <div className={` max-w-[800px] m-auto ${className}`}>{children}</div>;
};
