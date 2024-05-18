import Image from "next/image";
import MobileApp from "@/images/app.png";
import darkMobileApp from "@/images/darkMobile.png";
import MobileAppSmall from "@/images/mobileappsmall.png";
import DownloadButton from "./DownloadButton";
import AppleLogo from "@/images/Applelogo.png";
import GoogleLogo from "@/images/Google Play logo_Light.png";
import { useTheme } from "next-themes";

const MobileSection = () => {
  const { theme } = useTheme();

  return (
    <div className="dark:bg-[#1C1F1F] py-[80px]">
      <section className="max-w-[1280px] px-[20.7px] md:px-0 mx-auto text-white">
        <div className="max-w-[1216px] dark:bg-[#131414] rounded-[24px] overflow-hidden items-center justify-between mx-auto flex flex-col lg:flex-row bg-primary-500 lg:h-[480px]">
          <div className="max-w-[608] mx-auto  pt-[31.44px] md:pt-0 flex flex-col justify-center md:p-4">
            <h2 className="md:text-[36px] px-[44.76px] md:px-0 text-center md:text-start text-[24px] leading-[31.84px] md:leading-[44px] dm-sans pb-[20px] font-bold">
              Start your amazing journey
            </h2>
            <p className="md:text-[20px] text-[14px] leading-[18px] md:leading-[30px] font-normal px-[23px] md:px-0">
              Don&apos;t worry, Advisor is there to guide you!
            </p>
            <div className="flex flex-col sm:flex-row  pt-[48px] px-[40.02px] md:px-0 pb-[21px] md:pb-0 w-full gap-[12px] justify-between md:justify-start">
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

          {/* Display this div only on mobile */}
          <div className="lg:hidden">
            <Image
              src={MobileAppSmall}
              alt="App Interface"
              width={284}
              height={343}
              className="object-cover"
            />
          </div>

          {/* Display this div only on desktop */}
          <div className="hidden lg:block">
            <Image
              src={theme === "dark" ? darkMobileApp : MobileApp}
              alt="App Interface"
              width={680}
              height={480}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileSection;
