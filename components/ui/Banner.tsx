import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import { PartnersImage } from "deco-sites/evcfellows/components/ui/Image.tsx";
import Image from "deco-sites/evcfellows/components/ui/Image.tsx";

export interface Banner {
  /** @description text to be rendered on top of the image */
  title?: string;
  /** @description text to be rendered on top of the image */
  subtitle?: string;
  /** @description if the text should be centered */
  centerText?: boolean;
  buttonUrl?: string;
  textButton?: string;
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
    buttonUrl,
    textButton,
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
          class="w-screen max-h-[520px]"
          src={backgroundImage.desktop}
          alt={backgroundImage.alt}
        />
      </Picture>

      <div
        class={`container w-full flex flex-col ${
          centerText ? "items-center" : "items-start"
        } justify-center gap-7 pl-4 md:pl-24 col-start-1 col-span-1 row-start-1 row-span-1`}
      >
        <h1 class="text-5xl font-extrabold text-white">
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
          class={`text-lg font-regular text-white ${
            centerText && "text-center"
          }`}
        >
          {subtitle}
        </span>
        {buttonUrl && (
          <a
            class="px-14 py-4 bg-transparent border border-white rounded-[10px] font-regular text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
            href={buttonUrl}
            target="_blank"
          >
            {textButton}
          </a>
        )}
      </div>
    </div>
  );
}

export default BannerUI;
