import type { ComponentChildren } from "preact";
import { MenuLink } from "deco-sites/evcfellows/components/header/NavItem.tsx";

export interface Props {
  children: ComponentChildren;
  items: MenuLink[];
}

export default function Dropdown({ ...props }: Props) {
  const { children, items } = props;

  return (
    <div className="dropdown dropdown-hover">
      <div role="button" className="m-1 btn">{children}</div>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {items.map((item) => {
          return (
            <li>
              <a href={item.href}>{item.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
