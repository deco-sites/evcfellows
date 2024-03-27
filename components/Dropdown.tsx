import { ComponentChildren } from "preact";

export interface DropdownItemProps {
  label: string;
  icon?: ComponentChildren;
  href: string;
  selected?: boolean;
  onClick?: () => void;
}

function DropdownItem({ href, label, icon, onClick }: DropdownItemProps) {
  return (
    <div onClick={onClick} class="flex flex-row items-center justify-between">
      <a
        href={href}
        class="flex flex-row items-center justify-between flex-grow p-2 hover:bg-black/5 rounded"
      >
        <p class="font-roboto not-italic font-normal text-[15px] text-[#113032] flex-grow whitespace-nowrap mr-6">
          {label}
        </p>
        {icon}
      </a>
    </div>
  );
}

export interface Props {
  open: boolean;
  onClick: () => void;
  items: DropdownItemProps[];
  value: string;
  variant?: "rounded" | "flat";
  icon?: ComponentChildren;
}

export function Dropdown({
  open,
  onClick,
  items,
  value,
  variant = "flat",
  icon,
}: Props) {
  const variants = {
    rounded: {
      open: "md:text-[#fff] md:border-[#3bc9e1] md:border",
      default:
        "select-none hidden md:flex gap-2 items-center text-[#3bc9e1] border-[transparent] rounded-full border md:hover:border-[#DBDBDB] md:hover:border md:hover:rounded-full focus:outline-none md:transition md:ease-in-out md:duration-300",
    },
    flat: {
      open: "",
      default:
        "relative flex text-white text-opacity-80 items-center h-full px-[24px] self-center font-normal text-[16px] bg-clip-text bg-linear-white-green bg-position-100 transition-colors ease-in duration-300 justify-centerp",
    },
  };

  const variantClass = variants[variant];

  return (
    <div class={`${open ? variantClass.open : ""} ${variantClass.default}`}>
      <div
        onClick={onClick}
        class="z-10 md:px-3 font-normal text-white hover:text-[#3bc9e1] text-[16px] flex items-center justify-center gap-[5px] cursor-pointer"
      >
        {value}
        <svg
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L3.84921 3.94218C4.2237 4.26317 4.7763 4.26317 5.15079 3.94218L8 1.5"
            class="group-hover:border-[#fff] stroke-current"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div
        onClick={onClick}
        class={`${
          open
            ? "block cursor-pointer w-[50vw] h-[50vh] absolute left-[-90vw] top-[-20px]"
            : "hidden"
        }`}
      >
      </div>
      <div
        class={`${open ? "block" : "hidden"} ${
          variant === "flat" ? "top-[8px]" : "top-[35px]"
        } z-30 absolute right-0 mt-5 rounded`}
      >
        <div class="flex flex-col max-w-[152px] bg-[#DBDBDB] text-[#113032] hover:text-[#3bc9e1] p-2 rounded">
          {items.map((item) => <DropdownItem {...item} />)}
        </div>
      </div>
    </div>
  );
}
