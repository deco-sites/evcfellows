import Image, {
  PartnersImage,
} from "deco-sites/evcfellows/components/ui/Image.tsx";

export interface Props {
  image: PartnersImage;
  /** @format html */
  description: string;
  /** @default primary */
  buttonUrl: string;
  textButton?: string;
  blueBoxText?: string;
}

export default function FundraisingToolkitSection(
  {
    image,
    description,
    textButton = "ACESSO",
    buttonUrl,
    blueBoxText,
  }: Props,
) {
  return (
    <section class="container px-36 py-8">
      <div class="flex lg:items-center lg:justify-evenly w-full gap-7 mb-14">
        <div class="flex flex-col justify-between items-start gap-4 lg:max-w-[40%]">
          <div
            class="text-[#3D3D3D] list-disc w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <a
            class="px-8 py-4 w-[324px] bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] font-normal text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
            href={buttonUrl}
          >
            {textButton}
          </a>
        </div>

        <div class="hidden lg:block">
          <Image image={image} preload />
        </div>
      </div>

      {blueBoxText && (
        <div class="px-9 py-14 bg-gradient-to-r from-blue-900 to-sky-400 rounded-[34px]">
          <span class="font-roboto text-white font-normal text-lg">
            {blueBoxText}
          </span>
        </div>
      )}
    </section>
  );
}
