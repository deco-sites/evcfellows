import type { PartnersImage } from "deco-sites/evcfellows/components/ui/Image.tsx";
import Image from "deco-sites/evcfellows/components/ui/Image.tsx";

export interface Props {
	title: string;
  images: PartnersImage[];
}

export default function Company({ title, images }: Props) {
  return (
    <section class="flex flex-col gap-2 py-8 bg-[#1B3F87]">
		<div class="w-full flex items-center justify-center">
		<h2 class="font-sora font-bold text-white text-[40px] md:text-[50px] mb-4">{title}
		</h2>
		</div>
		<div class="container grid grid-cols-3 md:grid-cols-6 gap-4">
      {images.map((image) => (
		  <div class="flex justify-center w-full">
          <Image image={image} preload key={image.alt} />
        </div>
      ))}
	  </div>
    </section>
  );
}
