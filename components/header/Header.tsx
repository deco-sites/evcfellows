import Navbar from "./Navbar.tsx";
import { INavItem } from "./NavItem.tsx";

export interface HeaderProps {
  navItems: INavItem[];
}

export default function Header({ navItems = [] }: HeaderProps) {
  return (
    <header>
      <Navbar navItems={navItems} />
      {
        /* <Modals
        menu={{ items: navItems }}
      /> */
      }
    </header>
  );
}
