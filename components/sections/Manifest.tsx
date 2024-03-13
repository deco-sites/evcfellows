import Image, {
  PartnersImage,
} from "deco-sites/evcfellows/components/ui/Image.tsx";

export interface Props {
  image: PartnersImage;
  title: string;
  content: string;
  manifestUrl: string;
  textButton?: string;
}

export default function Manifest(
  { image, title, content, textButton = "BAIXE NOSSO MANIFESTO", manifestUrl }:
    Props,
) {
  return (
    <section class="container py-8">
      <div class="flex justify-between items-center gap-7">
        <div class="flex flex-col justify-between gap-4 md:gap-0 w-[40%]">
          <div>
            <h4 class="font-sora font-bold text-5xl text-gray-500 mb-9">
              {title}
            </h4>
            <p class="font-inter font-regular text-gray-500 text-lg leading-9 mb-14">
              {content}
            </p>
          </div>

          <a
            class="py-5 w-full h-[66px] bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] font-sora font-regular text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center"
            href={manifestUrl}
            download
          >
            {textButton}
          </a>
        </div>

        <div class="w-[60%]">
          <Image className="rounded-xl" image={image} preload />
        </div>
      </div>
    </section>
  );
}
