import { StyledSubTitle } from './StyledSubTitle';
import { StyledTitle } from './StyledTitle';

type StyledSectionTitleProps = {
  title: string;
  subTitle: string;
};

export const StyledSectionTitle = ({
  title,
  subTitle,
}: StyledSectionTitleProps) => {
  return (
    <div className='text-center mb-12'>
      <StyledTitle
        text={title}
        className='text-2xl font-semibold text-[#333333] lg:text-4xl lg:mb-2'
      />
      <StyledSubTitle text={subTitle} className='text-black/60 text-base' />
    </div>
  );
};
