import Image, {
  PartnersImage,
} from "deco-sites/evcfellows/components/ui/Image.tsx";

export interface Props {
  image: PartnersImage;
  title?: string;
  /** @format html */
  description: string;
  /** @default primary */
  buttonUrl: string;
  textButton?: string;
  secondButtonUrl?: string;
  textSecondButton?: string;
}

export default function ToolkitSection(
  {
    image,
    title,
    description,
    textButton = "ACESSO",
    buttonUrl,
    secondButtonUrl,
    textSecondButton,
  }: Props,
) {
  return (
    <section class="lg:pl-24 px-4 py-8">
      <div class="flex lg:items-center w-full gap-7">
        <div class="flex flex-col justify-between items-center lg:items-start gap-4 lg:w-[40%]">
          <Image className="block -mt-20 lg:hidden" image={image} preload />
          <h1 class="font-galano font-bold text-5xl text-start">
            {title}
          </h1>
          <div class="text-start">
            <div
              class="text-[#3D3D3D] list-disc w-[400px] flex justify-center font-roboto font-normal mb-4"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <a
              class="py-5 px-4 w-[324px] bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
              href={buttonUrl}
            >
              {textButton}
            </a>

            {secondButtonUrl && (
              <a
                class="mt-4 py-5 px-4 w-[324px] bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
                href={secondButtonUrl}
              >
                {textSecondButton}
              </a>
            )}
          </div>
        </div>

        <div class="hidden lg:block">
          <Image image={image} preload />
        </div>
      </div>
    </section>
  );
}
