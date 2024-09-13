"use client";

import Image from "next/image";
import { FiChevronsRight } from "react-icons/fi";

const Work = () => {
  return (
    <div className="container">
      <div className="h-[197px]">
        <div className="w-[370px] bg-[#15151566] ps-[20px]">
         <Image src='/service.png' alt="service" width={100} height={100} className="h-[60px] w-[60px] object-fill" />
         <h4 className="mt-[16px] text-[24px] font-semibold leading-7 tracking-small">User Research</h4>
         <p className="text-[16px] mt-[4px] pb-[15px] leading-7 tracking-small">Gathering the Client's Business and Goals</p>
        </div>
        <div className="w-[24px] h-[197px] flex justify-center items-center"><FiChevronsRight/></div>
      </div>
    </div>
  );
};

export default Work;
