"use client";

import Image from "next/image";
import { FiChevronsRight } from "react-icons/fi";

const Work = () => {
  const data=[
    {
      id:1,
      title:"User Research",
      description:"Gathering the Client's Business and Goals",
      image:'/service.png'
    },
    {
      id:2,
      title:"User Research",
      description:"Gathering the Client's Business and Goals",
      image:'/service.png'
    },
    {
      id:3,
      title:"User Research",
      description:"Gathering the Client's Business and Goals",
      image:'/service.png'
    },
    {
      id:4,
      title:"User Research",
      description:"Gathering the Client's Business and Goals",
      image:'/service.png'
    },
    {
      id:5,
      title:"User Research",
      description:"Gathering the Client's Business and Goals",
      image:'/service.png'
    },
    {
      id:6,
      title:"User Research",
      description:"Gathering the Client's Business and Goals",
      image:'/service.png'
    }
  ]
  return (
    <div className="bg-black py-[150px]">
      <div className="container  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-[53px]">
        <div className="flex md:flex-row flex-col w-full items-center">
          <div className="relative w-full flex lg:flex-row flex-col justify-center items-center h-[200px] overflow-hidden rounded-[10px]">
            <div className="relative h-[197px] z-20 w-[99%]  bg-[#151515] ps-[20px] pb-[44px] pt-[20px] rounded-[10px]">
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
            <div className="card z-0 h-full  absolute top-1/2 left-1/2 transform   md:w-[120%] w-[105%]  -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="w-[53px]  text-white lg:h-[197px] h-[53px] flex justify-center items-center text-[20px]">
            <FiChevronsRight  className="md:rotate-0 rotate-[90deg]"/>
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-full items-center">
          <div className="relative w-full flex justify-center items-center h-[200px] overflow-hidden rounded-[10px]">
            <div className="relative h-[197px] z-20 w-[99%] bg-[#151515] ps-[20px] pb-[44px] pt-[20px] rounded-[10px]">
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
            <div className="card z-0 h-full  absolute top-1/2 left-1/2 transform   w-[120%]   -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="w-[53px] text-white md:h-[197px] h-[53px] lg:flex md:hidden flex justify-center items-center text-[20px]">
          <FiChevronsRight  className="md:rotate-0 rotate-[90deg]"/>
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-full items-center">
        <div className="w-[53px] text-white md:h-[197px] h-[53px] lg:hidden md:flex hidden justify-center items-center text-[20px]">
          <FiChevronsRight  className="md:rotate-0 rotate-[90deg]"/>
          </div>
          <div className="relative w-full flex justify-center items-center h-[200px] overflow-hidden rounded-[10px]">
            <div className="relative h-[197px] z-20 w-[99%] bg-[#151515] ps-[20px] pb-[44px] pt-[20px] rounded-[10px]">
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
            <div className="card z-0 h-full  absolute top-1/2 left-1/2 transform   w-[120%]   -translate-x-1/2 -translate-y-1/2"></div>
          </div>
       
        
        </div>
        <div className="flex md:flex-row flex-col w-full items-center">
        <div className="w-[53px] text-white lg:h-[197px] h-[53px] flex justify-center items-center text-[20px]">
        <FiChevronsRight  className="md:rotate-0 rotate-[90deg]"/>
          </div>
          <div className="relative w-full flex justify-center items-center h-[200px] overflow-hidden rounded-[10px]">
            <div className="relative h-[197px] z-20 w-[99%] bg-[#151515] ps-[20px] pb-[44px] pt-[20px] rounded-[10px]">
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
            <div className="card z-0 h-full  absolute top-1/2 left-1/2 transform  w-[130%]   -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="w-[53px] text-white md:h-[197px] h-[53px]  lg:flex flex md:hidden justify-center items-center text-[20px]">
          <FiChevronsRight  className="md:rotate-0 rotate-[90deg]"/>
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-full items-center">
        <div className="w-[53px] text-white md:h-[197px] h-[53px]  lg:hidden hidden md:flex justify-center items-center text-[20px]">
          <FiChevronsRight  className="md:rotate-0 rotate-[90deg]"/>
          </div>
          <div className="relative w-full flex justify-center items-center h-[200px] overflow-hidden rounded-[10px]">
            <div className="relative h-[197px] z-20 w-[99%] bg-[#151515] ps-[20px] pb-[44px] pt-[20px] rounded-[10px]">
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
            <div className="card z-0 h-full  absolute top-1/2 left-1/2 transform   w-[120%]   -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="w-[53px] text-white md:h-[197px] h-[53px] flex justify-center items-center text-[20px]">
          <FiChevronsRight  className="md:rotate-0 rotate-[90deg]"/>
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-full items-center">
          <div className="relative w-full flex justify-center items-center h-[200px] overflow-hidden rounded-[10px]">
            <div className="relative h-[197px] z-20 w-[99%] bg-[#151515] ps-[20px] pb-[44px] pt-[20px] rounded-[10px]">
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
            <div className="card z-0 h-full  absolute top-1/2 left-1/2 transform w-[120%] -translate-x-1/2 -translate-y-1/2"></div>
          </div>
       
         
        </div>
      </div>
    </div>
  );
};

export default Work;
