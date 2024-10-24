"use client";
import Image from "next/image";
import { data } from "../lib/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      showArrows={true}
      className="bg-red-400 h-[300px] lg:h-[500px] w-full"
    >
      {data.map((banner, index) => (
        <div
          className="bg-white rounded-lg lg:h-[500px] w-full h-[300px]"
          key={index}
        >
          <Image
            src={banner}
            alt="banner"
            width={900}
            height={900}
            className="w-full h-full object-fill"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
