import Image, {
  PartnersImage,
} from "deco-sites/evcfellows/components/ui/Image.tsx";

export interface Props {
  image: PartnersImage;
  name: string;
  position: string;
  /**
   * @format html
   */
  text: string;
}

export default function OpinionSection(
  { image, name, position, text }: Props,
) {
  return (
    <section>
      <div class="container px-4 py-8 w-full flex items-center justify-center text-[#3D3D3D]">
        <div class="w-full max-w-[820px] px-6 py-4 gap-4 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center border border-[#3D3D3D] rounded-xl">
          <div
            class="font-regular text-lg max-w-[540px]"
            dangerouslySetInnerHTML={{ __html: text ?? "" }}
          />
          <div class="flex flex-col items-center justify-center gap-2 max-w-[295px]">
            <Image
              className="rounded-full shadow w-[88px] h-[88px]"
              image={image}
              preload
            />
            <span class="font-roboto font-semibold text-2xl">{name}</span>
            <span class="font-roboto font-regular text-sm">{position}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
