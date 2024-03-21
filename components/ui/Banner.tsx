import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import { PartnersImage } from "deco-sites/evcfellows/components/ui/Image.tsx";
import Image from "deco-sites/evcfellows/components/ui/Image.tsx";

interface ButtonsList {
  buttonUrl: string;
  textButton: string;
}

export interface Banner {
  /** @description text to be rendered on top of the image */
  title?: string;
  /** @description text to be rendered on top of the image */
  subtitle?: string;
  /** @description if the text should be centered */
  centerText?: boolean;
  buttons?: ButtonsList[];
  bannerImage?: PartnersImage;
  backgroundImage: {
    /** @description Image for big screens */
    desktop: LiveImage;
    /** @description Image for small screens */
    mobile: LiveImage;
    /** @description image alt text */
    alt?: string;
    /** @description width desktop */
    widthDesktop?: number;
    /** @description height desktop */
    heightDesktop?: number;
    /** @description width mobile */
    widthMobile?: number;
    /** @description height mobile */
    heightMobile?: number;
  };
}

export interface Props {
  banner: Banner;
}

function BannerUI(
  {
    banner,
  }: Props,
) {
  const {
    title,
    subtitle,
    buttons,
    backgroundImage,
    bannerImage,
    centerText,
  } = banner;

  return (
    <div class="grid grid-cols-1 grid-rows-1">
      <Picture
        preload
        class="col-start-1 col-span-1 row-start-1 row-span-1 "
      >
        <Source
          src={backgroundImage.mobile}
          width={backgroundImage.widthMobile || 720}
          height={backgroundImage.heightMobile || 520}
          media="(max-width: 767px)"
        />
        <Source
          src={backgroundImage.desktop}
          width={backgroundImage.widthDesktop || 1200}
          height={backgroundImage.heightDesktop || 520}
          media="(min-width: 767px)"
        />
        <img
          class="w-screen max-h-[595px]"
          src={backgroundImage.desktop}
          alt={backgroundImage.alt}
        />
      </Picture>

      <div
        class={`container w-full flex flex-col ${
          centerText ? "items-center" : "items-start"
        } justify-center gap-7 px-4 lg:pl-28 col-start-1 col-span-1 row-start-1 row-span-1`}
      >
        <h1 class="font-galano text-5xl font-extrabold text-white text-center">
          {title}
        </h1>
        {bannerImage && (
          <Image
            className="max-h-[220px] w-auto"
            image={bannerImage}
            preload
          />
        )}
        <span
          class={`max-w-[820px] text-lg font-semibold text-white ${
            centerText && "text-center"
          }`}
        >
          {subtitle}
        </span>
        {buttons
          ? buttons.map((button, index) => (
            <a
              key={index}
              class="px-14 py-4 bg-transparent border border-white rounded-[10px] text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
              href={button.buttonUrl}
              target="_blank"
            >
              {button.textButton}
            </a>
          ))
          : null}
      </div>
    </div>
  );
}

export default BannerUI;
