import About from "@/app/components/(site)/home/about";
import Blog from "@/app/components/(site)/home/blog";
import BMI from "@/app/components/(site)/home/bmi";
import Certificate from "@/app/components/(site)/home/card";
import Contact from "@/app/components/(site)/home/contact";
import Feature from "@/app/components/(site)/home/feature";
import Hero from "@/app/components/(site)/home/hero";
import Schedule from "@/app/components/(site)/home/schedule";
import Service from "@/app/components/(site)/home/service";
import Shop from "@/app/components/(site)/home/shop";
import Team from "@/app/components/(site)/home/team";
import Testimonial from "@/app/components/(site)/home/testimonial";
import Trainer from "@/app/components/(site)/home/trainer";
import Work from "@/app/components/(site)/home/work";
import Workdynamic from "@/app/components/(site)/home/workdynamic";
import CustomSlider from "@/app/components/(site)/home/customSlider";

const page = () => {
    
const slides = [
    {
        title: 'Slide 1',
        description: 'This is the first slide.',
    },
    {
     
        title: 'Slide 2',
        description: 'This is the second slide.',
    },
    {
        
        title: 'Slide 3',
        description: 'This is the third slide.',
    },
];
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
            {/* <Work/> */}
            <Workdynamic/>
            <Contact/>
            <CustomSlider slides={slides} autoPlay={true} interval={3000} />
        </div>
    );
};

export default page;