"use client";
import { Rate } from "antd";
import Image from "next/image";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoStarSharp } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { PiHeartLight } from "react-icons/pi";
import { CgEye } from "react-icons/cg";

const Shop = () => {
  const customIcons = {
    1: <IoStarSharp />,
    2: <IoStarSharp />,
    3: <IoStarSharp />,
    4: <IoStarSharp />,
    5: <IoStarSharp />,
  };
  return (
    <div className="mb-[120px]">
      <div className="container">
        <div className="flex gap-[12px] items-center justify-center mb-[24px]">
          <HiOutlineLockClosed className="text-primary text-[24px]" />
          <h5 className="top-title">Shop</h5>
        </div>
        <h1 className="header-2-bold mb-[56px] text-textcolor text-center">
          here you can buy any thing
        </h1>
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-[24px]">
          <div className="group border border-[#D9D9D9] rounded-[4px]">
            <div className="xl:w-[312px] w-full h-[294px] rounded-t-[4px] bg-[#D9D9D9] flex justify-center items-center relative overflow-hidden">
              <Image
                src="/images/home/shoe.png"
                alt="shop"
                width={312}
                height={294}
                className="w-[270px] h-[270px] object-fill group-hover:scale-105 duration-300 transition-all"
              />
              <div className="opacity-0 group-hover:opacity-100 absolute !w-[115px] flex justify-center items-center h-[96.5px] bg-primary rounded-b-[4px] text-white left-[-20px]  group-hover:left-0 top-0 shape-card1 duration-300 transition-all">
                <h1 className="absolute left-[8px] top-[15px] -rotate-45 font-medium line-height-[24px] font-[Poppins]">
                  Sale
                </h1>
              </div>
            </div>
            <div className="p-[13px] text-center flex flex-col gap-[8px]">
              <h6 className="header-6-normal text-textcolor2 capitalize">
                whey protine
              </h6>
              <Rate
                disabled
                defaultValue={2}
                character={({ index = 0 }) => customIcons[index + 1]}
              />
              <h6 className="header-6-medium text-textcolor2 capitalize">
                $80.99
              </h6>
              <div className="flex gap-[10px] justify-center">
                <button className="py-[3px] px-[4px] hover:bg-primary hover:text-white text-primary bg-white border border-primary rounded-[4px] cursor-pointer">
                  <TbShoppingBag className="text-[17.5px]" />
                </button>
                <button className="py-[3px] px-[4px] hover:bg-primary hover:text-white text-primary bg-white border border-primary rounded-[4px] cursor-pointer">
                  <PiHeartLight className="text-[17.5px]" />
                </button>
                <button className="py-[3px] px-[4px] hover:bg-primary hover:text-white text-primary bg-white border border-primary rounded-[4px] cursor-pointer">
                  <CgEye className="text-[17.5px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
