export interface Props {
  title?: string;
  whiteBg?: boolean;
}

export default function ColumnSection(
  {
    title,
    whiteBg,
  }: Props,
) {
  const onlyDescription = !title;

  return (
    <section class={`px-32 ${whiteBg ? "bg-white" : "bg-[#F1F1F1]"}`}>
      <div
        class={`container py-8 w-full flex flex-col items-center justify-center text-[#3D3D3D] ${
          !onlyDescription && "gap-7"
        }`}
      >
        <h1 class="font-galano font-extrabold text-4xl lg:text-5xl text-center">
          {title}
        </h1>

        <div class="w-full rounded-lg overflow-hidden">
          <iframe
            src="https://airtable.com/embed/shrgbFokIRyDH8yHT?backgroundColor=orange&viewControls=on"
            class="w-full h-screen"
            frameborder="0"
          >
          </iframe>
        </div>
      </div>
    </section>
  );
}
