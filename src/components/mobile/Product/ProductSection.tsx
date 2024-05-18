import React from "react";
import Image from "next/image";
import ProductImage from "@/images/productmobile.png";
import SectionHeaderMobile from "../SectionHeader";
const ProductSectionMobile = () => {
  return (
    <div className="px-[6px] md:px-0">
      <SectionHeaderMobile title="Product" text="Access wide range of stocks" />
      <div className="pb-[29px] pt-[5.5px]">
        <p className="text-[14px] dark:text-white px-[23px] text-center  leading-[24px] font-normal text-[#3B4B4B]">
          Stocks are the cornerstone of modern investing, offering you the
          opportunity to own a piece of some of the world&apos;s most
          influential companies. At [Your Trading Platform], we make stock
          trading accessible, intuitive, and rewarding.
        </p>
        <p className="text-[14px] px-[23px] dark:text-white text-center  leading-[24px] font-normal text-[#3B4B4B]">
          Access a wide range of stocks from various sectors and markets,
          including technology, healthcare, finance, and more. Invest in
          companies you believe in and see your portfolio grow. Stay updated
          with live stock prices, charts, and news. Make informed decisions with
          access to real-time market information.
        </p>
      </div>
      <div className=" mx-auto  w-[310px] h-[301px] ">
        <Image src={ProductImage} alt="about" className="object-cover" />
      </div>
    </div>
  );
};

export default ProductSectionMobile;
