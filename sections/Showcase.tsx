import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface ImageProps {
  /** @title Url da Imagem */
  url: ImageWidget | string;
  /** @title Texto alternativo */
  alt?: string;
  /** @title Url ao clicar na imagem */
  href?: string;
}

export interface ButtonProps {
  /** @title Texto */
  text: string;
  /** @title Url */
  url: string;
}

export interface ShowcaseProps {
  /** @title Título */
  title: RichText;
  /** @title Lista */
  list: RichText[];
  /** @title Botão */
  button: ButtonProps;
  /** @title Imagem */
  image: ImageProps;
}

export default function Showcase(
  { title, list, button, image }: ShowcaseProps,
) {
  return (
    <section class="container mx-auto py-12 px-3 lg:px-0">
      <div class="flex flex-col gap-12 mb-16">
        <h1
          class="text-center lg:text-start text-4xl md:text-5xl font-bold leading-tight flex flex-col gap-3"
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h1>

        <div class="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16">
          <div class="w-full h-full">
            <ul class="space-y-4 mb-8 list-disc px-5">
              {list.map((item, index) => (
                <li
                  key={index}
                  class="text-lg"
                  dangerouslySetInnerHTML={{ __html: item }}
                >
                </li>
              ))}
            </ul>
          </div>
          <div class="w-full h-full">
            {image.href
              ? (
                <a href={image.href}>
                  <Image
                    src={image.url}
                    {...image.alt && { alt: image.alt }}
                    class="w-full h-full shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                    width={752}
                    height={442}
                  />
                </a>
              )
              : (
                <Image
                  src={image.url}
                  {...image.alt && { alt: image.alt }}
                  class="w-full h-full shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                  width={752}
                  height={442}
                />
              )}
          </div>
        </div>

        <a
          href={button.url}
          target="_blank"
          class="mx-auto lg:mx-0 flex max-w-fit bg-[#5189f9] hover:bg-opacity-90 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
        >
          {button.text}
        </a>
      </div>
    </section>
  );
}
