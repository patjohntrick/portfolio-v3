import { StyledSection, StyledSectionTitle } from "../components";
import { StyledWorkPaper } from "../components/StyledWorkPaper";
import Qwote from "../assets/qwote-brand-logo.svg";
import PSSLAI from "../assets/psslai-logo.svg";
import SafeTel from "../assets/safe-tel.svg";

import { Strings } from "../constant/Strings";

const { WORKS, PERSONAL_PROJECTS, DEMO } = Strings;

export const WorkSection = () => {
  const qwoteTechs = [
    "Typescript",
    "NextJS",
    "Redux Toolkit",
    "Mantine UI",
    "REST API",
    "Admin Dashboard",
  ];
  const qwoteTechsVendor = [
    "Typescript",
    "NextJS",
    "Redux Toolkit",
    "Mantine UI",
    "REST API",
    "Vendor Dashboard",
  ];
  const psslaiTech = [
    "Javascript",
    "Axios",
    "Ant Design",
    "REST API",
    "Socket IO",
    "Class-based Component",
  ];
  const safeTelTech = [
    "Typescript",
    "NextJS",
    "Redux Toolkit",
    "Ant Design",
    "REST API",
    "react-i18next",
  ];
  return (
    <StyledSection>
      <StyledSectionTitle title={WORKS} subTitle="Projects" />
      <div className=" flex flex-wrap gap-6 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:place-content-center">
        <StyledWorkPaper
          imagePath={Qwote.src}
          projectTitle="Qwote Admin App"
          projectTechnology={qwoteTechs}
          projectPath="https://fhc.qwote.ph/"
        />
        <StyledWorkPaper
          imagePath={PSSLAI.src}
          projectTitle="PSSLAI | Bilis Online"
          projectTechnology={psslaiTech}
          projectPath="https://bilisonline.psslai.com/"
        />
        <StyledWorkPaper
          imagePath={Qwote.src}
          projectTitle="Qwote Vendor App"
          projectTechnology={qwoteTechsVendor}
          projectPath="https://fhc-vendor.qwote.ph/"
        />
        <StyledWorkPaper
          imagePath={SafeTel.src}
          projectTitle="Safe-Tel | Telspark"
          projectTechnology={safeTelTech}
          projectPath="https://crm-dev.safe-tel.de/telspark/quotation/"
        />
      </div>
    </StyledSection>
  );
};
