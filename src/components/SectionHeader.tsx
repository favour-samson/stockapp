import React from "react";

interface SectionHeaderProps {
  title: string;
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, text }) => {
  return (
    <div>
      <p className="text-[16px] dark:text-white leading-[24px] font-semibold text-[#131414]">
        {title}
      </p>
      <h2 className="text-[36px] dm-sans dark:text-white leading-[44px] font-bold text-[#131414]">
        {text}
      </h2>
    </div>
  );
};

export default SectionHeader;
