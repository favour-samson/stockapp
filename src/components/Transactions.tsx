import React from "react";
import TransactionItem from "./TransactionItems";
import { useTheme } from "next-themes";

const Transactions = () => {
  const { theme } = useTheme();
  return (
    <div className="dark:bg-[#131414] relative">
      {theme === "dark" ? <div className="blur-div2   absolute "></div> : null}

      <div className="md:mt-[280px]  mt-[130px] md:h-[492px] max-w-[1280px] mx-auto px-[11px] md:px-0">
        <div className="max-w-[768px] mx-auto md:h-[124px] pt-[40px]">
          <h1 className="text-primary-400 dm-sans text-[24px] dark:text-white leading-[31px] md:leading-[44px] text-center font-medium md:text-[36px] ">
            Total value of trades/transactions
          </h1>
          <p className="dark:text-white text-secondary-400 text-[8px] leading-[14px] text-center md:leading-[30px] dm-sans font-normal md:text-[20px] ">
            BGL Securities Limited drives the retail (and wholesale) stock
            broking strategy of the BGL Group.
          </p>
        </div>

        <div className="bg-secondary-300 dark:bg-[#131414] dark:border dark:border-[#FD891C] shadow-lg rounded-[16px] flex items-center justify-between md:h-[240px] mt-[48px] max-w-[1216px] mx-auto">
          <TransactionItem number="5+" text="Of years of Experience" />
          <TransactionItem number="$2.5+" text="Billions of transactions" />
          <TransactionItem number="2k+" text="Customers so far" />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
