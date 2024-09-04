import About from "@/app/components/(site)/home/about";
import Feature from "@/app/components/(site)/home/feature";
import Service from "@/app/components/(site)/home/service";

const page = () => {
    return (
        <div>
            <Feature/>
            <About/>
            <Service/>
        </div>
    );
};

export default page;