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
  /** @title Logos de Shared Vision */
  logoSharedVision: PartnersImage;
  sharedVisionLogos: PartnersImage[];
  /** @title Logos de Initiative Partner */
  logoInitiativePartner: PartnersImage;
  initiativePartnersLogos: PartnersImage[];
  /** @title Logos de Community Partner */
  logoCommunityPartner: PartnersImage;
  communityPartnersLogos: PartnersImage[];
  /** @title Logos de Knowledge Partner */
  logoKnowledgePartner: PartnersImage;
  knowledgePartinersLogos: PartnersImage[];
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
  {
    title = "Partners",
    logoSharedVision,
    sharedVisionLogos,
    logoInitiativePartner,
    initiativePartnersLogos,
    logoCommunityPartner,
    communityPartnersLogos,
    logoKnowledgePartner,
    knowledgePartinersLogos,
  }: Props,
) {
  return (
    <footer class="w-full border-t shadow">
      <section class="container flex flex-col items-center pt-6 pb-4 px-3">
        <h3 class="font-galano font-bold text-[#3D3D3D] text-2xl mb-4">
          {title}
        </h3>
        <div class="w-full flex flex-row items-center justify-between">
          <Image className="w-[300px]" image={logoSharedVision} preload />
          <div className="divider divider-horizontal mr-8" />
          <ul class="w-full flex flex-row flex-wrap items-center gap-6">
            {sharedVisionLogos.map((logo) => (
              <li class="flex items-center justify-center">
                <Image
                  className="max-w-[100px] max-h-[85px]"
                  image={logo}
                  preload
                  key={logo.alt}
                />
              </li>
            ))}
          </ul>
        </div>
        <Divider />

        <div class="w-full flex flex-row items-center justify-between">
          <Image
            className="w-[300px]"
            image={logoInitiativePartner}
            preload
          />
          <div className="divider divider-horizontal mr-8" />
          <ul class="w-full flex flex-row flex-wrap items-center gap-6">
            {initiativePartnersLogos.map((logo) => (
              <li class="flex items-center justify-center">
                <Image
                  className="max-w-[100px] max-h-[85px]"
                  image={logo}
                  preload
                  key={logo.alt}
                />
              </li>
            ))}
          </ul>
        </div>
        <Divider />

        <div class="w-full flex flex-row items-center justify-between">
          <Image
            className="w-[300px]"
            image={logoCommunityPartner}
            preload
          />
          <div className="divider divider-horizontal mr-8" />
          <ul class="w-full flex flex-row flex-wrap items-center gap-6">
            {communityPartnersLogos.map((logo) => (
              <li class="flex items-center justify-center">
                <Image
                  className="max-w-[100px] max-h-[85px]"
                  image={logo}
                  preload
                  key={logo.alt}
                />
              </li>
            ))}
          </ul>
        </div>
        <Divider />

        <div class="w-full flex flex-row items-center justify-between">
          <Image
            className="w-[300px]"
            image={logoKnowledgePartner}
            preload
          />
          <div className="divider divider-horizontal mr-8" />
          <ul class="w-full flex flex-center flex-wrap items-center gap-6">
            {knowledgePartinersLogos.map((logo) => (
              <li class="flex items-center justify-center">
                <Image
                  className="max-w-[100px] max-h-[85px]"
                  image={logo}
                  preload
                  key={logo.alt}
                />
              </li>
            ))}
          </ul>
        </div>
        <span class="text-xs font-roboto font-thin mt-4">
          Todos os nomes de produtos e empresas são marcas comerciais™ ou marcas
          registradas® de seus respectivos proprietários. O uso deles não
          implica qualquer afiliação ou endosso por parte deles.
        </span>
      </section>
    </footer>
  );
}
