import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";

export interface PartnersImage {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile?: LiveImage;
  /** @description when user clicks on the image, go to this link */
  href?: string;
  /** @description Image's alt text */
  alt: string;
  /** @description width desktop */
  widthDesktop?: number;
  /** @description height desktop */
  heightDesktop?: number;
  /** @description width mobile */
  widthMobile?: number;
  /** @description height mobile */
  heightMobile?: number;
}

export interface Props {
  image?: PartnersImage;
  preload?: boolean;
  className?: string;
}

export default function Image({ image, preload, className }: Props) {
  if (!image) return null;

  const {
    desktop,
    mobile,
    alt,
    widthDesktop,
    heightDesktop,
    widthMobile,
    heightMobile,
  } = image;

  return (
    <Picture class="block" preload={preload}>
      <Source
        media="(max-width: 767px)"
        fetchPriority={preload ? "high" : "auto"}
        src={mobile || desktop}
        width={widthMobile || 720}
        height={heightMobile}
      />
      <Source
        media="(min-width: 768px)"
        fetchPriority={preload ? "high" : "auto"}
        src={desktop}
        width={widthDesktop || 1200}
        height={heightDesktop}
      />
      <img
        class={className}
        loading={preload ? "eager" : "lazy"}
        src={desktop}
        alt={alt}
      />
    </Picture>
  );
}
