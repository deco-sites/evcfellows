import BannerUI, { Banner as IBanner } from "site/components/ui/Banner.tsx";

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

        <div class="absolute w-full flex flex-col items-center md:top-9 lg:top-14 px-4 py-2">
          <h2 class="font-galano text-center font-extrabold text-[32px] md:text-4xl lg:text-5xl text-[#D9D9D9] sm:mb-6 lg:mb-12 sm:mt-6">
            {title}
          </h2>

          <div class="w-full grid grid-cols-2 md:grid-cols-4 items-center text-center">
            {infoNumbers.map((infoNumber) => (
              <p key={infoNumber.title} class="flex flex-col mb-2">
                <span class="font-galano  text-[42px] md:text-5xl text-[#3BC9E1] font-bold">
                  {infoNumber.number}
                </span>
                <span class="font-roboto text-white  font-semibold text-[28px] md:text-3xl">
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
