import Image, {
  PartnersImage,
} from "site/components/ui/Image.tsx";

export interface Props {
  image?: PartnersImage | null;
  title?: string;

  description: string;
  /** @default primary */
  buttonUrl: string;
  textButton?: string;
  secondButtonUrl?: string;
  textSecondButton?: string;
  centerText?: boolean;
}

export default function ReportSection(
  {
    image = null,
    title,
    description,
    textButton = "ACESSO",
    buttonUrl,
    secondButtonUrl,
    textSecondButton,
    centerText = false,
  }: Props,
) {
  return (
    <section class="lg:pl-24 px-4 py-8">
      <div class="flex lg:items-center w-full gap-7">
        <div class={`flex flex-col items-center gap-4 lg:w-[40%] mx-auto ${centerText ? "mx-auto justify-center items-center" : "justify-between lg:items-start"}`}>
          {image && (
            <Image className="block lg:hidden" image={image} preload />
          )}
          <h1 class={`font-galano font-extrabold text-4xl lg:text-5xl ${centerText ? "text-center" : "text-center lg:text-start"}`}>
            {title}
          </h1>
          <div class="text-start flex flex-col items-center">
            <div
              class={`text-[#3D3D3D] list-disc w-[400px] flex flex-col justify-center font-roboto font-normal mb-4 ${centerText ? "items-center" : ""}`}
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
          {image && (
            <Image image={image} preload />
          )}
        </div>
      </div>
    </section>
  );
}
