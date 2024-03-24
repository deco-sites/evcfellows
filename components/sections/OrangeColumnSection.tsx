import Image, {
  PartnersImage,
} from "deco-sites/evcfellows/components/ui/Image.tsx";

export interface Props {
  image?: PartnersImage;
  buttonUrl?: string;
  imageUrl?: string;
  textButton?: string;
}

export default function OrangeColumnSection(
  { image, textButton = "DOWNLOAD", buttonUrl, imageUrl }: Props,
) {
  return (
    <section class="bg-[#F1F1F1]">
      <div class="relative container px-4 pb-8 w-full flex flex-col items-center">
        <a href={imageUrl} target="_blank">
          <Image
            className="rounded-xl mb-4 lg:-mt-28 cursor-pointer"
            image={image}
            preload
          />
        </a>

        {buttonUrl && (
          <a
            class="p-6 bg-gradient-to-r from-[#DD852F] to-[#CDAD6E] rounded-[10px] text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
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
