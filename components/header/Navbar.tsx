import Icon from "deco-sites/evcfellows/components/ui/Icon.tsx";
import NavItem from "deco-sites/evcfellows/components/header/NavItem.tsx";
import HeaderButton from "./Buttons.tsx";
import { INavItem } from "./NavItem.tsx";

interface NavbarProps {
  navItems: INavItem[];
}

export default function Navbar({ navItems }: NavbarProps) {
  return (
    <div class="w-full bg-[#323E48] py-7 md:px-[78px] px-4 flex flex-row md:items-center justify-between gap-4 md:gap-0">
      <a href="/" aria-label="Store logo">
        <Icon id="Logo" width={205} height={59} />
      </a>

      <div class="md:hidden flex items-center">
        <HeaderButton variant="menu" />
      </div>

      <ul class="justify-end flex-auto gap-4 hidden md:flex">
        {navItems.map((navItem) => (
          <NavItem
            key={navItem.label}
            {...navItem}
          />
        ))}
      </ul>
    </div>
  );
}
