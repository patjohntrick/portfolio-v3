import React from "react";

type StyledButtonProps = {
  buttonText?: string;
  buttonIcon?: any;
  buttonWidth?: string;
};

export const StyledButton = ({ buttonIcon, buttonText }: StyledButtonProps) => {
  return (
    <div
      className={` bg-gray-800 py-4 px-2 cursor-pointer text-white w-[150px] shadow-md rounded-xl ${
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
