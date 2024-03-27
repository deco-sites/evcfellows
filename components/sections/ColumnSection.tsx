import Image, {
  PartnersImage,
} from "deco-sites/evcfellows/components/ui/Image.tsx";

export interface Props {
  image?: PartnersImage;
  imageUrl?: string;
  title?: string;
  whiteBg?: boolean;
  /**
   * @format html
   */
  description?: string;
  buttonUrl?: string;
  textButton?: string;
  secondButtonUrl?: string;
  secondTextButton?: string;
}

export default function ColumnSection(
  {
    image,
    title,
    description,
    whiteBg,
    textButton = "DOWNLOAD",
    buttonUrl,
    secondButtonUrl,
    secondTextButton = "ACESSO",
    imageUrl,
  }: Props,
) {
  const onlyDescription = !image && !title && !buttonUrl;

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
        <div
          class="font-roboto font-semibold text-center"
          dangerouslySetInnerHTML={{ __html: description ?? "" }}
        />

        <a href={imageUrl} target="_blank">
          <Image
            className="rounded-xl mb-4 cursor-pointer"
            image={image}
            preload
          />
        </a>

        {buttonUrl && (
          <a
            class="px-8 py-4 bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
            href={buttonUrl}
            target="_blank"
          >
            {textButton}
          </a>
        )}
        {secondButtonUrl && (
          <a
            class="px-8 py-4 bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
            href={secondButtonUrl}
            target="_blank"
          >
            {secondTextButton}
          </a>
        )}
      </div>
    </section>
  );
}
