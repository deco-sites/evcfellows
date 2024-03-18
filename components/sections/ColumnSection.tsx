import Image, {
  PartnersImage,
} from "deco-sites/evcfellows/components/ui/Image.tsx";

export interface Props {
  image?: PartnersImage;
  /**
   * @format html
   */
  title?: string;
  /**
   * @format html
   */
  description?: string;
  buttonUrl?: string;
  textButton?: string;
}

export default function ColumnSection(
  { image, title, description, textButton = "DOWNLOAD", buttonUrl }: Props,
) {
  const onlyDescription = !image && !title && !buttonUrl;

  return (
    <section class="bg-[#F1F1F1]">
      <div
        class={`container px-4 py-8 w-full flex flex-col items-center justify-center ${
          !onlyDescription && "gap-7"
        }`}
      >
        <div
          class="text-[#1E1E1E] text-bold text-5xl mb-4"
          dangerouslySetInnerHTML={{ __html: title ?? "" }}
        />
        <div
          class="text-[#1E1E1E]"
          dangerouslySetInnerHTML={{ __html: description ?? "" }}
        />

        <Image
          className="rounded-xl mb-4 cursor-pointer"
          image={image}
          preload
        />

        {buttonUrl && (
          <a
            class="p-6 bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] font-regular text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center"
            href={buttonUrl}
          >
            {textButton}
          </a>
        )}
      </div>
    </section>
  );
}
