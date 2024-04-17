import { Swiper, SwiperSlide } from "swiper/react";
// import React, { useRef, useState } from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/pagination";
import "./styles.css";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Estate = ({ cardData }) => {
  const isSmallScreen = window.innerWidth <= 600;
  const isMedScreen = window.innerWidth <= 900;
  return (
    <div className="">
      <div className="w-10/12 max-w-[1400px] mx-auto py-20 bg-transparent">
        <div>
          <h2 className="text-4xl font-bold text-center text-teal-500">Estate</h2>
        </div>
        <Swiper
        data-aos="fade-up"
        data-aos-duration="1000"
          direction={"horizontal"}
          slidesPerView={isSmallScreen ? 1 : isMedScreen ? 2 : 3}
          spaceBetween={10}
          mousewheel={isSmallScreen ? false : true}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper cursor-pointer bg-transparent"
        >
          {cardData.map((slide, inx) => (
            <SwiperSlide
              key={inx}
              className="flex gap-10 justify-center px-2 bg-transparent"
            >
              <div className="mx-auto bg-transparent my-20 h-[32rem] md:h-[37.5rem] w-[22rem] space-y-6 font-sans border border-[#2121214a] rounded-sm shadow-2xl shadow-[#5a5a5a] flex flex-col">
                <div className="relative flex h-48 w-full justify-center lg:h-[280px] bg-transparent">
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                    {/* love  */}
                    <div className="flex items-center bg-transparent">
                      <svg
                        width={30}
                        className="fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500 "
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        <g strokeWidth="0"></g>{" "}
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>{" "}
                        <g id="SVGRepo_iconCarrier">
                          <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                        </g>
                      </svg>
                    </div>
                    <button className="rounded-full bg-red-600 border border-red-800 px-4 py-1 font-medium text-white duration-200 hover:bg-red-700">
                      {slide.status}
                    </button>
                  </div>
                  <img
                    width={300}
                    height={300}
                    className="h-full w-full bg-black/40"
                    src={slide.image}
                    alt="card navigate ui"
                  />
                </div>
                <div className="mx-auto w-[85%] space-y-2 text-start font-semibold flex-grow">
                  <h6 className="text-sm md:text-base lg:text-2xl font-bold">
                    {slide.estate_title}
                  </h6>
                  <h2 className="flex gap-2 items-center text-sm opacity-60">
                    <FaLocationDot />
                    {slide.location}
                  </h2>
                </div>
                <div className="px-6">
                  <p className="text-xs text-start font-semibold text-gray-400 md:text-sm">
                    {slide.description}
                  </p>
                  <h2 className="text-start bg-teal-600 px-4 py-1 w-fit rounded-full mt-4 text-white">
                    {slide.segment_name}
                  </h2>
                </div>
                <div className="flex items-center gap-3 justify-between text-sm md:text-base px-6 border-t-2 border-gray-200 py-4">
                  <div className="flex gap-1 items-center">
                    <h2>Price : </h2>{" "}
                    <h3 className="font-medium text-teal-600">{slide.price}</h3>
                  </div>
                  <Link
                    to={`/view-property/${slide.id}`}
                    className="flex items-center text-slate-600 font-medium text-base hover:text-teal-600"
                  >
                    View property <RiArrowRightSLine className="text-2xl" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Estate;
