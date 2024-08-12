import type { PartnersImage } from "site/components/ui/Image.tsx";
import Image from "site/components/ui/Image.tsx";

export interface Props {
  title: string;
  images: PartnersImage[];
}

export default function Company({ title, images }: Props) {
  return (
    <section class="flex flex-col gap-2 py-8 bg-[#1B3F87]">
      <div class="w-full flex items-center justify-center">
        <h2 class="font-galano  font-bold text-white text-4xl mb-4">
          {title}
        </h2>
      </div>
      <ul class="container grid items-center grid-cols-3 md:grid-cols-6 gap-4">
        {images.map((image) => (
          <li class="font-roboto  w-full flex items-center justify-center">
            <Image image={image} preload key={image.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
