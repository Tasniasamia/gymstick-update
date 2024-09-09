"use client";
import { Rate } from "antd";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoStarSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  const customIcons = {
    1: <IoStarSharp />,
    2: <IoStarSharp />,
    3: <IoStarSharp />,
    4: <IoStarSharp />,
    5: <IoStarSharp />,
  };

  return (
    <div className="pb-[120px] swipe_slide">
      <div className="container grid xl:grid-cols-2 grid-cols-1 gap-[60px]">
        <div className=" col-span-1 ">
          <div className="w-full">
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              bulletActiveClass="swiper-pagination-bullet-active"
              className="mySwiper "
            >
              <SwiperSlide>
                <div className="pb-[40px] w-full ">
                  <div
                    className="px-[24px]  pb-[56px] pt-[24px]  bg-white w-fit mb-[44px] rounded-[4px]"
                    style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
                  >
                    <Rate
                      disabled
                      defaultValue={2}
                      character={({ index = 0 }) => customIcons[index + 1]}
                    />
                    <p className="mt-[38px] paragraph-1-normal-4 !font-[Mulish] w-full">
                      I have been hiring people in this space for a number of
                      years and I have never seen this level of professionalism.
                      It really feels like you are working with a team that
                      can...
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[20px] line-height-[30px] font-medium font-[Poppins] text-primary mb-[4px]">
                      Sandra Garcia
                    </h4>
                    <h6 className="font-[Mulish] font-normal text-[18px] text-textcolor2 line-height-[28.2]">
                      Manager
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-[40px]">
                  <div
                    className="px-[24px] pb-[56px]  pt-[24px]  bg-white w-fit mb-[44px] rounded-[4px]"
                    style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
                  >
                    <Rate
                      disabled
                      defaultValue={2}
                      character={({ index = 0 }) => customIcons[index + 1]}
                    />
                    <p className="mt-[38px] paragraph-1-normal-4 !font-[Mulish] w-full">
                      I have been hiring people in this space for a number of
                      years and I have never seen this level of professionalism.
                      It really feels like you are working with a team that
                      can...
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[20px] line-height-[30px] font-medium font-[Poppins] text-primary mb-[4px]">
                      Sandra Garcia
                    </h4>
                    <h6 className="font-[Mulish] font-normal text-[18px] text-textcolor2 line-height-[28.2]">
                      Manager
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex gap-[12px] items-center mb-[24px]">
            <HiOutlineLockClosed className="text-primary text-[24px]" />
            <h5 className="top-title">Testimonial</h5>
          </div>
          <h1 className="header-2-bold mb-[40px] text-textcolor">
            Our Clients' Feedback
          </h1>
          <p className="mb-[50px] text-secondarytext paragraph-1-normal">
            I have been hiring people in this space for a number of years and I
            have never seen this level of professionalism. It really feels like
            you are working with a team that can...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
