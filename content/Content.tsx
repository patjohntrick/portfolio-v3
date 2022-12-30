import { useState } from "react";
import { StyledNavigation } from "../components";
import { AboutSection } from "./AboutSection";
import { BannerSection } from "./BannerSection";
import { SkillsSection } from "./SkillsSection";
import { WorkSection } from "./WorkSection";

export const Content = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className="  bg-gray-50">
      <StyledNavigation toggleStatus={toggle} toggleAction={handleToggle} />
      <BannerSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
    </div>
  );
};
