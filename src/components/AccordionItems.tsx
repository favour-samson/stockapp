import React, { useState } from "react";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div className="">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={onClick}
      >
        <span className="font-medium dark:text-white text-[12.38px] md:text-[18px] md:leading-[28px] leading-[24.75px] text-primary-400">
          {title}
        </span>
        <div className="hidden md:block">
          <span>
            {isOpen ? (
              <IoIosRemoveCircleOutline size={24} color="#6B7878" />
            ) : (
              <IoIosAddCircleOutline size={24} color="#6B7878" />
            )}
          </span>
        </div>

        <div className="block md:hidden">
          <span>
            {isOpen ? (
              <IoIosRemoveCircleOutline size={17} color="#6B7878" />
            ) : (
              <IoIosAddCircleOutline size={17} color="#6B7878" />
            )}
          </span>
        </div>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="font-normal dark:text-[#D9E2E2] text-[16px] leading-[24px] text-[#3B4B4B]">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
