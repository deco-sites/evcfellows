import Modals from "./Modals.tsx";
import Navbar from "deco-sites/evcfellows/components/header/Navbar.tsx";

export interface NavItemProps {
  label: string;
  href: string;
  color?: string;
}

export interface HeaderProps {
  navItems?: NavItemProps[];
}

export default function Header({ navItems = [] }: HeaderProps) {
  return (
    <header>
      <Navbar navItems={navItems} />
      <Modals
        menu={{ items: navItems }}
      />
    </header>
  );
}
