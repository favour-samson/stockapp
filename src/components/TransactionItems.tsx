import React from "react";

interface TransactionItemProps {
  number: string;
  text: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ number, text }) => {
  return (
    <div className=" p-4 w-[341px] md:h-[112px] text-center">
      <p className="dark:text-white text-primary-300 dm-sans font-bold md:text-[60px] text-[21px] leading-[25px] md:leading-[72px]">
        {number}
      </p>
      <p className="dark:text-white text-gray-600 text-[8px] md:text-[18px] leading-[10px] md:leading-[28px]">
        {text}
      </p>
    </div>
  );
};

export default TransactionItem;
