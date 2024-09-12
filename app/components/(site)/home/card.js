"use client";

import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";

const Certificate = () => {
  return (
    <div className="my-[120px]">
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:justify-items-start justify-items-center gap-[24px]">
          <div className="relative col-span-1  w-[538] h-[378px]">
            <div className="absolute  bottom-0  right-0 lg:w-[50px] w-[48px] lg:h-[50px] h-[48px] flex justify-center items-center rounded-full bg-black">
              <CgArrowTopRight className="text-[24px] text-white  " />
            </div>
            <div
              className="p-[16px] !w-full   custom-shape2  bg-black">
              <Image
                src="/images/certificate.png"
                alt="certificate"
                width={424}
                height={464}
                className="h-[286px] !w-full object-fill "
              />
              <p className="font-semibold text-base font-[geist] line-height-[19.2px] text-white mt-[18px]">
                E-Commarce Landing Page
              </p>
              <p className="font-normal text-sm font-[geist] line-height-[19.2px] text-white mt-[6px]">
                Dribble
              </p>
            </div>
          </div>
          <div className="relative col-span-1  w-fit h-[378px]">
            <div className="absolute  bottom-0 right-0 w-[50px] h-[50px] flex justify-center items-center rounded-full bg-black">
              <CgArrowTopRight className="text-[24px] text-white  " />
            </div>
            <div
              className="p-[16px] w-full   custom-shape2  bg-black">
              <Image
                src="/images/certificate.png"
                alt="certificate"
                width={424}
                height={464}
                className="h-[286px] w-auto object-fill "
              />
              <p className="font-semibold text-base font-[geist] line-height-[19.2px] text-white mt-[18px]">
                E-Commarce Landing Page
              </p>
              <p className="font-normal text-sm font-[geist] line-height-[19.2px] text-white mt-[6px]">
                Dribble
              </p>
            </div>
          </div>
          <div className="relative col-span-1  w-fit h-[378px]">
            <div className="absolute  bottom-0 right-0 w-[50px] h-[50px] flex justify-center items-center rounded-full bg-black">
              <CgArrowTopRight className="text-[24px] text-white  " />
            </div>
            <div
              className="p-[16px] w-full   custom-shape2  bg-black">
              <Image
                src="/images/certificate.png"
                alt="certificate"
                width={424}
                height={464}
                className="h-[286px] w-auto object-fill "
              />
              <p className="font-semibold text-base font-[geist] line-height-[19.2px] text-white mt-[18px]">
                E-Commarce Landing Page
              </p>
              <p className="font-normal text-sm font-[geist] line-height-[19.2px] text-white mt-[6px]">
                Dribble
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
