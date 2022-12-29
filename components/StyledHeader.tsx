type StyledHeaderProps = {
  title?: string;
  subTitle: string;
};

export const StyledHeader = ({ title, subTitle }: StyledHeaderProps) => {
  return (
    <div>
      <p>{title}</p>
      <p>{subTitle}</p>
    </div>
  );
};
