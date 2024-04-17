import { useCallback, useEffect, useState } from "react";
import { FaArrowRightLong, FaChartArea } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocalConvenienceStore } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData, useParams } from "react-router-dom";
// leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ViewProperty = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const cardData = data[id - 1];
  const isMedScreen = window.innerWidth <= 900;
  const isSmallScreen = window.innerWidth <= 670;

  // Dynamic title
  useEffect(() => {
    document.title = `Berao | ${cardData.estate_title}`;
  }, []);

  //   slider
  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const sliderImages = [
    `https://source.unsplash.com/500x500/?${cardData.segment_name}/?1`,
    `https://source.unsplash.com/500x500/?${cardData.segment_name}/?3`,
    `https://source.unsplash.com/500x500/?${cardData.segment_name}/?5`,
    `https://source.unsplash.com/500x500/?${cardData.segment_name}/?2`,
    `https://source.unsplash.com/500x500/?${cardData.segment_name}/?4`,
  ];
  const prevSlider = () => {
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
    );
  };
  const nextSlider = useCallback(() => {
    setCurrentSlider((currentSlider) =>
      currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
    );
  }, [sliderImages.length]);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider, currentSlider]);
  return (
    <div className="pt-20 bg-transparent md:w-[94%] lg:w-10/12 max-w-[1400px] mx-auto px-4">
      <div className="flex max-w-7xl items-center justify-between py-2">
        <h2 className="text-2xl text-black/80 font-semibold">
          {cardData.estate_title}
        </h2>
        <ul className="flex items-center justify-between gap-4 text-slate-900 lg:gap-6">
          <li className="hover:underline">
            <Link to="#">
              <svg
                width={30}
                className="fill-transparent stroke-teal-600 stroke-2 hover:fill-teal-600 hover:stroke-teal-600 "
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
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 bg-white border border-black/20 p-3 md:p-6 rounded-xl">
        <div className="flex justify-between items-center px-2">
          <div>
            <h2 className="text-lg font-semibold">{cardData.location}</h2>
            <p className="text-sm font-medium text-teal-600/90 mt-1">
              Price range {cardData.price}
            </p>
          </div>
          <div>
            <Link className="bg-green-200 px-4 py-2 rounded-md text-teal-600 font-bold text-xs md:text-xl flex items-center gap-1 md:gap-4">
              <span>{cardData.status} this property</span> <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="lg:grid grid-cols-10 gap-10 mt-6">
          <div className="col-span-4 rounded-3xl">
            <div className="relative mx-auto lg:w-full">
              {/* arrow left */}
              <button
                onClick={prevSlider}
                className="absolute left-6 z-10 bg-white/80 rounded-full top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon h-4 w-4 md:h-4 md:w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#0095FF"
                      d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                    ></path>
                  </g>
                </svg>
              </button>
              {/* arrow right */}
              <button
                onClick={nextSlider}
                className="absolute right-6 z-10 bg-white/80 rounded-full top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon h-4 w-4 md:h-4 md:w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
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
                      fill="#0095FF"
                      d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                    ></path>
                  </g>
                </svg>
              </button>
              <div className="w-full overflow-hidden">
                {/* slider container */}
                <div
                  className="flex gap-10 transform-gpu duration-500 ease-linear p-2"
                  style={{
                    transform: `translateX(-${
                      isMedScreen
                        ? isSmallScreen
                          ? currentSlider * 106.5
                          : currentSlider * 103.5
                        : currentSlider * 105.5
                    }%)`,
                  }}
                >
                  {/* sliders */}
                  {sliderImages.map((slide, inx) => (
                    <img
                      width={500}
                      height={500}
                      key={inx}
                      src={slide}
                      className="h-full min-w-[100%] rounded-lg md:rounded-3xl object-cover overflow-hidden"
                      alt={`Slider - ${inx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 mt-1 flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold text-black/70">
                {cardData.estate_title}
              </h2>
              <p className="mt-4 text-black/80 leading-6 font-medium mb-4">
                {cardData.more_description}
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <h2 className="text-xl text-black/70 mb-3 font-medium flex items-center gap-2">
                  <MdOutlineLocalConvenienceStore />
                  Facilities
                </h2>
                <div className="flex flex-col md:flex-row text-xs">
                  {cardData.facilities.map((fac, inx) => (
                    <span
                      key={inx}
                      className="bg-teal-600 px-4 py-2 my-2 md:my-0 w-fit rounded-md mr-2 text-white/90 font-bold"
                    >
                      {fac}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl text-black/70 mb-2 font-medium flex items-center gap-2">
                  <FaChartArea />
                  Area
                </h2>
                <p className="bg-teal-600 font-bold px-4 py-1 rounded-md mr-2 text-white/90 w-fit">
                  {cardData.area}
                </p>
              </div>
            </div>
            <div className="mt-8 border-t-2 pt-4 flex flex-col md:flex-row gap-4 md:gap-16 md:items-center">
              <div className="flex md:flex-col gap-2 items-center md:items-start">
                <RiMoneyDollarCircleLine className="md:text-3xl text-black/60" />{" "}
                <span className="text-xl font-semibold mr-2 md:mr-0">Potential value</span>{" "}
                <span className="bg-green-200/60 w-fit rounded-md text-teal-600 font-bold px-3 py-1">
                  High confidence
                </span>
              </div>
              <div>
                <h2 className="text-black/50 font-semibold">Low range</h2>
                <p className="text-teal-600/80 font-bold text-xl">$80</p>
              </div>
              <div>
                <h2 className="text-black/50 font-semibold">Med range</h2>
                <p className="text-teal-600/80 font-bold text-xl">$160</p>
              </div>
              <div>
                <h2 className="text-black/50 font-semibold">High range</h2>
                <p className="text-teal-600/80 font-bold text-xl">$380</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-white border border-black/20 p-4 md:p-6 rounded-xl flex flex-col lg:grid gap-5 lg:gap-10 grid-cols-10 h-full">
        <div className="col-span-3 flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-10">
          <div className="border-2 rounded-xl p-4 flex flex-col lg:gap-5 justify-between">
            <h2 className="text-black/80 font-bold text-2xl">Agent details</h2>
            <h3 className="text-black/80 font-bold text-xl">Naimur R.</h3>
            <button className="btn bg-teal-600 text-white md:text-base lg:text-xl hover:bg-teal-600/90 w-full">
              <FiPhoneCall className="mr-2" />
              Contact Agent
            </button>
          </div>
          <div className="border-2 flex-grow rounded-xl p-4 flex flex-col gap-5 justify-between">
            <h2 className="text-black/80 font-bold text-2xl">
              Inspection time
            </h2>
            <h3 className="text-black/80 font-bold text-lg">
              Inspection and auctions are still happening.
            </h3>
            <h3 className="text-black/80 font-bold text-xl">
              Sunday, 20 April, 10:00 AM - 10:00 PM
            </h3>
            <button className="btn bg-teal-600 text-white text-xl hover:bg-teal-600/90 w-full">
              <SlCalender className="mr-2" />
              Add to calender
            </button>
          </div>
        </div>
        <div className="col-span-7 overflow-hidden h-[32rem] rounded-xl border-2">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              className="w-full h-full"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
