"use client";

import Image from "next/image";
import { FiChevronsRight } from "react-icons/fi";

const Work = () => {
  return (
    <div className="container bg-black grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[24px]">
      <div className="flex w-full">
        <div className="w-full bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
         <Image src='/service.png' alt="service" width={100} height={100} className="h-[60px] w-[60px] object-fill" />
         <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">User Research</h4>
         <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">Gathering the Client's Business and Goals</p>
        </div>
        <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]"><FiChevronsRight/></div>
      </div>
      <div className="flex w-full">
        <div className="w-full bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
         <Image src='/service.png' alt="service" width={100} height={100} className="h-[60px] w-[60px] object-fill" />
         <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">User Research</h4>
         <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">Gathering the Client's Business and Goals</p>
        </div>
        <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]"><FiChevronsRight/></div>
      </div>
      <div className="flex w-full">
        <div className="w-full bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
         <Image src='/service.png' alt="service" width={100} height={100} className="h-[60px] w-[60px] object-fill" />
         <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">User Research</h4>
         <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">Gathering the Client's Business and Goals</p>
        </div>
        <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]"><FiChevronsRight/></div>
      </div>
      <div className="flex w-full">
        <div className="w-full bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
         <Image src='/service.png' alt="service" width={100} height={100} className="h-[60px] w-[60px] object-fill" />
         <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">User Research</h4>
         <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">Gathering the Client's Business and Goals</p>
        </div>
        <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]"><FiChevronsRight/></div>
      </div>
      <div className="flex w-full">
        <div className="w-full bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
         <Image src='/service.png' alt="service" width={100} height={100} className="h-[60px] w-[60px] object-fill" />
         <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">User Research</h4>
         <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">Gathering the Client's Business and Goals</p>
        </div>
        <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]"><FiChevronsRight/></div>
      </div>
      <div className="flex w-full">
        <div className="w-full bg-[#151515] ps-[20px] pb-[44px] pt-[20px]">
         <Image src='/service.png' alt="service" width={100} height={100} className="h-[60px] w-[60px] object-fill" />
         <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">User Research</h4>
         <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">Gathering the Client's Business and Goals</p>
        </div>
        <div className="w-[24px] text-white h-[197px] flex justify-center items-center text-[20px]"><FiChevronsRight/></div>
      </div>
    </div>
  );
};

export default Work;
