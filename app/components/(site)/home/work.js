"use client";

import Image from "next/image";
import { FiChevronsRight } from "react-icons/fi";

const Work = () => {
  return (
    <div className="bg-black py-[150px]">
      <div className="container  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[24px]">
        <div className="flex w-full ">
          <div className="relative w-full h-full group">
            <div className="relative z-20 w-[95%] bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
              <Image
                src="/service.png"
                alt="service"
                width={100}
                height={100}
                className="h-[60px] w-[60px] object-fill"
              />
              <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">
                User Research
              </h4>
              <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">
                Gathering the Client's Business and Goals
              </p>
            </div>

            {/* Centering the red div both horizontally and vertically */}
            <div className="z-0 group-hover:-rotate-180 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 w-full h-full"></div>
          </div>

          <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]">
            <FiChevronsRight />
          </div>
        </div>
        <div className="flex w-full ">
          <div className="w-full bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
            <Image
              src="/service.png"
              alt="service"
              width={100}
              height={100}
              className="h-[60px] w-[60px] object-fill"
            />
            <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">
              User Research
            </h4>
            <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">
              Gathering the Client's Business and Goals
            </p>
          </div>
          <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]">
            <FiChevronsRight />
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-full bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
            <Image
              src="/service.png"
              alt="service"
              width={100}
              height={100}
              className="h-[60px] w-[60px] object-fill"
            />
            <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">
              User Research
            </h4>
            <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">
              Gathering the Client's Business and Goals
            </p>
          </div>
          <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]">
            <FiChevronsRight />
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-full bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
            <Image
              src="/service.png"
              alt="service"
              width={100}
              height={100}
              className="h-[60px] w-[60px] object-fill"
            />
            <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">
              User Research
            </h4>
            <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">
              Gathering the Client's Business and Goals
            </p>
          </div>
          <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]">
            <FiChevronsRight />
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-full bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
            <Image
              src="/service.png"
              alt="service"
              width={100}
              height={100}
              className="h-[60px] w-[60px] object-fill"
            />
            <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">
              User Research
            </h4>
            <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">
              Gathering the Client's Business and Goals
            </p>
          </div>
          <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]">
            <FiChevronsRight />
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-full bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
            <Image
              src="/service.png"
              alt="service"
              width={100}
              height={100}
              className="h-[60px] w-[60px] object-fill"
            />
            <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">
              User Research
            </h4>
            <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">
              Gathering the Client's Business and Goals
            </p>
          </div>
          <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]">
            <FiChevronsRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
