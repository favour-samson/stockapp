import React from "react";
import Button from "./Button";
import FooterLogo from "@/images/Featured icon.png";
import Image from "next/image";
import Link from "next/link";
import DownloadButton from "./DownloadButton";
import AppleLogo from "@/images/Applelogo.png";
import GoogleLogo from "@/images/Google Play logo_Light.png";
import { RxTwitterLogo } from "react-icons/rx";
import { TbBrandLinkedin } from "react-icons/tb";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div className=" mt-[110.22px] md:mt-0 bg-primary-500">
      <div className="max-w-[1440px] md:h-[758px] ">
        <div className="max-w-[1280px] px-[32px] mx-auto">
          <div className="max-w-[1216px] pt-[64px] flex flex-col items-center md:h-[270px]">
            <div className="max-w-[823px]  md:h-[76px]">
              <h1 className="font-bold text-center md:text-[30px] text-[24px] leading-[32px] dm-sans md:leading-[38px] text-white">
                We have consistently maintained the top five positions in terms
                of volume and value of securities traded.
              </h1>
            </div>
            <p className="pt-[16px] text-[16px] leading-[24px] pb-[40px] text-center font-normal md:text-[20px] md:leading-[30px] text-[#AFD9D9]">
              It also doubles as the vehicle for distributing all public offers.
            </p>

            <button className=" bg-white md:bg-primary-200 md:text-white w-[142px] h-[44px] text-primary-500 px-4 py-2 rounded-lg my-4">
              Start trading
            </button>
          </div>

          <div className="border-b mt-[64px] border-primary-200 max-w-[1216px] h-1" />
        </div>

        <div className="max-w-[1280px]  pt-[64px] px-[32px] mx-auto">
          <div className="max-w-[1216px] flex flex-col md:flex-row items-center md:items-start  md:justify-between justify-center md:h-[192px]">
            <div>
              <div className="flex flex-col md:flex-row  pb-[32px] items-center gap-[12px] ">
                <Image src={FooterLogo} width={32} height={32} alt="footer" />
                <h2 className="font-bold text-[27px] dm-sans leading-[26px] text-white">
                  BGL
                </h2>
              </div>
              <div className="md:max-w-[501px] max-w-[200px] text-center md:text-start md:h-[72px]">
                <p className="font-normal md:text-[16px] text-[15px] leading-[39px]  md:leading-[24px] text-secondary-300">
                  BGL securities Ltd has earned a sterling reputation in the
                  market place having participated in landmark block trades and
                  also acted as stockbroker to the issue for many public offers.
                </p>
              </div>

              <ul className="flex flex-col underline underline-offset-1 md:flex-row text-[15px] md:text-[16px] pt-[32px]  font-semibold items-center text-[#96CCCC]  w-full gap-[32px]">
                <li className="">
                  <Link href="/">About Us</Link>
                </li>
                <li className="">
                  <Link href="/">FAQs</Link>
                </li>
                <li className="">
                  <Link href="/">Trading Markets</Link>
                </li>
                <li className="">
                  <Link href="/">Contact Us</Link>
                </li>
                <li className="">
                  <Link href="/">Help</Link>
                </li>
                <li className="">
                  <Link href="/">Privacy</Link>
                </li>
              </ul>
            </div>

            <div className="pt-[30.78px]">
              <h3 className="font-medium text-[16px] pb-[16px] leading-[24px] text-white">
                Get the app
              </h3>
              <div className="flex flex-col gap-[18px]">
                <DownloadButton
                  imgSrc={AppleLogo}
                  smallText="Download on the"
                  bigText="App Store"
                  bgColor="bg-primary-500"
                />
                <DownloadButton
                  imgSrc={GoogleLogo}
                  smallText="Get IT ON"
                  bigText="Google Play"
                  bgColor="bg-primary-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] pt-[200.76px]  md:pt-[64px] px-[32px] mx-auto">
          <div className="max-w-[1216px]  flex-col md:flex-row  items-center justify-center flex md:items-end md:justify-between md:h-[56px]">
            <p className=" font-normal text-center md:text-start text-[16px] leading-[24px] text-[#AFD9D9]">
              © 2024 BGL_Securities. All rights reserved.
            </p>
            <div className="flex gap-[24px] pt-[31px] md:pt-0 pb-[89.92px] md:pb-0">
              <RxTwitterLogo size={24} color="#AFD9D9" />
              <TbBrandLinkedin size={24} color="#AFD9D9" />
              <CiFacebook size={24} color="#AFD9D9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
