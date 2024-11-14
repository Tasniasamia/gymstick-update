import Image from "next/image";
import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { Ri24HoursLine } from "react-icons/ri";
import BannerTitle from "./bannerTitle";

const About = () => {
  return (
    <div className="container xl:px-0 px-4">
      <div className="md:py-[150px] py-[60px] flex lg:flex-row flex-col md:gap-[47px] gap-[30px] ">
        <Image
          src="/about.png"
          className="object-fill lg:w-[650px]  w-auto h-full"
          width={650}
          height={553}
          alt="about"
        />
        <div className="lg:w-1/2 w-full">
         <BannerTitle
            heading="About Us"
            subheading="Dedicated to Better Health Outcomes"
          />
          <p className="paragraph text-secondary text-wrap pt-[30px]">
            We are dedicated to transforming healthcare by connecting patients
            with persona lized, accessible support that meets their unique
            needs. Our platform bridges the gap between patients and healthcare
            professionals dietitians pharmacists, mental health experts, and
            more providing resources and guidance tailored to each step of their
            journey.
          </p>
          <div className="flex md:flex-nowrap flex-wrap items-center md:gap-[60px] gap-[30px] mt-[35px]">
            <p className="flex gap-2 items-center">
              <HiOutlineUserGroup size={32} className="text-primary" />
              <span className="text-darkblue paragraph-medium">
                 Professional Team
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <Ri24HoursLine size={32} className="text-primary" />
              <span className="text-darkblue paragraph-medium">
                 24/7 Customer Support
              </span>
            </p>
          </div>
          <button className="md:px-[32px] px-[20px] md:py-[16px] py-[8px]  rounded-[8px] cursor-pointer bg-primary text-white border capitalize mt-[85px]">
            Make An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
