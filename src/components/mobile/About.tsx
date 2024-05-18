import React from "react";

interface AboutProps {
  title: string;
  description: string;
}

const About: React.FC<AboutProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pb-[16px]">
        <div className="bg-[#EAF8F8] flex items-center justify-center w-[48px] h-[48px] rounded-full">
          <div className="bg-[#E1F4F4] flex items-center justify-center  w-[24px] h-[24px] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={21}
              height={18}
              fill="none"
            >
              <path
                fill="#002616"
                d="M.898 16.621v-2.8c0-.55.142-1.067.425-1.55.284-.483.675-.85 1.175-1.1.85-.433 1.809-.8 2.875-1.1 1.067-.3 2.242-.45 3.525-.45.5 0 .988.025 1.463.075.475.05.937.125 1.387.225l-1.75 1.75a3.005 3.005 0 0 0-.537-.05h-.563c-1.183 0-2.245.142-3.187.425-.942.283-1.713.592-2.313.925a.973.973 0 0 0-.5.85v.8h6.25l2 2H.898Zm13.55.4-3.45-3.45 1.4-1.4 2.05 2.05 5.05-5.05 1.4 1.4-6.45 6.45Zm-5.55-8.4c-1.1 0-2.041-.392-2.825-1.175-.783-.783-1.175-1.725-1.175-2.825S5.29 2.58 6.073 1.796C6.857 1.013 7.798.621 8.898.621s2.042.392 2.825 1.175c.784.783 1.175 1.725 1.175 2.825s-.391 2.042-1.175 2.825c-.783.783-1.725 1.175-2.825 1.175Zm0-2c.55 0 1.021-.196 1.413-.587.392-.392.587-.863.587-1.413s-.195-1.02-.587-1.412a1.926 1.926 0 0 0-1.413-.588c-.55 0-1.02.196-1.412.588a1.926 1.926 0 0 0-.588 1.412c0 .55.196 1.02.588 1.413.392.391.862.587 1.412.587Z"
              />
            </svg>{" "}
          </div>
        </div>
      </div>

      <h1 className="text-[#101828] dark:text-white pt-[10px] px-[30.5px] dm-sans text-[16px] font-bold text-center leading-[30px]">
        {title}
      </h1>
      <p className="text-[#475467] dark:text-white px-[17.5px] pt-[8px] text-[14px] text-center leading-[24px]">
        {description}
      </p>
    </div>
  );
};

export default About;
