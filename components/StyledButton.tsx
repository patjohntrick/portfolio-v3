import React from "react";

type StyledButtonProps = {
  buttonText?: string;
  buttonIcon?: any;
  buttonWidth?: string;
  type?: string;
  onClick?: any;
};

export const StyledButton = ({ buttonIcon, buttonText }: StyledButtonProps) => {
  return (
    <div
      className={` bg-black/90 py-4 px-2 cursor-pointer text-white shadow-md rounded-xl lg:w-[200px] ${
        buttonIcon !== undefined
          ? "flex justify-center gap-2 items-center"
          : undefined
      }`}
    >
      <p className="text-center text-gray-200 font-semibold ">{buttonText}</p>
      {buttonIcon !== undefined ? buttonIcon : undefined}
    </div>
  );
};
