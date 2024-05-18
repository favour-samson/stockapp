import React from "react";
import Button from "./Button";
import SectionHeader from "./SectionHeader";
import Image, { StaticImageData } from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

interface PostCardProps {
  postImageUrl: StaticImageData;
  postAlt: string;
  category: string;
  title: string;
  description: string;
  profileImageUrl: StaticImageData;
  profileAlt: string;
  author: string;
  date: string;
  width: string;
}

const PostCard: React.FC<PostCardProps> = ({
  postImageUrl,
  postAlt,
  category,
  title,
  description,
  profileImageUrl,
  profileAlt,
  author,
  date,
  width,
}) => {
  return (
    <div className="max-w-[373.33px] bg-white dark:bg-[#222425] dark:border dark:border-[#FD891C] rounded-[8px] p-[24px] shadow-lg h-[568px]">
      <Image
        src={postImageUrl}
        alt={postAlt}
        width={325.33}
        height={240}
        className="object-cover"
      />
      <div className="pt-[32px]">
        <p className="font-semibold dark:text-[#FD891C] pb-[12px] text-[14px] leading-[20px] text-primary-300">
          {category}
        </p>
        <div className="flex justify-between pb-[8px]">
          <div className="max-w-[285.33px]">
            <h1 className="font-bold text-[24px] dark:text-white dm-sans leading-[32px] text-primary-400">
              {title}
            </h1>
          </div>
          <div>
            <LuArrowUpRight size={24} />
          </div>
        </div>
        <div>
          <p className="font-normal dark:text-white text-[16px] leading-[24px] text-[#475467]">
            {description}
          </p>
        </div>
        <div
          className={`${width} pt-[24px]  h-[40px] flex items-center justify-between`}
        >
          <Image
            src={profileImageUrl}
            alt={profileAlt}
            width={40}
            height={40}
          />

          <div>
            <p className="font-semibold dark:text-white text-[14px] leading-[20px] text-primary-400">
              {author}
            </p>
            <p className="font-normal text-[14px] leading-[20px] text-[#6B7878]">
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
