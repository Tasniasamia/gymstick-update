"use client";
import { HiOutlineLockClosed } from "react-icons/hi2";
import Image from "next/image";

const About = () => {
  return (
    <div className="mb-[120px]">
      <div className="container  flex lg:flex-row flex-col items-center lg:gap-0 gap-[110px]">
        <div className="lg:w-1/2 w-full">
          <Image
            src="/images/home/about.png"
            className="lg:w-[560px] w-full md:h-[534px] h-[300px]"
            alt="about"
            width={560}
            height={534}
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="flex gap-[12px] items-center  mb-[24px]">
            <HiOutlineLockClosed className="text-primary text-[24px]" />
            <h5 className="top-title">About Us</h5>
          </div>
          <h1 className="header-2-bold mb-[40px] text-textcolor ">
            we are pushing the limit of your core strength{" "}
          </h1>
          <p className="mb-[50px] text-secondarytext paragraph-1-normal">
            Welcome to this comprehensive guide on the Apple Vision Pro
            features, where we delve deep into the innovative advancements of
            this ground technology. Apple has always been at technological
            innovation, and the Vision Pro features
          </p>
          <button className="rounded-[4px] text-white bg-primary px-[32px] py-[16px] cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
