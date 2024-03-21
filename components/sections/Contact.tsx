import { useRef } from "preact/hooks";
import Icon, { AvailableIcons } from "../ui/Icon.tsx";
import Input from "../ui/Input.tsx";

export interface Props {
  contactEmail: string;
  links: {
    iconId: AvailableIcons;
    url: string;
    title: string;
  }[];
}

function Contact(
  { contactEmail, links }: Props,
) {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputContentRef = useRef<HTMLTextAreaElement>(null);

  return (
    <section id="contact" class="flex justify-center">
      <div class="flex flex-col justify-between">
        <h5 class="font-galano font-bold text-5xl text-[#3D3D3D] mt-4 mb-9">
          Entre em contato
        </h5>

        <form class="flex flex-col gap-6">
          <Input
            name="name"
            placeholder="Insira seu nome aqui"
            valueRef={inputNameRef}
            iconId="InputUser"
          />
          <Input
            name="email"
            placeholder="Insira seu email aqui"
            valueRef={inputEmailRef}
            iconId="InputEmail"
          />
          <textarea
            ref={inputContentRef}
            placeholder="Mensagem..."
            class="py-4 text-sm rounded-[3px] text-gray-500 bg-white pl-4 w-full placeholder:text-gray-500 border-[2px] border-black-900 min-h-[218px] "
          />

          <button class="w-full bg-[#3BC9E1] text-white font-roboto font-bold text-8 transition hover:opacity-90 py-[10px] uppercase mb-4">
            Enviar
          </button>
        </form>

        <div class="flex gap-4 my-4 items-center justify-center">
          {links?.map((link) => (
            <a href={link.url} key={link.iconId} title={link.title}>
              <Icon
                id={link.iconId}
                width={48}
                height={48}
                strokeWidth={0}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
