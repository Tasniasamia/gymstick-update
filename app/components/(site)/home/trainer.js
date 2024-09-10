"use client";
import Image from "next/image";

const Trainer = () => {
    return (
        <div className="container">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
           <div className="w-full h-[468px] relative custom-shape">
            <Image src="/images/home/team.png" alt="team" width={424} height={464} className="h-full w-full object-fill" />
           </div>
            </div>
        </div>
    );
};

export default Trainer;