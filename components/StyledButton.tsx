import React from "react";

type StyledButtonProps = {
  buttonText: string;
  buttonIcon?: any;
  buttonWidth?: string;
  type?: string;
  onClick?: any;
  isLink?: boolean;
  download?: string;
};

export const StyledButton = ({
  buttonIcon,
  buttonText,
  type,
  onClick,
  isLink,
  download,
}: StyledButtonProps) => {
  // console.log("download", download);
  if (!!download) {
    return (
      <a
        className={` bg-black/90 py-4 px-2 cursor-pointer text-white shadow-md rounded-xl lg:w-[200px] ${
          buttonIcon !== undefined
            ? "flex justify-center gap-2 items-center"
            : undefined
        }`}
        href={download}
        download
      >
        <p className="text-center text-gray-200 font-semibold ">{buttonText}</p>
        {buttonIcon !== undefined ? buttonIcon : undefined}
      </a>
    );
  }
  return (
    <div
      className={` bg-black/90 py-4 px-2 cursor-pointer text-white shadow-md rounded-xl lg:w-[200px] ${
        buttonIcon !== undefined
          ? "flex justify-center gap-2 items-center"
          : undefined
      }`}
    >
      <a className="text-center text-gray-200 font-semibold " href="#contact">
        {buttonText}
      </a>
      {buttonIcon !== undefined ? buttonIcon : undefined}
    </div>
  );
};
