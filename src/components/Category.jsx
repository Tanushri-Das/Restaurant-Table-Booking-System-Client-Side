"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/pasta.jpg";
import slide6 from "../images/chicken-burger.jpg";
import slide7 from "../images/fish-fry.jpg";
import slide8 from "../images/Fried-Chicken.jpg";

const Category = () => {
  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSwiperSlidesPerView(4);
      } else if (window.innerWidth >= 768) {
        setSwiperSlidesPerView(3);
      } else if (window.innerWidth >= 600) {
        setSwiperSlidesPerView(2);
      } else {
        setSwiperSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="m-10 lg:mx-12 lg:my-12">
      <Swiper
        slidesPerView={swiperSlidesPerView}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {[slide1, slide2, slide3, slide5, slide7, slide6, slide8, slide4].map(
          (slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center flex-col items-center">
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  width={300}
                  height={250}
                  style={{ objectFit: "cover" }}
                />
                <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
                  {
                    [
                      "Salads",
                      "Pizzas",
                      "Soups",
                      "Pasta",
                      "Fish",
                      "Burger",
                      "Chicken",
                      "Desserts",
                    ][index]
                  }
                </h1>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default Category;
