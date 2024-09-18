"use client";
import Image from "next/image";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { HiMiniArrowRight } from "react-icons/hi2";

const Feature = () => {
  return (
    <div className="mb-[120px]">
      <div className="container dark:bg-black bg-white">
        <div className="flex gap-[12px] items-center justify-center mb-[24px]">
          <HiOutlineLockClosed className="text-primary text-[24px]" />
          <h5 className="top-title">features</h5>
        </div>
        <h1 className="header-2-bold mb-[60px] dark:text-white text-textcolor text-center">
          why choose us ?
        </h1>
        <div className="grid lg:grid-cols-4 gap-[24px]">
          <div
            className="px-[26px] py-[48px] rounded-[4px] dark:text-white text-textcolor border  group dark:bg-black bg-white hover:bg-primary hover:text-white duration-150 transition-all flex flex-col items-center"
            style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)" }}
          >
            <div
              className="w-[56px] h-[56px] flex justify-center items-center dark:bg-black text-textcolor dark:text-white bg-white rounded-full"
              style={{ filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.10)" }}
            >
              <Image
                src="/images/home/train2.png"
                alt="training"
                width={100}
                height={100}
                className="h-auto w-auto object-fill "
              />
            </div>
            <p className="text-[20px] font-semibold font-[poppins] mt-[40px]">
              Scheduling
            </p>
            <p className="text-base font-normal line-height-[25.6px] font-[poppins] mt-[24px]">
              Book your favorite classes online
            </p>
            <button className="mt-[66px] rounded-full p-[16px] bg-primary dark:group-hover:bg-black group-hover:bg-white dark:group-hover:text-white text-textcolor duration-200 transiton-all">
              <HiMiniArrowRight className="text-[24px] text-white group-hover:bg-white bg-priamry group-hover:text-primary" />
            </button>
          </div>
          <div
            className="px-[26px] py-[48px] rounded-[4px] text-textcolor  dark:text-white dark:bg-black group bg-white hover:bg-primary hover:text-white duration-150 transition-all flex flex-col items-center"
            style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)" }}
          >
            <div
              className="w-[56px] h-[56px] flex justify-center items-center bg-white dark:bg-black dark:text-white text-textcolor rounded-full"
              style={{ filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.10)" }}
            >
              <Image
                src="/images/home/train2.png"
                alt="training"
                width={100}
                height={100}
                className="h-auto w-auto object-fill "
              />
            </div>
            <p className="text-[20px] font-semibold font-[poppins] mt-[40px] dark:text-white text-textcolor bg-white dark:bg-black">
              Scheduling
            </p>
            <p className="text-base font-normal line-height-[25.6px] font-[poppins] mt-[24px] dark:text-white text-textcolor bg-white dark:bg-black">
              Book your favorite classes online
            </p>
            <button className="mt-[66px] rounded-full p-[16px] bg-primary group-hover:bg-white group-hover:text-white duration-200 transiton-all">
              <HiMiniArrowRight className="text-[24px] text-white group-hover:bg-white bg-priamry group-hover:text-primary" />
            </button>
          </div>
          <div
            className="px-[26px] py-[48px] rounded-[4px]  group  dark:text-white text-textcolor bg-white dark:bg-black hover:bg-primary hover:text-white duration-150 transition-all flex flex-col items-center"
            style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)" }}
          >
            <div
              className="w-[56px] h-[56px] flex justify-center items-center dark:text-white text-textcolor bg-white dark:bg-black rounded-full"
              style={{ filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.10)" }}
            >
              <Image
                src="/images/home/train2.png"
                alt="training"
                width={100}
                height={100}
                className="h-auto w-auto object-fill "
              />
            </div>
            <p className="text-[20px] font-semibold font-[poppins] mt-[40px] dark:text-white text-textcolor bg-white dark:bg-black">
              Scheduling
            </p>
            <p className="text-base font-normal line-height-[25.6px] font-[poppins] mt-[24px] dark:text-white text-textcolor bg-white dark:bg-black">
              Book your favorite classes online
            </p>
            <button className="mt-[66px] rounded-full p-[16px] bg-primary group-hover:bg-white group-hover:text-white duration-200 transiton-all">
              <HiMiniArrowRight className="text-[24px] text-white group-hover:bg-white bg-priamry group-hover:text-primary" />
            </button>
          </div>
          <div
            className="px-[26px] py-[48px] rounded-[4px]  group hover:bg-primary hover:text-white duration-150 transition-all flex flex-col items-center dark:text-white text-textcolor bg-white dark:bg-black"
            style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)" }}
          >
            <div
              className="w-[56px] h-[56px] flex justify-center items-center dark:text-white text-textcolor bg-white dark:bg-black rounded-full"
              style={{ filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.10)" }}
            >
              <Image
                src="/images/home/train2.png"
                alt="training"
                width={100}
                height={100}
                className="h-auto w-auto object-fill "
              />
            </div>
            <p className="text-[20px] font-semibold font-[poppins] mt-[40px] dark:text-white text-textcolor bg-white dark:bg-black">
              Scheduling
            </p>
            <p className="text-base font-normal line-height-[25.6px] font-[poppins] mt-[24px] dark:text-white text-textcolor bg-white dark:bg-black">
              Book your favorite classes online
            </p>
            <button className="mt-[66px] rounded-full p-[16px] bg-primary group-hover:bg-white group-hover:text-white duration-200 transiton-all ">
              <HiMiniArrowRight className="text-[24px] text-white group-hover:bg-white bg-priamry group-hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
