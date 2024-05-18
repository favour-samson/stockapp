import React from "react";
import Button from "./Button";
import Post1 from "@/images/post1.png";
import Post2 from "@/images/Image2.png";
import Post3 from "@/images/Image3.png";
import User1 from "@/images/user1.png";
import User2 from "@/images/Rectangle2.png";
import User3 from "@/images/Rectangle3.png";
import { LuArrowUpRight } from "react-icons/lu";
import PostCard from "./PostCard";
import SectionHeaderMobile from "./mobile/SectionHeader";
import SectionHeader from "./SectionHeader";
const Post = () => {
  return (
    <div className="w-full dark:bg-[#131414] bg-[#EAF8F8] md:bg-white">
      <div className="max-w-[1280px] py-[80px] px-[32px] h-auto md:h-[912px]  mx-auto">
        <div className=" md:h-[752px]   ">
          <div className="flex-col flex md:flex-row items-center md:items-start justify-between">
            <div className="hidden md:block">
              <SectionHeader title="Learn" text="Lastest blog posts" />
            </div>
            <div className="block md:hidden pt-[47px]">
              <SectionHeaderMobile title="Learn" text="Lastest blog posts" />
            </div>
            <p className="text-[14px] dark:text-white block text-center md:hidden max-w-[669px] text-[#3B4B4B] leading-[30px] pt-[16px]">
              Our blog is authored by a team of financial experts, market
              analysts, and traders
            </p>
            <Button text="view all posts" />
          </div>
          <p className="text-[20px] dark:text-white hidden md:block max-w-[669px] text-[#3B4B4B] leading-[24px] pt-[20px]">
            Our blog is authored by a team of financial experts, market
            analysts, and traders
          </p>

          <div className="md:flex-row flex items-center md:items-start  flex-col justify-between pt-[24px]">
            <div className="pb-[28.1px] md:pb-0">
              <PostCard
                postImageUrl={Post1}
                postAlt="Post image description"
                category="Market Insights"
                title="Understanding Bull and Bear Markets"
                description="In the world of investing, it's crucial to comprehend the dynamics of bull and bear markets. In this article..."
                profileImageUrl={User1}
                profileAlt="Profile image description"
                author="James Rhye"
                date="20 Sep 2023"
                width="w-[141px]"
              />
            </div>

            <div className="pb-[28.1px] md:pb-0">
              <PostCard
                postImageUrl={Post2}
                postAlt="Post image description"
                category="Educational Consult"
                title="A Beginner's Guide to Stock Trading"
                description="New to stock trading? Our beginner's guide covers the fundamentals of stock trading, including key concepts..."
                profileImageUrl={User2}
                profileAlt="Profile image description"
                author="Emmanuelle Baker"
                date="19 Jul 2023"
                width="w-[189px]"
              />
            </div>

            <div className="pb-[147.1px] md:pb-0">
              <PostCard
                postImageUrl={Post3}
                postAlt="Post image description"
                category="Investment Strategies"
                title="The Art of Portfolio Diversification"
                description="Diversification is a cornerstone of successful investing. Discover why it's important, various..."
                profileImageUrl={User3}
                profileAlt="Profile image description"
                author="Ibrahim Abdulhakeem"
                date="18 Oct 2022"
                width="w-[215px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
