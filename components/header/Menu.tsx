import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function MenuItem({ item }: { item: INavItem }) {
  return (
    <div class="collapse collapse-plus">
      <div class="collapse-title py-6">{item.label}</div>
    </div>
  );
}

function Menu({ items }: Props) {
  return (
    <>
      <ul class="px-4 flex-grow flex flex-col divide-y divide-base-200">
        {items.map((item) => (
          <li>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
