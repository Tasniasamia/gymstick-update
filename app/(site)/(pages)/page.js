import About from "@/app/components/(site)/home/about";
import Blog from "@/app/components/(site)/home/blog";
import BMI from "@/app/components/(site)/home/bmi";
import Certificate from "@/app/components/(site)/home/card";
import Feature from "@/app/components/(site)/home/feature";
import Hero from "@/app/components/(site)/home/hero";
import Schedule from "@/app/components/(site)/home/schedule";
import Service from "@/app/components/(site)/home/service";
import Shop from "@/app/components/(site)/home/shop";
import Team from "@/app/components/(site)/home/team";
import Testimonial from "@/app/components/(site)/home/testimonial";
import Trainer from "@/app/components/(site)/home/trainer";

const page = () => {
    return (
        <div>
            <Hero/>
            <Feature/>
            <About/>
            <Service/>
            <BMI/>
            <Testimonial/>
            <Schedule/>
            <Team/>
            <Shop/>
            <Blog/>
            <Trainer/>
            <Certificate/>
        </div>
    );
};

export default page;