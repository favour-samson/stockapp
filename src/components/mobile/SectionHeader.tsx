import React from "react";

interface SectionHeaderProps {
  title: string;
  text: string;
}

const SectionHeaderMobile: React.FC<SectionHeaderProps> = ({ title, text }) => {
  return (
    <div className=" ">
      <p className="text-[8px] pb-[2px] dark:text-white   text-center leading-[24px] font-semibold text-[#131414]">
        {title}
      </p>
      <h2 className="text-[24px] pb-[10px] dark:text-white text-center dm-sans leading-[44px] font-bold text-[#131414]">
        {text}
      </h2>
    </div>
  );
};

export default SectionHeaderMobile;
