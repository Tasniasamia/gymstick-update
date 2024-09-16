import React from "react";
import Image from "next/image";

const Contact = () => {
    return (
        <div className="py-[50px] relative ">
            <div className="container bg-primary h-[860px] relative group z-40 ">
                {/* Image with proper z-index and position */}
                <Image
                    src="/hand.png"
                    alt="image"
                    width={500}
                    height={500}
                    className="w-[400px] absolute bottom-[-50px] left-[-255px]  group-hover:left-[75%]   z-20 h-auto object-fill transition-all duration-600"
                />
                  
            </div>
            {/* <Image
                    src="/hand.png"
                    alt="image"
                    width={500}
                    height={500}
                    className="w-[400px] absolute bottom-[-28px] right-[240px]     z-20 h-auto object-fill transition-all duration-600"
                /> */}
        </div>
    );
};

export default Contact;
