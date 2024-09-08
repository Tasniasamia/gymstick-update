"use client";
import Image from "next/image";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa6";
import { BsFillCalendarFill } from "react-icons/bs";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Blog = () => {
  return (
    <div className="mb-[120px]">
      <div className="container">
        <div className="flex justify-between items-center mb-[55px]">
          <div>
            <div className="flex gap-[12px] items-center  mb-[24px]">
              <HiOutlineLockClosed className="text-primary text-[24px]" />
              <h5 className="top-title">Blog and Service</h5>
            </div>
            <h1 className="header-2-bold  text-textcolor ">
              took a look at our latest news
            </h1>
          </div>
          <span className="text-primary all-view cursor-pointer">All News</span>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px] ">
          <div
            className="bg-white group p-[24px] rounded-[4px]"
            style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
          >
            <div className="md:w-[376px] w-full h-[360px]">
              <Image
                src="/images/home/blog.png"
                alt="blog"
                width={376}
                height={360}
                className="h-full w-full object-fill"
              />
            </div>
            <div>
              <h5 className="blog-subtitle md:w-[352px] mt-[24px] mb-[41px] w-full group-hover:text-primary text-textcolor capitalize duration-300 transition-all">
                Best Oral weight lifting Tips You should Follow.
              </h5>
              <div className="flex justify-between">
                <div className="flex gap-[8px] items-center group-hover:text-primary text-textcolor duration-300 transition-all text-[16px]">
                  <FaUserTie />
                  <span className="font-normal font-[Poppins] text-[14px] line-height-[22px]">
                    admin
                  </span>
                </div>
                <div className="flex gap-[8px] items-center group-hover:text-primary text-textcolor duration-300 transition-all text-[16px]">
                  <BsFillCalendarFill />
                  <span className="font-normal font-[Poppins] text-[14px] line-height-[22px]">
                    03 sep, 2024
                  </span>
                </div>
                <button className="flex gap-[9px] items-center group-hover:text-primary text-textcolor duration-300 transition-all text-[16px] cursor-pointer">
                  <span>Read More</span>
                  <LiaLongArrowAltRightSolid className="text-[16px]" />
                </button>
              </div>
            </div>
          </div>
          <div
            className="bg-white group p-[24px] rounded-[4px]"
            style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
          >
            <div className="md:w-[376px] w-full h-[360px]">
              <Image
                src="/images/home/blog.png"
                alt="blog"
                width={376}
                height={360}
                className="h-full w-full object-fill"
              />
            </div>
            <div>
              <h5 className="blog-subtitle md:w-[352px] mt-[24px] mb-[41px] w-full group-hover:text-primary text-textcolor capitalize">
                Best Oral weight lifting Tips You should Follow.
              </h5>
              <div className="flex justify-between">
                <div className="flex gap-[8px] items-center group-hover:text-primary text-textcolor duration-300 transition-all text-[16px]">
                  <FaUserTie />
                  <span className="font-normal font-[Poppins] text-[14px] line-height-[22px]">
                    admin
                  </span>
                </div>
                <div className="flex gap-[8px] items-center group-hover:text-primary text-textcolor duration-300 transition-all text-[16px]">
                  <BsFillCalendarFill />
                  <span className="font-normal font-[Poppins] text-[14px] line-height-[22px]">
                    03 sep, 2024
                  </span>
                </div>
                <button className="flex gap-[9px] items-center group-hover:text-primary text-textcolor duration-300 transition-all text-[16px] cursor-pointer">
                  <span>Read More</span>
                  <LiaLongArrowAltRightSolid className="text-[16px]" />
                </button>
              </div>
            </div>
          </div>
          <div
            className="bg-white group p-[24px] rounded-[4px]"
            style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
          >
            <div className="md:w-[376px] w-full h-[360px]">
              <Image
                src="/images/home/blog.png"
                alt="blog"
                width={376}
                height={360}
                className="h-full w-full object-fill"
              />
            </div>
            <div>
              <h5 className="blog-subtitle md:w-[352px] mt-[24px] mb-[41px] w-full group-hover:text-primary text-textcolor capitalize">
                Best Oral weight lifting Tips You should Follow.
              </h5>
              <div className="flex justify-between">
                <div className="flex gap-[8px] items-center group-hover:text-primary text-textcolor duration-300 transition-all text-[16px]">
                  <FaUserTie />
                  <span className="font-normal font-[Poppins] text-[14px] line-height-[22px]">
                    admin
                  </span>
                </div>
                <div className="flex gap-[8px] items-center group-hover:text-primary text-textcolor duration-300 transition-all text-[16px]">
                  <BsFillCalendarFill />
                  <span className="font-normal font-[Poppins] text-[14px] line-height-[22px]">
                    03 sep, 2024
                  </span>
                </div>
                <button className="flex gap-[9px] items-center group-hover:text-primary text-textcolor duration-300 transition-all text-[16px] cursor-pointer">
                  <span>Read More</span>
                  <LiaLongArrowAltRightSolid className="text-[16px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
