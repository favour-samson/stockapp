import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Transactions from "@/components/Transactions";

import MobileSection from "@/components/Mobile";
import Post from "@/components/Post";
import FAQ from "@/components/FAQ";
import GetInTouch from "@/components/GetInTouch";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import AboutSectionMobile from "@/components/mobile/AboutSection";
import AboutSection from "@/components/About";
import ProductSection from "@/components/Product";
import ProductSectionMobile from "@/components/mobile/Product/ProductSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Transactions />
      <div className="md:hidden block">
        <AboutSectionMobile />
      </div>
      <div className="hidden md:block">
        <AboutSection />
      </div>
      <div className=" hidden md:block">
        <ProductSection />
      </div>
      <div className="md:hidden block">
        <ProductSectionMobile />
      </div>
      <MobileSection />
      <Post />
      <FAQ />
      <GetInTouch />
      <Newsletter />
      <Footer />
    </div>
  );
}
