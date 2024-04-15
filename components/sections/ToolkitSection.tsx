import Iframe from "deco-sites/evcfellows/islands/Iframe.tsx";

export interface Props {
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
    title,
    description,
    textButton = "ACESSO",
    buttonUrl,
    secondButtonUrl,
    textSecondButton,
  }: Props,
) {
  return (
    <section class="lg:pl-24 lg:pr-12 px-4 py-8">
      <div class="flex justify-center lg:items-center w-full gap-7">
        <div class="flex flex-col justify-between items-center xl:items-start gap-4 xl:w-[40%]">
          <h1 class="font-galano font-extrabold text-4xl lg:text-5xl text-center lg:text-start">
            {title}
          </h1>
          <div class="text-start flex flex-col items-center">
            <div
              class="text-[#3D3D3D] list-disc w-[400px] flex justify-center font-roboto font-normal mb-4"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div class="xl:hidden block w-full">
              <Iframe iframeUrl="https://airtable.com/embed/shrgbFokIRyDH8yHT?backgroundColor=orange&viewControls=on" />
            </div>

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

        <div class="hidden xl:block w-full">
          <Iframe iframeUrl="https://airtable.com/embed/shrgbFokIRyDH8yHT?backgroundColor=orange&viewControls=on" />
        </div>
      </div>
    </section>
  );
}
