import React from "react";
import Marquee from "react-fast-marquee";

const BrandName = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-2 my-10 ">
      <p className="bg-[#F96E2A] text-white px-4 py-2 rounded-md">Brands</p>
      <Marquee pauseOnHover={true} className="space-x-10">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam nemo earum sunt explicabo quibusdam, et totam ad iure eius?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam nemo earum sunt explicabo quibusdam, et totam ad iure eius?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam nemo earum sunt explicabo quibusdam, et totam ad iure eius?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam nemo earum sunt explicabo quibusdam, et totam ad iure eius?</p>
       
      </Marquee>
    </div>
  );
};

export default BrandName;
