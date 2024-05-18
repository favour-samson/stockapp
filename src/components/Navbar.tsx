import { useEffect, useState } from "react";
import { FaBars, FaRegLightbulb, FaTimes } from "react-icons/fa";
import NavTopImage from "@/images/navtop.png";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
import navlogo from "@/images/darkLogo.png";
import Button from "./Button";
import ThemeToggle from "./ThemesToggle";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};

const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useTheme();

  return (
    <div className=" w-full dark:bg-[#131414] bg-[#EFF9F9] md:h-[213px] overflow-hidden">
      <div>
        <Image src={NavTopImage} alt="" width={1444} height={74} />
      </div>
      <nav className="max-w-[1280px] relative pt-[40px] mx-auto h-auto  flex items-center justify-between p-4 text-white">
        <div className="font-bold text-xl flex items-center">
          <Link href="/">
            <Image
              alt="logo"
              src={theme === "dark" ? navlogo : logo}
              width={257}
              className="object-cover"
            />
          </Link>
          <ul
            className={`lg:flex flex-1  lg:items-center lg:pb-0 pb-12 font-semibold lg:text-base text-sm absolute dark:text-white text-primary-500 lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-300 ease-in ${
              isOpen ? "block " : "hidden"
            }`}
          >
            <li className="lg:ml-8  lg:my-0 my-7">
              <Link href="/about">About Us</Link>
            </li>
            <li className="lg:ml-8  lg:my-0 my-7">
              <Link href="/about">Product</Link>
            </li>
            <li className="lg:ml-8  lg:my-0 my-7">
              <Link href="/about">Learn</Link>
            </li>
            <li className="lg:ml-8  lg:my-0 my-7">
              <Link href="/about">FAQs</Link>
            </li>
            <li className="lg:ml-8  lg:my-0 my-7">
              <Link href="/about">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 justify-end hidden lg:flex">
          <div className="flex text-primary-500 items-center justify-center">
            <div className="mr-3">
              <ThemeToggle />
            </div>
            <div>
              <button className="lg:text-base dark:text-[white] text-sm font-semibold px-[18px] py-[10px]">
                Log In
              </button>
            </div>
            <div className="ml-[12px]">
              <Button text="Start Trading" />
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen
              ? "hidden"
              : "lg:hidden w-[43px] z-50 h-[39px] rounded-[3.54px] dark:bg-[#131414]  dark:border dark:border-primary-200 bg-secondary-300 flex items-center justify-center "
          } `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={21} color={theme === "dark" ? "#ffffff" : "#002616"} />
        </div>
      </nav>
      <AnimatePresence mode="wait" initial={false}>
        {isOpen && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className="fixed top-0 bottom-0 left-0 z-50 w-full  max-w-xs border-r-2  dark:border-zinc-800 dark:bg-zinc-900 bg-white "
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between p-5 border-b-2 dark:border-zinc-800">
                <span>Welcome</span>
                <div
                  className="lg:hidden w-[43px] z-50 h-[39px] rounded-[3.54px] dark:border-primary-200 border dark:text-white flex items-center justify-center"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <FaTimes
                    size={21}
                    color={theme === "dark" ? "#ffffff" : "#002616"}
                  />
                </div>
              </div>
              <ul className="p-5 ">
                <li className=" lg:my-0 my-7">
                  <Link href="/about ">About Us</Link>
                </li>
                <li className="lg:ml-8  lg:my-0 my-7">
                  <Link href="/about">Product</Link>
                </li>
                <li className="lg:ml-8  lg:my-0 my-7">
                  <Link href="/about">Learn</Link>
                </li>
                <li className="lg:ml-8  lg:my-0 my-7">
                  <Link href="/about">FAQs</Link>
                </li>
                <li className="lg:ml-8  lg:my-0 my-7">
                  <Link href="/about">Contact Us</Link>
                </li>
              </ul>

              <div className="flex-1 justify-end  lg:flex">
                <div className="flex text-primary-500 items-center justify-center">
                  <div className="mr-3">
                    <ThemeToggle />
                  </div>
                  <div>
                    <button className="lg:text-base dark:text-[white] text-sm font-semibold px-[18px] py-[10px]">
                      Log In
                    </button>
                  </div>
                  <div className="ml-[12px]">
                    <Button text="Start Trading" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
