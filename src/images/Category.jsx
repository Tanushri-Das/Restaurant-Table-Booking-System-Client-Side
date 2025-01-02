import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Category/Category.css";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/pasta.jpg";
import slide6 from "../../../assets/home/chicken-burger.jpg";
import slide7 from "../../../assets/home/fish-fry.jpg";
import slide8 from "../../../assets/home/Fried-Chicken.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import time from "../../../assets/home/---From 11_00am to 10_00pm---.png";

const Category = () => {
  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(1);

  useEffect(() => {
    // Update the number of slides per view based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        // Large screens
        setSwiperSlidesPerView(4);
      } else if (window.innerWidth >= 992) {
        // Large screens
        setSwiperSlidesPerView(3);
      } else if (window.innerWidth >= 600) {
        // Medium screens
        setSwiperSlidesPerView(2);
      } else {
        // Small screens
        setSwiperSlidesPerView(1);
      }
    };

    // Initial call
    handleResize();

    // Add event listener to handle screen size changes
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="m-10 md:m-20">
      <SectionTitle subHeading={time} heading={"order online"} />
      <Swiper
        slidesPerView={swiperSlidesPerView}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
            <img src={slide1} alt="" style={{ width: "300px" }} />
            <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
              Salads
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
            <img src={slide2} alt="" style={{ width: "300px" }} />
            <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
              Pizzas
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
            <img src={slide3} alt="" style={{ width: "300px" }} />
            <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
              Soups
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
            <img src={slide5} className="" alt="" style={{ width: "300px" }} />
            <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
              Pasta
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
            <img src={slide7} alt="" style={{ width: "300px" }} />
            <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
              Fish
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
            <img src={slide6} className="" alt="" style={{ width: "300px" }} />
            <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
              Burger
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
            <img src={slide8} className="" alt="" style={{ width: "300px" }} />
            <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
              Chicken
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
            <img src={slide4} alt="" style={{ width: "300px" }} />
            <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
              Desserts
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
