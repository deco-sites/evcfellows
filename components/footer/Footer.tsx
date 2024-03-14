import Icon from "../ui/Icon.tsx";

export interface Props {
  legalText: string;
  columns: {
    title: string;
    links: {
      url: string;
      urlText: string;
    }[];
  }[];
}

export default function Footer({ columns, legalText }: Props) {
  return (
    <footer class="bg-gray-900 md:px-[78px]">
      <section class="w-full flex justify-between py-6 px-3">
        <div>
          <Icon id="LogoWithoutText" strokeWidth={0} width={63} height={63} />
          <p class="mt-4 mb-6 text-sm font-inter font-regular text-white max-w-[362px]">
            {legalText}
          </p>
          <div class="flex gap-2">
            <Icon
              id="Linkedin"
              className="cursor-pointer"
              strokeWidth={0}
              width={24}
              height={24}
            />
            <Icon
              id="Instagram"
              className="cursor-pointer hover:text-color-white"
              strokeWidth={0}
              width={24}
              height={24}
            />
          </div>
        </div>

        <div class="pt-[69px] flex md:gap-[122px] gap-4">
          {columns?.map((column) => (
            <div class="grid grid-row-5 gap-1" key={column.title}>
              <p class="text-base font-inter font-semibold text-white">
                {column.title}
              </p>
              {column.links.map((link) => (
                <a
                  href={link.url}
                  key={link.urlText}
                  class="text-base font-inter font-regular text-white"
                >
                  {link.urlText}
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div class="h-[2px] w-full bg-white rounded-[2px] " />

      <p class="py-4 flex justify-center font-inter text-white text-xs">
        © 2024 EMERGING
      </p>
    </footer>
  );
}
