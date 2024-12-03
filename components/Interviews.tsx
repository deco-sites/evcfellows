import Image from "apps/website/components/Image.tsx";
import { IImage } from "../sections/Blog.tsx";

export interface Props {
  photo: IImage;
  iconInterview: IImage;
  roleDate: string;
  theme: string;
  buttonText: string;
  invertPlacement?: boolean;
  redirectLink: string;
}

export default function Interview({
  photo,
  iconInterview,
  roleDate,
  theme,
  buttonText,
  invertPlacement,
  redirectLink,
}: Props) {
  return (
    <div
      className={`flex ${
        invertPlacement && "flex-row-reverse"
      }  flex-wrap lg:flex-nowrap gap-14 p-[20px] mt-[100px]`}
    >
      <a href={redirectLink} className="lg:min-w-[350px] w-full lg:w-auto">
        <Image
          src={photo.src}
          alt={photo.alt || "Photo"}
          width={photo.width || 100}
          height={photo.height || 100}
          className=""
        />
      </a>
      <div className="">
        <div className="flex gap-4">
          <p className="text-xs font-medium">{roleDate}</p>
          <Image
            src={iconInterview.src}
            alt={iconInterview.alt || "Interview Icon"}
            width={iconInterview.width || 50}
            height={iconInterview.height || 50}
            className=""
          />
        </div>
        <div>
          <h3 className="text-[28px] lg:text-[40px] mt-12">{theme}</h3>
        </div>
        <button className="mt-12 ">
          <a
          className="bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded"
          href={redirectLink}>{buttonText}</a>
        </button>
      </div>
    </div>
  );
}
