import { useEffect, useRef, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { Dropdown } from "deco-sites/evcfellows/components/Dropdown.tsx";
import Icon from "deco-sites/evcfellows/components/ui/Icon.tsx";
import { useSignalEffect } from "@preact/signals";

export interface MenuLink {
  label: string;
  href: string;
  targetBlank?: boolean;
  nested?: MenuLink[];
}

export interface Props {
  menuLinks: MenuLink[];
}

function MobileMenuLink({
  href,
  label,
  targetBlank,
  nested,
}: MenuLink) {
  const hasNested = nested && nested.length > 0;
  if (hasNested) {
    return (
      <li class="font-roboto  pt-4 grid items-center">
        <a
          href={href}
          target={targetBlank ? "_blank" : "_self"}
          class="block px-[24px]  font-normal text-[16px] leading-[19.36px] text-white"
        >
          {label}
        </a>
        <ul class="pl-[24px]">
          {nested.map((item) => <MobileMenuLink {...item} />)}
        </ul>
      </li>
    );
  }

  return (
    <li class={"grid items-center py-3 md:py-4"}>
      <a
        href={href}
        target={targetBlank ? "_blank" : "_self"}
        class="block px-[24px] font-normal text-[16px] leading-[19.36px] text-white"
      >
        {label}
      </a>
    </li>
  );
}

function MenuLink({ href, label, targetBlank, nested, ...props }: MenuLink) {
  const open = useSignal(false);
  const menuRef = useRef<HTMLLIElement>(null);

  const setOpen = () => (open.value = !open.value);

  useSignalEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        open.value = false;
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  if (nested && nested.length > 0) {
    return (
      <li
        ref={menuRef}
        class="relative h-full grid hover:text-[#3bc9e1] text-white"
        {...props}
      >
        <Dropdown
          items={nested}
          value={label}
          onClick={setOpen}
          open={open.value}
        />
      </li>
    );
  }

  return (
    <li
      class="relative h-full grid hover:text-[#3bc9e1] text-white"
      {...props}
    >
      <a
        target={targetBlank ? "_blank" : "_self"}
        href={href}
        class="flex items-center h-full px-[24px] self-center font-normal text-[16px] bg-clip-text bg-linear-white-green bg-position-100 transition-colors ease-in duration-300 justify-center"
        style="background-size: 200%;"
      >
        {label}
      </a>
    </li>
  );
}

export default function Header(props: Props) {
  const open = useSignal(false);
  const openLang = useSignal(false);
  const selectedLang = useSignal<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const setOpenLang = () => (openLang.value = !openLang.value);

  function setLanguageCookie(name: string, value: string, days: number) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    selectedLang.value = value;
    window.location.reload();
  }

  function deleteLanguageCookie(name: string) {
    document.cookie = name +
      "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    selectedLang.value = "Pt-BR";
    window.location.reload();
  }

  function getCookie(name: string): string | null {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";").map((cookie) => cookie.trim());

    const cookie = cookieArray.find((cookie) => cookie.startsWith(cookieName));
    return cookie ? cookie.substring(cookieName.length) : null;
  }

  function setLangEnUS() {
    setLanguageCookie("Language", "En-US", 2);
  }

  const langOptions = [
    {
      label: "Pt-BR",
      href: "",
      onClick: () => deleteLanguageCookie("Language"),
      selected: !!(selectedLang.value === "Pt-BR"),
    },
    {
      label: "En-US",
      href: "",
      onClick: () => setLangEnUS(),
      selected: !!(selectedLang.value === "En-US"),
    },
  ];

  useSignalEffect(() => {
    const langCookie = getCookie("Language");
    selectedLang.value = langCookie;
  });

  useSignalEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        openLang.value = false;
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <section class="bg-[#323E48] w-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)]">
      <nav class="container flex flex-row justify-evenly gap-16 items-center py-4 max-w-screen-2xl m-auto">
        <ul class="h-full flex items-center">
          <li class="font-roboto  h-full">
            <a href="/" aria-label="Store logo">
              <Icon id="Logo" width={205} height={59} />
            </a>
          </li>
        </ul>
        <ul class="hidden md:flex md:flex-row h-full group">
          {props.menuLinks.map((link, index) => {
            return <MenuLink key={index} {...link} />;
          })}
        </ul>
        <div class="ml-auto md:hidden pr-4 md:pr-8">
          <div class="grid items-center">
            <button
              class="focus:outline-none"
              onClick={() => open.value = !open.value}
            >
              <svg
                width="35"
                height="32"
                viewBox="0 0 39 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class={open.value ? "hidden" : ""}
              >
                <rect
                  x="19"
                  y="2"
                  width="17"
                  height="4"
                  rx="2"
                  fill="#DBDBDB"
                />
                <rect
                  x="11"
                  y="14"
                  width="25"
                  height="4"
                  rx="2"
                  fill="#DBDBDB"
                />
                <rect
                  x="3"
                  y="26"
                  width="33"
                  height="4"
                  rx="2"
                  fill="#DBDBDB"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#DBDBDB"
                width="35"
                height="32"
                class={open.value ? "" : "hidden"}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class={open.value
            ? "flex flex-col w-[calc(100vw-16px)] h-[calc(100vh-116px)] overflow-auto gap-[40px] fixed bg-[#1E1E1E] left-0 top-[80px] pb-[80px] pt-[24px] z-50 px-3 md:hidden rounded-[24px]"
            : "hidden"}
        >
          <ul class="flex flex-col divide-y divide-semi-white-13">
            {props.menuLinks.map((link) => {
              return <MobileMenuLink key={link.label} {...link} />;
            })}
          </ul>
        </div>

        <div
          ref={dropdownRef}
          class="text-nowrap flex flex-row items-center py-1 cursor-pointer md:hover:border-[#3bc9e1] md:hover:border border-[transparent] border font-normal text-[16px] text-[#3bc9e1] hover:text-white rounded-full md:transition md:ease-in-out md:duration-300"
        >
          <Dropdown
            items={langOptions}
            value={selectedLang.value ?? langOptions[0].label}
            onClick={() => setOpenLang()}
            open={openLang.value}
          />
        </div>
      </nav>
    </section>
  );
}
