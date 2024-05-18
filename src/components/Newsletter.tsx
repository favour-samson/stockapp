import React from "react";
import Button from "./Button";
import Phone1 from "@/images/iPhone 12 Pro mockup (1).png";
import MoiblePhone1 from "@/images/iPhone 12 Pro mockup mobile1.png";
import Phone2 from "@/images/iPhone 12 Pro mockup.png";
import MobilePhone2 from "@/images/iPhone 12 Pro mockup mobile2.png";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="md:h-[672px]  py-[80px] px-[80px] dark:bg-[#131414]">
      <div className="max-w-[1280px]  flex-col md:flex-row flex items-center justify-between mx-auto ">
        <div className="w-full md:px-[32px] ">
          <h1 className="font-bold text-[24px] leading-[24px] md:text-[48px] dm-sans md:leading-[60px] text-primary-400 dark:text-white">
            Join 2,000+ subscribers
          </h1>
          <p className="pt-[24px] text-[14px] leading-[25px] max-w-[480px] font-normal md:text-[20px] md:leading-[30px] text-[#3B4B4B] dark:text-white">
            We’re still building. Subscribe for updates. No spam, we promise!
          </p>
          <div className="hidden md:block">
            <div className="flex items-center  pt-[40px] gap-[16px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-[12px] max-w-[368px] border h-[48px] rounded-[8px]"
              />
              <Button text="Subscribe" />
            </div>
            <p className="pt-[14px] font-normal text-[20px] leading-[20px] text-[#475467]">
              We care about your data in our{" "}
              <span className="underline">privacy policy.</span>
            </p>
          </div>

          <div className="block md:hidden ">
            <div className="flex  flex-col  pt-[40px] ">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-[12px] border w-full h-[48px]  rounded-[8px]"
              />
              <p className="pt-[14px] text-[11.69px] leading-[16px] font-normal md:text-[20px] md:leading-[20px] text-[#475467]">
                We care about your data in our{" "}
                <span className="underline">privacy policy.</span>
              </p>
            </div>
          </div>

          <div className=" md:hidden pt-[13.36px] pb-[43.66px] flex items-center justify-center">
            <Button text="Subscribe" />
          </div>
        </div>
        <div className="w-full md:block hidden ">
          <div className="bg-secondary-300 pt-[43.66px] md:pt-0  rounded-[8px] relative overflow-hidden max-w-[576px] h-[512px]">
            <Image
              alt="newsletter"
              src={Phone1}
              width={313.99}
              height={640}
              className="object-cover absolute left-[48px] top-[112px]"
            />
            <Image
              alt="newsletter"
              src={Phone2}
              width={400.99}
              height={640}
              className="object-cover absolute left-[205px] top-[48px]"
            />
          </div>
        </div>

        {/* <div className="w-full block md:hidden ">
          <div className="bg-secondary-300 pt-[43.66px] md:pt-0  mx-auto relative  w-full h-[323px]">
            <Image
              alt="newsletter"
              src={MoiblePhone1}
              width={198.42}
              height={404.44}
              className="object-cover absolute left-[48px] top-[112px]"
            />
            <Image
              alt="newsletter"
              src={MobilePhone2}
              width={198.42}
              height={404.44}
              className="object-cover absolute left-[205px] top-[48px]"
            />
          </div>
        </div> */}

        <div className="bg-secondary-300 block md:hidden pt-[43.66px] md:pt-0 mx-auto relative w-full h-[323px]">
          <Image
            alt="newsletter"
            src={MoiblePhone1}
            width={198.42}
            height={404.44}
            className="object-cover absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-150.21px, -102.22px)",
            }}
          />
          <Image
            alt="newsletter"
            src={MobilePhone2}
            width={198.42}
            height={404.44}
            className="object-cover absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-59.21px, -152.22px)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
