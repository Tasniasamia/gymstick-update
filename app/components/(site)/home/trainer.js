"use client";
import Image from "next/image";

const Trainer = () => {
    return (
        <div className="container">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[24px]">
            <div className="rounded-b-[4px] border border-[#D9D9D9] w-full">
           <div className="!w-full h-[468px]  custom-shape relative">
            <Image src="/images/home/team.png" alt="team" width={424} height={464} className="h-full !w-full object-fill" />
           </div>
           <div className="ps-[50px]">
           <h5 className="text-[20px] font-bold mt-[32.28px] font-[Montserrat] line-height-[24.38px]">Alan Bagham</h5>
           <p className="mt-[24px] text-textcolor2 line-height-[19.5px] font-normal pb-[71px]">Body Building Coach</p>
           </div>
           </div>
           <div className="rounded-b-[4px] border border-[#D9D9D9] w-full">
           <div className="w-full h-[468px]  custom-shape relative">
            <Image src="/images/home/team.png" alt="team" width={424} height={464} className="h-full w-full object-fill" />
           </div>
           <div className="ps-[50px]">
           <h5 className="text-[20px] font-bold mt-[32.28px] font-[Montserrat] line-height-[24.38px]">Alan Bagham</h5>
           <p className="mt-[24px] text-textcolor2 line-height-[19.5px] font-normal pb-[71px]">Body Building Coach</p>
           </div>
           </div>
           <div className="rounded-b-[4px] border border-[#D9D9D9] w-full">
           <div className="w-full h-[468px]  custom-shape relative">
            <Image src="/images/home/team.png" alt="team" width={424} height={464} className="h-full w-full object-fill" />
           </div>
           <div className="ps-[50px]">
           <h5 className="text-[20px] font-bold mt-[32.28px] font-[Montserrat] line-height-[24.38px]">Alan Bagham</h5>
           <p className="mt-[24px] text-textcolor2 line-height-[19.5px] font-normal pb-[71px]">Body Building Coach</p>
           </div>
           </div>
           <div className="rounded-b-[4px] border border-[#D9D9D9] w-full">
           <div className="w-full h-[468px]  custom-shape relative">
            <Image src="/images/home/team.png" alt="team" width={424} height={464} className="h-full w-full object-fill" />
           </div>
           <div className="ps-[50px]">
           <h5 className="text-[20px] font-bold mt-[32.28px] font-[Montserrat] line-height-[24.38px]">Alan Bagham</h5>
           <p className="mt-[24px] text-textcolor2 line-height-[19.5px] font-normal pb-[71px]">Body Building Coach</p>
           </div>
           </div>
           </div>
        </div>
    );
};

export default Trainer;