import React from "react";
import Image from "next/image";
import AboutImg from "@/images/about.png";
import darkAboutImg from "@/images/darkAbout.png";
import SectionHeader from "./SectionHeader";
import { useTheme } from "next-themes";

const AboutSection = () => {
  const { theme } = useTheme();
  return (
    <div className="h-[834px] dark:bg-[#131414] pt-[80px]">
      <div className="px-[32px] max-w-[1280px] mx-auto h-[730px]">
        <SectionHeader title="About Us" text="Unlock the World of Investment" />

        <div className="flex flex-col  justify-between md:flex-row">
          <div className="w-[527px] text-[20px] leading-[30px] font-normal">
            <p className="text-[#131414] dark:text-white mb-4">
              We are one of Africa&apos;s leading Securities Trading and Dealing
              Companies headquartered in Lagos, Nigeria. We provide world
              dealing services and products to clients BGL Securities leverages
              on the distinctive BGL brand, harnessing its core competence and
              unique human resources to deliver excellent and value added
              services to clients.
            </p>
            <p className="text-[#131414] dark:text-white mb-4">
              We provide world class Securities and Dealing services to our
              clients made up of local and International retail, and High Net
              Worth Investors as well as Local and International Institutional
              Investors. Our success over the years can be attributed to our
              values and principles which put our clients at the centre of
              everything we do and the level of professionalism that permeates
              right through the organisation. We are driven to provide best in
              class products and services and our organisational culture
              promotes an environment of teamwork to ensure that we all work to
              achieve the same collective goal of maximising value for all our
              stakeholders.
            </p>
          </div>
          <div className="">
            <Image
              src={theme === "dark" ? darkAboutImg : AboutImg}
              alt="Graphical Representation"
              width={theme === "dark" ? 576 : 650}
              height={560}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
