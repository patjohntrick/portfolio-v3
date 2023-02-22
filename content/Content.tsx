import { useState } from 'react';
import Head from 'next/head';
import { StyledNavigation } from '../components';
import { AboutSection } from './AboutSection';
import { BannerSection } from './BannerSection';
import { SkillsSection } from './SkillsSection';
import { WorkSection } from './WorkSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

export const Content = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div className='  bg-[#FAFAFA]'>
      <Head>
        <title>John Patrick Resurreccion | Front End Developer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <StyledNavigation toggleStatus={toggle} toggleAction={handleToggle} />
      <BannerSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
