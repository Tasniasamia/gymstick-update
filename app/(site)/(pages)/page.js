import About from "@/app/components/(site)/home/about";
import Feature from "@/app/components/(site)/home/feature";
import Hero from "@/app/components/(site)/home/hero";
import Service from "@/app/components/(site)/home/service";

const page = () => {
    return (
        <div>
            <Hero/>
            <Feature/>
            <About/>
            <Service/>
        </div>
    );
};

export default page;