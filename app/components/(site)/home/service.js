"use client";
import { HiOutlineLockClosed } from "react-icons/hi2";

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
          <div className="py-[26px] ps-[26px] pe-[19px] group hover:bg-primary text-textcolor hover:text-white duration-200 transition-all">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
