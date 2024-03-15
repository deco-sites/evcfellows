import Dropdown from "deco-sites/evcfellows/components/daisy/Dropdown.tsx";

export interface MenuLink {
  label: string;
  href: string;
  color?: string;
  targetBlank?: boolean;
  nested?: MenuLink[];
}

export interface INavItem {
  menuLinks: MenuLink[];
  label: string;
  url: string;
}

function NavItem({ menuLinks, label, url }: INavItem) {
  return (
    <Dropdown items={menuLinks}>
      <li class="group flex items-center text-white">
        <a
          href={url}
          class="text-[15px] font-inter font-medium"
        >
          <span class="group-hover:underline">
            {label}
          </span>
        </a>
      </li>
    </Dropdown>
  );
}

export default NavItem;
