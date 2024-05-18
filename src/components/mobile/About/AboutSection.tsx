import React from "react";
import About from "./About";
import AboutImg from "@/images/aboutimgg.png";
import Image from "next/image";
import SectionHeaderMobile from "../SectionHeader";

const AboutSection = () => {
  return (
    <div className="px-[6px] md:px-0">
      <SectionHeaderMobile title="About" text="Your success is our success" />
      <div className="px-[23px]">
        <p className="text-[14px] text-center  leading-[24px] font-normal text-[#3B4B4B]">
          BGL Securities Limited is the securities trading platform of BGL. It
          also doubles as the vehicle for distributing all public offers. The
          company has the following licenses:
        </p>
      </div>
      <div className="pt-[40px]">
        <About
          title="Broker/Dealer with the Securities"
          description="Registered as Broker/Dealer with the Securities and Exchange Commission."
        />
      </div>
      <div className="pt-[48px]">
        <About
          title="Issuing House with the Securities"
          description="Registered as an Issuing House with the Securities and Exchange Commission."
        />
      </div>
      <div className="pt-[48px] pb-[19px]">
        <About
          title="Dealing member"
          description="Registered as dealing member of the Nigerian Stock Exchange."
        />
      </div>
      <div className="pb-[75.11px]">
        <div className=" mx-auto rounded-[4.31px] w-[310px] h-[301px] flex items-center justify-center bg-gradient-to-b from-[#008080] to-[#23A6A6]">
          <Image src={AboutImg} alt="about" width={402.03} height={268.02} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
