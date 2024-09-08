import About from "@/app/components/(site)/home/about";
import BMI from "@/app/components/(site)/home/bmi";
import Feature from "@/app/components/(site)/home/feature";
import Hero from "@/app/components/(site)/home/hero";
import Service from "@/app/components/(site)/home/service";
import Team from "@/app/components/(site)/home/team";

const page = () => {
    return (
        <div>
            <Hero/>
            <Feature/>
            <About/>
            <Service/>
            <BMI/>
            <Team/>
        </div>
    );
};

export default page;