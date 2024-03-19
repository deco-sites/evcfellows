import Image, {
  PartnersImage,
} from "deco-sites/evcfellows/components/ui/Image.tsx";

export interface Props {
  image: PartnersImage;
  /** @format html */
  description: string;
  /** @default primary */
  buttonVariant?: "primary" | "secondary";
  buttonUrl: string;
  textButton?: string;
}

export default function ToolkitSection(
  {
    image,
    description,
    buttonVariant,
    textButton = "ACESSO",
    buttonUrl,
  }: Props,
) {
  return (
    <section class="pl-36 py-8">
      <div class="flex lg:items-center w-full gap-7">
        <div class="flex flex-col justify-between items-start gap-4 lg:w-[40%]">
          <div
            class="text-[#3D3D3D] list-disc w-[400px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {buttonVariant === "primary" && (
            <a
              class="py-5 px-4 w-[324px] bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] font-regular text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
              href={buttonUrl}
            >
              {textButton}
            </a>
          )}

          {buttonVariant === "secondary" && (
            <a
              class="p-[2px] w-[324px] bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] font-regular text-lg cursor-pointer"
              href={buttonUrl}
            >
              <div class="bg-white hover:bg-gradient-to-r from-blue-900 to-sky-400 w-full h-full flex items-center justify-center rounded-[10px] py-5 text-[#323E48] hover:text-white transition font-bold">
                {textButton}
              </div>
            </a>
          )}
        </div>

        <div class="hidden lg:block">
          <Image image={image} preload />
        </div>
      </div>
    </section>
  );
}
