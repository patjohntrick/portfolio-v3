import React from 'react';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { StyledSection, StyledSubTitle, StyledTitle } from '../components';
import { Strings } from '../constant/Strings';

const { JOB } = Strings;

export const Footer = () => {
  return (
    <div className='bg-black/90 w-full '>
      <StyledSection className='pb-0 py-10'>
        <StyledTitle
          text='Pat.'
          className='text-center text-[#FAFAFA] text-4xl font-medium mb-2'
        />
        <StyledSubTitle
          text={JOB}
          className='text-[#c5c5c5] text-center text-base font-normal mb-6'
        />
        <div className='grid place-content-center'>
          <div className='w-[100px] flex justify-between pb-10'>
            <BsGithub className='text-[#c5c5c5] text-xl' />
            <BsLinkedin className='text-[#c5c5c5] text-xl' />
            <BsFacebook className='text-[#c5c5c5] text-xl' />
          </div>
        </div>
      </StyledSection>
    </div>
  );
};
