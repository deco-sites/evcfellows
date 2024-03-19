import Icon from "../ui/Icon.tsx";

export interface Props {
  title: string;
  columns: {
    title: string;
    links: {
      url: string;
      urlText: string;
    }[];
  }[];
}

export default function Footer({ columns, title = "Parceiros" }: Props) {
  return (
    <footer class="container">
      <section class="w-full flex justify-between py-6 px-3">
        <h3>{title}</h3>
      </section>
    </footer>
  );
}
