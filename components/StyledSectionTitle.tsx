type StyledSectionTitleProps = {
  title?: string;
  subTitle: string;
};

export const StyledSectionTitle = ({
  title,
  subTitle,
}: StyledSectionTitleProps) => {
  return (
    <div className="text-center">
      <p className="text-2xl font-semibold text-gray-800">{title}</p>
      <p className="text-black/60">{subTitle}</p>
    </div>
  );
};
