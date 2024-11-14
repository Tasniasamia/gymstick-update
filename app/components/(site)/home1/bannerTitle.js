import React from 'react';

const BannerTitle = ({heading,subheading}) => {
    return (
        <div>
            <h5 className="topTitle text-darkblue capitalize">{heading}</h5>
          <h1 className="section-title text-darkblue  pt-[14px]">
            {subheading}
          </h1>
        </div>
    );
};

export default BannerTitle;