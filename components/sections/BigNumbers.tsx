import BannerUI, {
  Banner as IBanner,
} from "deco-sites/evcfellows/components/ui/Banner.tsx";

interface InfoNumbers {
  number: string;
  title: string;
}

export interface Props {
  image: IBanner;
  title: string;
  infoNumbers: InfoNumbers[];
}

export default function BigNumbers({ image, title, infoNumbers }: Props) {
  return (
    <section>
      <div class="relative flex justify-center bg-[#1E1E1E] h-[356px] max-h-[456px]">
        <BannerUI banner={image} />

        <div class="absolute w-full flex flex-col items-center top-7 lg:top-14 px-4">
          <h2 class="font-galano  font-bold text-[#D9D9D9] text-5xl mb-8 lg:mb-15">
            {title}
          </h2>

          <div class="w-full grid grid-cols-2 md:grid-cols-4 items-center text-center">
            {infoNumbers.map((infoNumber) => (
              <p key={infoNumber.title} class="flex flex-col">
                <span class="font-roboto text-[50px] md:text-[70px] text-[#3BC9E1]  font-bold">
                  {infoNumber.number}
                </span>
                <span class="font-roboto text-white  font-normal text-3xl">
                  {infoNumber.title}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
