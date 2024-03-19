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
    <section class="container px-32 py-8">
      <div class="flex lg:items-center w-full gap-7">
        <div class="flex flex-col justify-between gap-4 lg:w-[40%]">
          <div>
            <h4 class=" font-bold text-5xl text-[#3D3D3D] mb-9">
              {title}
            </h4>
            <Image
              className="rounded-xl mb-4 lg:hidden"
              image={image}
              preload
            />
            <p class="font-inter font-regular text-[#3D3D3D] text-lg leading-9 lg:mb-14 mb-4">
              {content}
            </p>
          </div>

          <a
            class="py-5 w-full h-[66px] bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px]  font-regular text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
            href={manifestUrl}
            download
          >
            {textButton}
          </a>
        </div>

        <div class="w-[60%] hidden lg:block">
          <Image className="rounded-xl" image={image} preload />
        </div>
      </div>
    </section>
  );
}
