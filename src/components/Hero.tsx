import React from "react";
import { FaArrowRight } from "react-icons/fa";
import DownloadButton from "./DownloadButton";
import AppleLogo from "@/images/Applelogo.png";
import GoogleLogo from "@/images/GooglePlaylogo.png";
import herePlayer from "@/images/Video player.png";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import { useTheme } from "next-themes";
const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className=" relative ">
      {theme === "dark" ? (
        <div className="blur-div left-[-38px] top-[-50px] absolute"></div>
      ) : null}

      <div className=" hero h-[400px] dark:bg-[#131414] px-[19px] md:px-0 md:h-[650px] bg-[#EFF9F9]  pt-[39px]">
        <div className="max-w-[367px]  dark:bg-[#131414] flex  justify-between md:justify-start pr-[7.33px] items-center mx-auto bg-secondary-500 dark:border-[#FD891C] rounded-[16px] h-[32px] border-primary-500 border-[1.5px]">
          <div className="w-[107px] flex items-center justify-center  text-center ml-[4px] mr-[12px]  rounded-[16px] h-[24px] dark:border-[#FD891C] border-primary-500 border-[1.5px]">
            <p className="dark:text-white  text-primary-500 text-center font-medium md:text-[14px] text-[8px]">
              New feature
            </p>
          </div>
          <div className="flex items-center justify-between w-[234px]">
            <span className="dark:text-white text-primary-500 font-medium md:text-[13px] text-[8px] ">
              Check out the new dashboard
            </span>
            <FaArrowRight color="#96CCCC" />
          </div>
        </div>

        <div className="max-w-[1024px] pt-[16px] mx-auto">
          <h1 className="dark:text-white text-primary-500 text-center font-bold md:leading-[72px] text-[32px] leading-[32px]  md:text-[60px] dm-sans">
            Navigate the dynamic world of financial markets.
          </h1>
        </div>
        <div className="max-w-[768px] pt-[24px] mx-auto">
          <p className="dark:text-white text-primary-500 text-[10px] leading-[16px] text-center font-normal md:leading-[30px]  md:text-[20px]">
            Our mission is to empower you with the tools and knowledge to take
            control of your financial future success should be within reach for
            everyone.
          </p>
        </div>
        <div className=" hidden md:flex  max-w-[340px] pt-[48px] mx-auto items-center justify-between">
          <DownloadButton
            imgSrc={AppleLogo}
            smallText="Download on the"
            bigText="App Store"
            bgColor="bg-black"
          />
          <DownloadButton
            imgSrc={GoogleLogo}
            smallText="Get IT ON"
            bigText="Google Play"
            bgColor="bg-black"
          />
        </div>
      </div>

      <div className="absolute md:h-[432px]  rounded-md overflow-hidden z-20 bottom-[-115px] la:bottom-[-170px] md:bottom-[-270px] left-1/2 transform -translate-x-1/2 w-full max-w-[768px] ">
        <Image
          alt="vido"
          src={herePlayer}
          width={768}
          height={432}
          className=""
        />
      </div>
      {/* <VideoPlayer /> */}

      {theme === "light" && (
        <div className="md:hidden block">
          <div className="absolute  bottom-[-10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={154}
              height={43}
              fill="none"
            >
              <path
                fill="#DAECEC"
                d="M.543 19.407 154 .22v23.384L.543 42.79V19.407Z"
              />
            </svg>
          </div>
          <div className="absolute bottom-[-45px]">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={37}
              height={43}
              fill="none"
            >
              <path
                fill="#96CCCC"
                d="M-117 19.188 36.457 0v23.384L-117 42.572V19.188Z"
              />
            </svg>
          </div>
          <div className="absolute right-0 bottom-[80px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={121}
              height={38}
              fill="none"
            >
              <path
                fill="#96CCCC"
                d="M.59 16.934 136.016 0v20.636L.59 37.57V16.934Z"
              />
            </svg>
          </div>
          <div className="absolute right-0 bottom-[53px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={172}
              height={46}
              fill="none"
            >
              <path
                fill="#AFD9D9"
                d="M0 25.046 197.336.279v20.637L0 45.682V25.046Z"
              />
            </svg>
          </div>
          <div className="absolute right-0 bottom-[40px]">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={33}
              height={38}
              fill="none"
            >
              <path
                fill="#DAECEC"
                d="M.29 17.012 135.715.078v20.637L.289 37.648V17.012Z"
              />
            </svg>
          </div>
        </div>
      )}

      <div className="hidden md:block left2 z-10 absolute bottom-[-80px]">
        {" "}
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={387}
            height={130}
            fill="none"
          >
            <path
              fill="url(#a)"
              fillOpacity={0.6}
              d="M-80 58.814 386.667.462v71.11L-80 129.926V58.814Z"
            />
            <defs>
              <linearGradient
                id="a"
                x1={153.333}
                x2={153.333}
                y1={0.462}
                y2={129.925}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#043621" />
                <stop offset={1} stopColor="#5B6F6F" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={387}
            height={130}
            fill="none"
          >
            <path
              fill="#DAECEC"
              d="M-80 58.813 386.667.46v71.11L-80 129.925V58.813Z"
            />
          </svg>
        )}
      </div>
      <div className="hidden md:block left1 absolute bottom-[-172px] ">
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={218}
            height={131}
            fill="none"
          >
            <path
              fill="url(#b)"
              fillOpacity={0.5}
              d="M-248.891 59.023 217.776.67v71.11l-466.667 58.353V59.023Z"
            />
            <defs>
              <linearGradient
                id="b"
                x1={-15.557}
                x2={-15.557}
                y1={0.671}
                y2={130.134}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DE8D1C" />
                <stop offset={1} stopColor="#4A3D2A" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={218}
            height={131}
            fill="none"
          >
            <path
              fill="#FD891C"
              fillOpacity={0.24}
              d="M-248.889 59.022 217.778.67v71.111l-466.667 58.352v-71.11Z"
            />
          </svg>
        )}
      </div>
      <div className="hidden md:block right1 absolute right-0 bottom-[84px]">
        {" "}
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={423}
            height={130}
            fill="none"
          >
            <path
              fill="url(#c)"
              fillOpacity={0.5}
              d="M.777 58.703 467.444.35v71.112L.777 129.814V58.703Z"
            />
            <defs>
              <linearGradient
                id="c"
                x1={234.111}
                x2={234.111}
                y1={0.35}
                y2={129.814}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DE8D1C" />
                <stop offset={1} stopColor="#4A3D2A" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={423}
            height={130}
            fill="#f2dec4"
          >
            <path
              fill="#f2dec4"
              // fillOpacity={0.24}
              d="M.777 58.703 467.444.35v71.112L.777 129.814V58.703Z"
            />
          </svg>
        )}
      </div>
      <div className="hidden md:block right2 absolute right-0  bottom-[-10px]">
        {" "}
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={600}
            height={158}
            fill="none"
          >
            <path
              fill="url(#d)"
              fillOpacity={0.6}
              d="M0 86.136 680 .794v71.11L0 157.248v-71.11Z"
            />
            <defs>
              <linearGradient
                id="d"
                x1={340}
                x2={340}
                y1={0.794}
                y2={157.247}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#043621" />
                <stop offset={1} stopColor="#5B6F6F" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={600}
            height={158}
            fill="none"
          >
            <path
              fill="#AFD9D9"
              d="M0 86.137 680 .795v71.11L0 157.249v-71.11Z"
            />
          </svg>
        )}
      </div>
      <div className=" hidden md:block right3 absolute right-0 bottom-[-20px]">
        {" "}
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={120}
            height={130}
            fill="none"
          >
            <path
              fill="url(#f)"
              fillOpacity={0.5}
              d="M0 58.357 466.667.005v71.11L0 129.469V58.357Z"
            />
            <defs>
              <linearGradient
                id="f"
                x1={233.333}
                x2={233.333}
                y1={0.005}
                y2={129.468}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DE8D1C" />
                <stop offset={1} stopColor="#4A3D2A" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={120}
            height={130}
            fill="none"
          >
            <path
              fill="#DAECEC"
              d="M0 58.356 466.667.004v71.11L0 129.468V58.356Z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Hero;
