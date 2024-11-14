import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-[url('/backgraund.png')] bg-no-repeat bg-cover bg-center h-full md:pt-[170px] md:pb-[144px] pt-[60px] xl:px-0 px-4 pb-[60px] lg:relative">
      <div className="xl:flex hidden justify-between ">
        <div className="lg:w-1/2 w-full"></div>
        <div className="lg:w-1/2 w-full  flex flex-col items-center relative ">
          <p className="ps-[16px] w-fit pe-[9px] py-[14px] bg-white rounded-[10px] flex items-center gap-2 paragraph-medium absolute bottom-[84px] z-30 left-0 xl:left-[106px]">
            <FaCircleCheck className="text-primary" size={24} />
            <span className="text-darkblue">99% Success Record</span>
          </p>
          <p className="px-[15px] w-fit py-[25px] bg-white rounded-[10px] absolute 2xl:right-[33px] 2xl:bottom-[271px] xl:bottom-[171px] right-0  flex items-center gap-2 paragraph-medium z-30">
            <span className="text-[24px] text-primary font-medium">24/7</span>
            <span className="text-darkblue">Customer Support</span>
          </p>
          <div>
            <div className="h-[492px] w-[636px]   trantslate-x-1/2 relative ">
              <Image
                src="/doctor.png"
                width={636}
                height={492}
                className="z-10 absolute w-full h-full object-cover"
                alt="doctor"
              />
              <Image
                src="/vector.png"
                width={640}
                height={384}
                alt="vector"
                className="z-0 bottom-0 absolute w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container flex xl:flex-row  justify-between xl:absolute  xl:-translate-x-1/2 left-1/2  bottom-[178px]">
        <div className="lg:w-[767px] w-full">
          <h6 className="banner-toptitle text-darkblue">
            Your Trusted Partner for Remote Patient
          </h6>
          <h1 className="banner-title pt-[19px] pb-[20px] text-darkblue">
            Personalized Accessible Care for Patients
          </h1>
          <p className="paragraph text-secondary">
            A comprehensive support platform connecting cancer patients with
            essential care services. Accessible anytime, anywhere, for a
            personalized healing journey.
          </p>
          <div className="flex items-center sm:gap-[40px] gap-3 pt-[25px]">
            <button className="md:px-[32px] px-[20px] md:py-[16px] py-[8px]  rounded-[8px] cursor-pointer bg-primary text-white border">
              Consult now
            </button>
            <button className="md:px-[32px] px-[20px] md:py-[16px] py-[8px] rounded-[8px] cursor-pointer border-primary text-primary  border">
              Learn more
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
