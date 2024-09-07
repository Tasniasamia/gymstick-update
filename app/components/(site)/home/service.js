"use client";
import Image from "next/image";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { HiMiniArrowRight } from "react-icons/hi2";

const Service = () => {
  return (
    <div className="mb-[120px]">
      <div className="container">
        <div className="flex justify-between items-center mb-[50px]">
          <div>
            <div className="flex gap-[12px] items-center  mb-[24px]">
              <HiOutlineLockClosed className="text-primary text-[24px]" />
              <h5 className="top-title">Service</h5>
            </div>
            <h1 className="header-1-bold  text-textcolor ">
              Services We're Offering{" "}
            </h1>
          </div>
          <span className="text-primary all-view cursor-pointer">
            All Service
          </span>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px]">
          <div
            className="py-[26px] ps-[26px] pe-[19px] group hover:bg-primary text-textcolor hover:text-white duration-200 transition-all rounded-[4px]"
            style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
          >
            <div className="flex items-center gap-[16px]">
              <div className="h-[56px] w-[56px] flex justify-center items-center bg-primary group-hover:bg-white rounded-full  duration-200 transition-all">
                <Image
                  src="/images/home/service-without-hover.png"
                  alt="service"
                  width={100}
                  height={100}
                  className="h-[32px] w-[32px] object-fill group-hover:hidden block  duration-200 transition-all"
                />
                <Image
                  src="/images/home/service-hover.png"
                  alt="service"
                  width={100}
                  height={100}
                  className="h-[32px] w-[32px] object-fill group-hover:block hidden duration-200 transition-all"
                />
              </div>
              <h5 className="header-5-medium text-textcolor group-hover:text-white capitalize  duration-200 transition-all">
                gym fitness class
              </h5>
            </div>
            <p className="paragraph-1-normal pt-[16px] pb-[24px] text-textcolor group-hover:text-white duration-200 transition-all capitalize">
              Information on personalized nutri tion plans and counseling
              sessions.
            </p>
            <button className="flex gap-[10px] items-center paragraph-1-notoSans text-textcolor group-hover:text-white duration-200 transition-all cursor-pointer">
              <span>Read More</span>
              <HiMiniArrowRight className="!text-[24px] group-hover:text-white duration-200 transition-all" />
            </button>
          </div>
          <div
            className="py-[26px] ps-[26px] pe-[19px] group hover:bg-primary text-textcolor hover:text-white duration-200 transition-all rounded-[4px]"
            style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
          >
            <div className="flex items-center gap-[16px]">
              <div className="h-[56px] w-[56px] flex justify-center items-center bg-primary group-hover:bg-white rounded-full  duration-200 transition-all">
                <Image
                  src="/images/home/service-without-hover.png"
                  alt="service"
                  width={100}
                  height={100}
                  className="h-[32px] w-[32px] object-fill group-hover:hidden block  duration-200 transition-all"
                />
                <Image
                  src="/images/home/service-hover.png"
                  alt="service"
                  width={100}
                  height={100}
                  className="h-[32px] w-[32px] object-fill group-hover:block hidden duration-200 transition-all"
                />
              </div>
              <h5 className="header-5-medium text-textcolor group-hover:text-white capitalize  duration-200 transition-all">
                gym fitness class
              </h5>
            </div>
            <p className="paragraph-1-normal pt-[16px] pb-[24px] text-textcolor group-hover:text-white duration-200 transition-all capitalize">
              Information on personalized nutri tion plans and counseling
              sessions.
            </p>
            <button className="flex gap-[10px] items-center paragraph-1-notoSans text-textcolor group-hover:text-white duration-200 transition-all cursor-pointer">
              <span>Read More</span>
              <HiMiniArrowRight className="!text-[24px] group-hover:text-white duration-200 transition-all" />
            </button>
          </div>
          <div
            className="py-[26px] ps-[26px] pe-[19px] group hover:bg-primary text-textcolor hover:text-white duration-200 transition-all rounded-[4px]"
            style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
          >
            <div className="flex items-center gap-[16px]">
              <div className="h-[56px] w-[56px] flex justify-center items-center bg-primary group-hover:bg-white rounded-full  duration-200 transition-all">
                <Image
                  src="/images/home/service-without-hover.png"
                  alt="service"
                  width={100}
                  height={100}
                  className="h-[32px] w-[32px] object-fill group-hover:hidden block  duration-200 transition-all"
                />
                <Image
                  src="/images/home/service-hover.png"
                  alt="service"
                  width={100}
                  height={100}
                  className="h-[32px] w-[32px] object-fill group-hover:block hidden duration-200 transition-all"
                />
              </div>
              <h5 className="header-5-medium text-textcolor group-hover:text-white capitalize  duration-200 transition-all">
                gym fitness class
              </h5>
            </div>
            <p className="paragraph-1-normal pt-[16px] pb-[24px] text-textcolor group-hover:text-white duration-200 transition-all capitalize">
              Information on personalized nutri tion plans and counseling
              sessions.
            </p>
            <button className="flex gap-[10px] items-center paragraph-1-notoSans text-textcolor group-hover:text-white duration-200 transition-all cursor-pointer">
              <span>Read More</span>
              <HiMiniArrowRight className="!text-[24px] group-hover:text-white duration-200 transition-all" />
            </button>
          </div>
          <div
            className="py-[26px] ps-[26px] pe-[19px] group hover:bg-primary text-textcolor hover:text-white duration-200 transition-all rounded-[4px]"
            style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
          >
            <div className="flex items-center gap-[16px]">
              <div className="h-[56px] w-[56px] flex justify-center items-center bg-primary group-hover:bg-white rounded-full  duration-200 transition-all">
                <Image
                  src="/images/home/service-without-hover.png"
                  alt="service"
                  width={100}
                  height={100}
                  className="h-[32px] w-[32px] object-fill group-hover:hidden block  duration-200 transition-all"
                />
                <Image
                  src="/images/home/service-hover.png"
                  alt="service"
                  width={100}
                  height={100}
                  className="h-[32px] w-[32px] object-fill group-hover:block hidden duration-200 transition-all"
                />
              </div>
              <h5 className="header-5-medium text-textcolor group-hover:text-white capitalize  duration-200 transition-all">
                gym fitness class
              </h5>
            </div>
            <p className="paragraph-1-normal pt-[16px] pb-[24px] text-textcolor group-hover:text-white duration-200 transition-all capitalize">
              Information on personalized nutri tion plans and counseling
              sessions.
            </p>
            <button className="flex gap-[10px] items-center paragraph-1-notoSans text-textcolor group-hover:text-white duration-200 transition-all cursor-pointer">
              <span>Read More</span>
              <HiMiniArrowRight className="!text-[24px] group-hover:text-white duration-200 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
