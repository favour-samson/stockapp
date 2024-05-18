import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface DownloadButtonProps {
  imgSrc: StaticImageData;
  smallText: string;
  bigText: string;
  bgColor: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  imgSrc,
  smallText,
  bigText,
  bgColor,
}) => {
  return (
    <button
      className={`flex dm-sans items-center dark:border-[#DA8E23] dark:bg-[#131414] justify-center ${bgColor} border-2 text-white px-[10px] py-2 rounded-lg transition duration-300 ease-in-out `}
    >
      <span className="mr-2">
        <div className="w-full ">
          <Image src={imgSrc} alt="Download" width={30} height={20} />
        </div>
      </span>
      <span className="flex flex-col leading-5">
        <small className="md:text-xs text-[8px] text-left">{smallText}</small>
        <strong className="md:text-[20px] text-[14px]">{bigText}</strong>
      </span>
    </button>
  );
};

export default DownloadButton;
