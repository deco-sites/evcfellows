import Image, {
  PartnersImage,
} from "site/components/ui/Image.tsx";

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
    <section class="container px-6 py-8">
      <div class="flex lg:items-center justify-center lg:justify-start w-full gap-12">
        <div class="flex flex-col justify-between gap-4 lg:w-[40%] max-w-[520px]">
          <div>
            <h4 class="font-galano font-extrabold text-4xl lg:text-5xl text-[#3D3D3D] mb-6">
              {title}
            </h4>
            <Image
              className="rounded-xl mb-4 lg:hidden"
              image={image}
              preload
            />
            <p class="font-roboto font-normal text-[#3D3D3D] text-lg leading-9 lg:mb-6 mb-4">
              {content}
            </p>
          </div>

          <a
            class="px-8 py-4 w-full h-[66px] bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
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
