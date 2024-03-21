import Divider from "deco-sites/evcfellows/components/footer/Divider.tsx";
import Image from "deco-sites/evcfellows/components/ui/Image.tsx";
import type { PartnersImage } from "deco-sites/evcfellows/components/ui/Image.tsx";

// interface PartnersImage {
// 	partnerLogo: LiveImage;
//   width?: number;
//   height?: number;
// }

export interface Props {
  title: string;
  partnersLogos: PartnersImage[];
  logoSharedVision: PartnersImage;
}

// function PartnerSection({ partnerLogo }: PartnersImage) {
//   return (
// 	<>
// 	<div>
// 	  <Image image={partnerLogo} />
// 	</div>
// 	<Divider />
// 	</>
//   );
// }

export default function Footer(
  { title = "Partners", partnersLogos, logoSharedVision }: Props,
) {
  return (
    <footer class="w-full border-t shadow">
      <section class="container flex flex-col items-center py-6 px-3">
        <h3 class="font-galano font-bold text-[#3D3D3D] text-2xl mb-4">
          {title}
        </h3>

        <ul class="w-full flex flex-row justify-between items-center gap-4">
          <Image className="max-w-[300px]" image={logoSharedVision} preload />
          {partnersLogos.map((logo) => (
            <li class="font-roboto  w-full flex items-center justify-center">
              <Image
                className="max-w-[300px] max-h-[85px]"
                image={logo}
                preload
                key={logo.alt}
              />
            </li>
          ))}
        </ul>
        <Divider />
      </section>
    </footer>
  );
}
