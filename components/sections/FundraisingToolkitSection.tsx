import Image, { PartnersImage } from "site/components/ui/Image.tsx";

export interface Props {
  image: PartnersImage;
  title?: string;
  /** @format html */
  description: string;
  /** @default primary */
  buttonUrl?: string;
  textButton?: string;
  blueBoxText?: string;
}

export default function FundraisingToolkitSection(
  {
    image,
    title,
    description,
    textButton = "ACESSO",
    buttonUrl,
    blueBoxText,
  }: Props,
) {
  return (
    <section class="container lg:pl-24 px-4 py-8">
      <div class="flex justify-center lg:justify-between items-center w-full gap-7 mb-14">
        <div class="flex flex-col justify-between items-center lg:items-start gap-4 lg:max-w-[40%]">
          <h1 class="text-[#3D3D3D] font-galano font-extrabold text-4xl lg:text-5xl text-center lg:text-start">
            {title}
          </h1>
          <div class="text-start flex flex-col items-center">
            <div
              class="text-[#3D3D3D] list-disc font-roboto font-normal w-[356px] flex justify-center mb-4"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {buttonUrl && (
              <a
                class="px-8 py-4 w-[324px] bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
                href={buttonUrl}
              >
                {textButton}
              </a>
            )}
          </div>
        </div>

        <div class="hidden w-full lg:flex justify-center">
          <Image image={image} preload />
        </div>
      </div>

      {blueBoxText && (
        <div class="px-9 py-14 bg-gradient-to-r from-blue-900 to-sky-400 rounded-[34px]">
          <span class="font-roboto text-white font-semibold text-lg">
            {blueBoxText}
          </span>
        </div>
      )}
    </section>
  );
}
