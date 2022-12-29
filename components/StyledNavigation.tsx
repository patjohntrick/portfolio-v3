import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

type StyledNavigationProps = {
  toggleStatus?: boolean;
  toggleAction?: any;
};

export const StyledNavigation = ({
  toggleStatus,
  toggleAction,
}: StyledNavigationProps) => {
  return (
    <nav className=" h-[70px] bg-slate-100 flex justify-center gap-80 items-center">
      <div>
        <p className="text-3xl text-stone-700 font-semibold">Pat.</p>
      </div>
      <div
        className=" flex justify-center gap-2 items-center"
        onClick={toggleAction}
      >
        <BsFillSunFill className=" text-yellow-400 text-2xl" />

        <div className="border-2 rounded-full cursor-pointer w-[32px] h-5 relative">
          <div
            className={` bg-stone-700 rounded-full w-4 h-4 absolute ease-in duration-200 top-[50%] translate-y-[-50%] ${
              toggleStatus ? "left-[2%]" : " left-[40%]"
            }`}
          ></div>
        </div>
        <p>
          <BsFillMoonFill className=" text-blue-400 text-2xl" />
        </p>
      </div>
    </nav>
  );
};
