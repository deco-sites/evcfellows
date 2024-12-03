import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Interview from "../components/Interviews.tsx";

export interface Props {
  title: string;
  description: string;
  bgImg: IImage;
  interviews: IInterview[];
  icon: IImage;
}

export interface IImage {
  src: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
}
/** @title {{theme}} */
export interface IInterview {
  photo: IImage;
  iconInterview: IImage;
  roleDate: string;
  theme: string;
  buttonText: string;
  invertPlacement?: boolean;
  redirectLink: string;
}

export default function Blog({
  title,
  description,
  bgImg,
  icon,
  interviews = [],
}: Props) {
  return (
    <div className="max-w-[1136px] mx-auto relative">
      <div className="absolute top-[-0px] z-[-1] mt-[60px] ml-[20px]">
        <Image
          className="max-w-[91%]"
          src={bgImg.src}
          alt={bgImg.alt || "Background image"}
          width={bgImg.width || 693}
          height={bgImg.height || 94}
        />
      </div>
      <div className="flex items-center gap-2 ml-[20px]">
        <Image
          src={icon.src}
          alt={icon.alt || "Icon"}
          width={icon.width || 12}
          height={icon.height || 12}
          className="w-3 h-3 mt-[100px] mb-[25px]"
        />
        <div className="text-sm font-medium  mt-[100px] mb-[25px]">{title}</div>
      </div>
      <h1 className="text-3xl font-normal ml-[20px]">{description}</h1>
      <div className="space-y-8"></div>
      {interviews.map((interview, index) => (
        <Interview key={index} {...interview} />
      ))}
    </div>
  );
}
