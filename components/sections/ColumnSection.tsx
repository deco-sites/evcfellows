import Image, {
  PartnersImage,
} from "deco-sites/evcfellows/components/ui/Image.tsx";

export interface Props {
  image?: PartnersImage;
  imageUrl?: string;
  title?: string;
  /**
   * @format html
   */
  whiteBg?: boolean;
  description?: string;
  buttonUrl?: string;
  textButton?: string;
}

export default function ColumnSection(
  {
    image,
    title,
    description,
    whiteBg,
    textButton = "DOWNLOAD",
    buttonUrl,
    imageUrl,
  }: Props,
) {
  const onlyDescription = !image && !title && !buttonUrl;

  return (
    <section class={`${whiteBg ? "bg-white" : "bg-[#F1F1F1]"}`}>
      <div
        class={`container px-32 py-8 w-full flex flex-col items-center justify-center text-[#3D3D3D] ${
          !onlyDescription && "gap-7"
        }`}
      >
        <h1 class="font-galano font-bold text-5xl">
          {title}
        </h1>
        <div
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
            class="px-8 py-4 bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] font-regular text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
            href={buttonUrl}
            target="_blank"
          >
            {textButton}
          </a>
        )}
      </div>
    </section>
  );
}
