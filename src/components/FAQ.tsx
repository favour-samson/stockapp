import React from "react";
import Accordion from "./Accordion";
import SectionHeaderMobile from "./mobile/SectionHeader";

const faqData = [
  {
    title: "How do I get started with trading on BGL SECURITIES?",
    content:
      "To get started, you need to create an account on our platform. Simply sign up, complete the KYC process, deposit funds into your account, and start trading. Our platform offers user-friendly tools and educational resources to help you along the way.",
  },
  {
    title: "What markets can I trade on?",
    content:
      "To get started, you need to create an account on our platform. Simply sign up, complete the KYC process, deposit funds into your account, and start trading. Our platform offers user-friendly tools and educational resources to help you along the way.",
  },
  {
    title: "Is BGL_SECURITIES secure?",
    content:
      "To get started, you need to create an account on our platform. Simply sign up, complete the KYC process, deposit funds into your account, and start trading. Our platform offers user-friendly tools and educational resources to help you along the way.",
  },
  {
    title: "Do you offer educational resources for traders?",
    content:
      "To get started, you need to create an account on our platform. Simply sign up, complete the KYC process, deposit funds into your account, and start trading. Our platform offers user-friendly tools and educational resources to help you along the way.",
  },
  {
    title: "What are the fees associated with trading on?",
    content:
      "To get started, you need to create an account on our platform. Simply sign up, complete the KYC process, deposit funds into your account, and start trading. Our platform offers user-friendly tools and educational resources to help you along the way.",
  },
  {
    title: "What are the trading hours on?",
    content:
      "To get started, you need to create an account on our platform. Simply sign up, complete the KYC process, deposit funds into your account, and start trading. Our platform offers user-friendly tools and educational resources to help you along the way.",
  },
];

const FAQ = () => {
  return (
    <div className="md:h-[586px] py-[80px] px-[32px] md:px-0 dark:bg-[#222425]">
      <div className="max-w-[1280px] md:h-[432px] mx-auto px-[32px]">
        <div className="flex-col md:flex-row flex justify-between ">
          <div className="w-[448px] hidden md:block">
            <p className="font-semibold dark:text-white pb-[12px] text-[16px] leading-[24px] text-primary-500">
              Support
            </p>
            <h1 className="font-bold dark:text-white dm-sans text-[36px] leading-[44px] text-primary-400">
              FAQs
            </h1>
            <p className="font-normal pt-[20px] dark:text-[#6B7878] text-[18px] leading-[28px] text-[#6B7878]">
              Everything you need to know about us and our market. Can’t find
              the answer you’re looking for?{" "}
              <span className="dark:text-[#19734e] dark:underline">
                Please chat to our friendly team.
              </span>
            </p>
          </div>

          <div className="pt-[61.37px]  block md:hidden">
            <SectionHeaderMobile title="support" text="FAQs" />
            <p className="font-normal pt-[14.14px] text-center px-[8.84px] text-[12.38px] leading-[21.21px] text-[#6B7878]">
              Everything you need to know about us and our market. Can’t find
              the answer you’re looking for? Please{" "}
              <span className="underline underline-offset-1">
                chat to our friendly team.
              </span>
            </p>
          </div>

          <div className="max-w-[704px] pt-[21.21px] md:pt-0">
            <Accordion data={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
