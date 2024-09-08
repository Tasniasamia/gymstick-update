"use client";
import Image from "next/image";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { LiaArrowRightSolid } from "react-icons/lia";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Team = () => {
  return (
    <div className="mb-[120px]">
      <div className="container">
        <div className="flex gap-[12px] items-center  mb-[24px]">
          <HiOutlineLockClosed className="text-primary text-[24px]" />
          <h5 className="top-title">Team</h5>
        </div>
        <h1 className="header-2-bold mb-[56px] text-textcolor ">
          meet the pros
        </h1>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
           <div
            className="group cursor-pointer"
            style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
          >
            <div className="relative group xl:w-[312px] w-full h-[290px] overflow-hidden">
              <Image
                src="/images/home/team.png"
                className="w-full h-full"
                alt="team"
                width={312}
                height={290}
              />
              <ul className="list-done bg-primary flex flex-col bg-opacity-[20%] w-[61px] h-[213px] justify-center items-center gap-[28px] absolute  left-[24px] bottom-[-24px] group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300 transition-all">
                <li>
                  <FaXTwitter className="text-white text-[24px]" />
                </li>
                <li>
                  <FaFacebookF className="text-white text-[24px]" />
                </li>
                <li>
                  <FaLinkedinIn className="text-white text-[24px]" />
                </li>
                <li>
                  <FaInstagram className="text-white text-[24px]" />
                </li>
              </ul>
            </div>
            <div className="p-[24px] bg-white group-hover:bg-primary text-textcolor group-hover:text-white duration-300 transition-all flex justify-between items-center">
              <div>
                <h5 className="header-5-medium capitalize">dainne russell</h5>
                <h6 className="header-6-normal capitalize">gym instractor</h6>
              </div>
              <LiaArrowRightSolid className="text-white text-[18px] " />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Team;
