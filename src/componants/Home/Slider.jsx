import { useState } from "react";

const Slider = ({ slidersData }) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? slidersData.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === slidersData.length - 1 ? 0 : currentSlider + 1
    );
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div>
      <style>
        {`
     .zoomIn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:url(${
        currentSlider === 0
          ? slidersData[slidersData.length - 1].img
          : slidersData[currentSlider - 1].img
      });
      background-size: cover;
      background-position: center;
      animation: zoomIn 15s infinite linear;
      z-index: -50;
      -webkit-animation: zoomIn 80s infinite linear;
  }
  `}
      </style>
      <div className="w-full h-[100vh] sm:h-96 md:h-[540px] lg:h-[45.6rem]  flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-40 overflow-hidden zoomIn">
        <div className="relative h-full w-10/12 max-w-[1400px] mx-auto">
          {/* arrow */}
          <div className="absolute bottom-1/2 w-full md:w-fit justify-between md:justify-center md:h-fit md:bottom-10 md:left-1/2 md:-translate-x-1/2 flex gap-3 z-50 md:px-5">
            {/* arrow left */}
            <button
              onClick={prevSlider}
              className="flex justify-center items-center bg-black/30 backdrop-blur-sm hover:bg-white/20 rounded-full p-4"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="w-4 h-4 md:w-6 md:h-6 icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffffaf"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#ffffffaf"
                    d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                  ></path>
                </g>
              </svg>
            </button>
            {/* arrow right */}
            <button
              onClick={nextSlider}
              className="flex justify-center items-center bg-black/30 backdrop-blur-sm hover:bg-white/20 rounded-full p-4"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="w-4 h-4 md:w-6 md:h-6 icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                transform="rotate(180)"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#ffffffaf"
                    d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          {/* text container here */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            className="w-full md:w-1/2 p-2 md:p-6 bottom-[18%] md:top-[20%] text-white/80 opacity-80 absolute drop-shadow-lg rounded-lg bg-black/20 border border-white/20 backdrop-blur-sm h-fit"
          >
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3">
              {slidersData[currentSlider].title}
            </h1>
            <p className="text-base text-teal-50 md:text-base lg:text-2xl">
              {slidersData[currentSlider].des}
            </p>
          </div>
          {/* slider container */}
          <div className="w-[9rem] lg:w-[17rem] ml-auto overflow-hidden absolute bottom-0 right-0 z-50 px-4 py-10">
            <div
              className="ease-linear duration-300 flex gap-4 items-center"
              style={{
                transform: `translateX(-${
                  currentSlider * (isSmallScreen ? 138 : 266)
                }px)`,
              }}
            >
              {/* sliders */}
              {slidersData.map((slide, inx) => (
                <img
                  key={inx}
                  src={slide.img}
                  className={`h-[90px] min-w-[120px] md:h-[90px] lg:h-[130px] lg:min-w-[250px] ${
                    currentSlider - 1 === inx
                      ? "scale-0"
                      : "scale-100 delay-500"
                  } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                  alt={slide.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
