"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="overflow-hidden  z-10 mt-[-120px] lg:h-[850px] h-[700px] gap-[300px] mb-[120px]  bg-[url('/images/home/bg.png')] bg-cover flex items-end relative">
      <div className="xl:basis-1/3 basis-full xl:block hidden"></div>
      <div className="xl:basis-2/3 basis-full mb-[-20px] xl:opacity-100 opacity-40">
        <Image
          src="/images/home/image.png"
          alt="hero"
          width={1068}
          height={732}
          className="w-full lg:h-[732px] h-[600px]  object-fill"
        />
      </div>
      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 container ">
        <h1 className="header-1-bold capitalize md:w-[660px] w-full text-white">
          achieve your fitness <span className="!text-primary">goals with
          gymStick</span>
        </h1>
        <p className="text-white paragraph-1-normal-4 mt-[40px] mb-[56px] md:w-[615px] w-full">
          at fitness queen gym, we are dedicated to empowering woman like you to
          achieve their fitness goals in a supportive and.
        </p>
        <div className="flex md:gap-[40px] gap-[20px]">
          <button className="rounded-[4px] text-white bg-primary px-[20px] lg:px-[32px] py-[12px] lg:py-[16px] cursor-pointer capitalize font-medium text-[16px] hover:text-white hover:bg-transparent border border-primary duration-300 transition-all">
            start your journey
          </button>
          <button className="rounded-[4px] text-white bg-transparent lg:px-[32px] py-[12px] lg:py-[16px] px-[8px] cursor-pointer capitalize font-medium text-[16px] hover:text-white hover:bg-primary border border-primary duration-300 transition-all">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
