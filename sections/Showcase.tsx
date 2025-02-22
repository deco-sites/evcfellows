import { ImageWidget, RichText } from "apps/admin/widgets.ts";

export interface ShowcaseProps {
  title: string;
  list: RichText[];
  button: {
    text: string;
    href: string;
  };
  image: ImageWidget | string;
}

export default function Showcase() {
  return (
    <section class="container w-full flex flex-col items-center justify-center gap-7 px-6 py-8 col-start-1 col-span-1 row-start-1 row-span-1">
      <p>Na vc.clopedia você encontrará</p>

      <ul>
        <li>Mapeamento holístico e intuitivo</li>
        <li>Seleção de conteúdos curados para todos</li>
        <li>Conteúdos separados</li>
        <li>Definições para todos</li>
        <li>Ferramenta de gestão</li>
      </ul>
    </section>
  );
}
