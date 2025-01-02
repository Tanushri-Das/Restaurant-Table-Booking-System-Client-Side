"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../images/01.jpg";
import banner2 from "../images/02.jpg";
import banner3 from "../images/03.png";
import banner4 from "../images/04.jpg";
import banner5 from "../images/05.png";
import banner6 from "../images/06.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mb-12">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div className="relative w-full h-[600px]">
          <Image
            src={banner1}
            layout="fill"
            objectFit="cover"
            alt="Banner 1"
            priority
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            src={banner2}
            layout="fill"
            objectFit="cover"
            alt="Banner 2"
            priority
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            src={banner3}
            layout="fill"
            objectFit="cover"
            alt="Banner 3"
            priority
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            src={banner4}
            layout="fill"
            objectFit="cover"
            alt="Banner 4"
            priority
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            src={banner5}
            layout="fill"
            objectFit="cover"
            alt="Banner 5"
            priority
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            src={banner6}
            layout="fill"
            objectFit="cover"
            alt="Banner 6"
            priority
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
