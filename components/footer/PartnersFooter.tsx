import Divider from "site/components/footer/Divider.tsx";
import Image from "site/components/ui/Image.tsx";
import type { PartnersImage } from "site/components/ui/Image.tsx";

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
      <section class="container flex flex-col items-center py-6 px-3">
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
        {
          /* <span class="text-xs font-roboto font-thin mt-4 text-center">
          {footerText}
        </span> */
        }
      </section>
    </footer>
  );
}
