/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { StyledSection, StyledSubTitle, StyledTitle } from "../components";
import { Strings } from "../constant/Strings";

const { JOB } = Strings;

export const Footer = () => {
  return (
    <div className="bg-black/90 w-full ">
      <StyledSection className="pb-0 py-10">
        <StyledTitle
          text="Pat."
          className="text-center text-[#FAFAFA] text-4xl font-medium mb-2"
        />
        <StyledSubTitle
          text="Software Developer"
          className="text-[#c5c5c5] text-center text-base font-normal mb-6"
        />
        <div className="grid place-content-center">
          <div className="w-[100px] flex justify-between pb-10">
            <a href="https://github.com/patjohntrick" target="_blank">
              <BsGithub className="text-[#c5c5c5] text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-patrick-resurreccion-5b5314213/"
              target="_blank"
            >
              <BsLinkedin className="text-[#c5c5c5] text-xl" />
            </a>
            <a href="https://www.facebook.com/johnpatrick13" target="_blank">
              <BsFacebook className="text-[#c5c5c5] text-xl" />
            </a>
          </div>
        </div>
      </StyledSection>
    </div>
  );
};
