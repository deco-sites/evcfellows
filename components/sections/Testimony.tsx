import Slider from "deco-sites/evcfellows/components/ui/Slider.tsx";
import SliderJS from "deco-sites/evcfellows/components/ui/SliderJS.tsx";
import Image, { PartnersImage } from "../ui/Image.tsx";
import { useId } from "preact/hooks";
import Icon from "../ui/Icon.tsx";

export interface Props {
  title: string;
  testimonials: {
    image: PartnersImage;
    title: string;
    subtitle: string;
    content: string;
  }[];
}

function Testimony({ title, testimonials }: Props) {
  const id = useId();

  return (
    <section class="container max-w-screen" id={id}>
      <div class="w-full flex flex-col items-center px-4 py-8">
        <h1 class="font-galano font-extrabold text-4xl lg:text-5xl text-[#3D3D3D] text-center mb-6">
          {title}
        </h1>

        <div class="relative flex max-w-[308px] sm:max-w-[400px] md:max-w-[920px]">
          <Slider class="carousel gap-6">
            {testimonials?.map((testimonial, index) => (
              <Slider.Item
                index={index}
                class="carousel-item w-full justify-center"
              >
                <div class="w-full">
                  <Image
                    image={testimonial.image}
                    className="rounded-t-xl rounded-b-0"
                  />
                  <div class="px-12 flex flex-col justify-center bg-gray-100 rounded-b-xl rounded-r-0 md:rounded-r-xl relative py-8">
                    <p class="font-roboto text-gray-500 text-3xl mb-1">
                      {testimonial.title}
                    </p>
                    <span class="font-roboto text-gray-500 text-xl mb-4">
                      {testimonial.subtitle}
                    </span>

                    <p class="font-roboto italic text-gray-500 text-base md:text-xl leading-6 md:leading-8">
                      {testimonial.content}
                    </p>

                    <div class="absolute -top-8 right-8">
                      <Icon size={70} id="Testimonial" strokeWidth={0} />
                    </div>
                  </div>
                </div>
              </Slider.Item>
            ))}
          </Slider>

          {testimonials?.length && (
            <>
              <Slider.PrevButton class="absolute -left-[35px] lg:-left-[2.5rem]  md:left-0 top-1/2 btn btn-circle btn-outline">
                <Icon size={30} id="ChevronLeft" strokeWidth={3} />
              </Slider.PrevButton>

              <Slider.NextButton class="absolute -right-[35px] md:-right-[2.5rem] md:lgright-0 top-1/2 btn btn-circle btn-outline">
                <Icon size={30} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </>
          )}
        </div>

        <SliderJS infinite rootId={id}></SliderJS>
      </div>
    </section>
  );
}

export default Testimony;
