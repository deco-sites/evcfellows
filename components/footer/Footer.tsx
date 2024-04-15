import Icon from "../ui/Icon.tsx";

export interface Props {
  legalText: string;
  year: string;
  columns: {
    title: string;
    links: {
      url: string;
      urlText: string;
    }[];
  }[];
}

export default function Footer({ columns, legalText, year }: Props) {
  return (
    <footer class="bg-[#323E48] md:px-[78px]">
      <section class="w-full flex justify-between py-6 px-14 lg:px-4">
        <div class="w-full flex flex-col md:flex-row justify-between">
          <div class="flex flex-col items-center md:items-start md:flex-row">
            <Icon
              id="LogoWithoutText"
              class="mr-4"
              strokeWidth={0}
              width={63}
              height={63}
            />
            <p class="text-sm text-center md:text-start font-roboto text-white max-w-[362px]">
              {legalText}
            </p>
          </div>
          <div class="flex gap-2 justify-center mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/emerging-venture-capital-fellows"
              target="_blank"
              class="w-7 h-7"
            >
              <svg viewBox="0 0 67 67">
                <path
                  d="M50.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H50.837z M22.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H22.959z M34,64  C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z M26.354,48.137V27.71h-6.789v20.427  H26.354z"
                  style="fill-rule:evenodd;clip-rule:evenodd;fill:#f2f2f2;"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/emergingvcfellows/"
              target="_blank"
              class="w-7 h-7"
            >
              <svg
                viewBox="0 0 80 80"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g>
                  <g>
                    <path
                      d="M49.65,20.92H30.35a9.42,9.42,0,0,0-9.42,9.42V49.65a9.42,9.42,0,0,0,9.42,9.42H49.65a9.42,9.42,0,0,0,9.42-9.42V30.35A9.42,9.42,0,0,0,49.65,20.92ZM40,52.35A12.35,12.35,0,1,1,52.35,40,12.37,12.37,0,0,1,40,52.35ZM52.38,30.7a3,3,0,1,1,3-3A3,3,0,0,1,52.38,30.7Z"
                      style="fill:#f2f2f2;"
                    />
                    <circle cx="40" cy="40" r="7.55" style="fill:#f2f2f2;" />
                    <path
                      d="M40,0A40,40,0,1,0,80,40,40,40,0,0,0,40,0ZM63.88,49.65A14.25,14.25,0,0,1,49.65,63.88H30.35A14.25,14.25,0,0,1,16.12,49.65V30.35A14.25,14.25,0,0,1,30.35,16.12H49.65A14.25,14.25,0,0,1,63.88,30.35Z"
                      style="fill:#f2f2f2;"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div class="pt-[69px] flex md:gap-[122px] gap-4">
          {columns?.map((column) => (
            <div class="grid grid-row-5 gap-1" key={column.title}>
              <p class="font-roboto text-base text-white">
                {column.title}
              </p>
              {column.links.map((link) => (
                <a
                  href={link.url}
                  key={link.urlText}
                  class="text-base font-roboto text-white"
                >
                  {link.urlText}
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div class="h-[2px] w-full bg-white rounded-[2px] " />

      <p class="font-roboto py-4 flex justify-center text-white text-xs">
        © {year} Emerging Venture Capital Fellows. All Rights Reserved.
      </p>
    </footer>
  );
}
