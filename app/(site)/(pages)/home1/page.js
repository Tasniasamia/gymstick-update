import About from '@/app/components/(site)/home1/about';
import Banner from '@/app/components/(site)/home1/banner';
import Team from '@/app/components/(site)/home1/team';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Team/>
        </div>
    );
};

export default page;