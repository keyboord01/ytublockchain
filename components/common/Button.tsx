import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  id?: string;
  title: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  containerClass?: string;
}

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
}) => {
  return (
    <button
      id={id}
      className={clsx(
        "group flex-row-center relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="flex-row-center translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          <div className="pr-1 ">{leftIcon}</div>
          {title}
        </div>
        <div className="absolute flex-row-center translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          <div className="pr-1 ransition duration-500 group-hover:translate-y-[0] translate-y-[20%]">
            {leftIcon}
          </div>
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
