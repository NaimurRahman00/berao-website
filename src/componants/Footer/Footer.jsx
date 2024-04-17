import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
  FaXTwitter,
} from "react-icons/fa6";
import { SlSocialTumblr, SlSocialVkontakte } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-teal-800 to-white py-10">
      <div className="w-10/12 max-w-[1400px] mx-auto">
        <div className="md:grid grid-cols-10 justify-center items-start gap-10 py-5 lg:py-40 border-b border-white/30 space-y-4 lg:space-y-0">
          <div className="col-span-5 lg:col-span-3">
            <h1 className="font-extrabold text-2xl mb-3 lg:mb-6 text-teal-700">Berao</h1>
            <p className="md:w-3/4 lg:w-4/6">
              Berao estate: Luxurious properties, exceptional service, and
              unparalleled living experiences.
            </p>
          </div>
          <div className="col-span-2 flex flex-col space-y-2 font-semibold">
            <h2 className="uppercase text-lg font-bold lg:mb-6">Company</h2>
            <Link className="text-black/60 hover:underline">Room</Link>
            <Link className="text-black/60 hover:underline">Package</Link>
          </div>
          <div className="col-span-2 flex flex-col space-y-2 font-semibold">
            <h2 className="uppercase text-lg font-bold lg:mb-6">Support</h2>
            <Link className="text-black/60 hover:underline">Contact us</Link>
            <Link className="text-black/60 hover:underline">Documentation</Link>
            <Link className="text-black/60 hover:underline">Community</Link>
          </div>
          <div className="row-span-2 col-span-10 lg:col-span-3 text-center lg:text-start">
            <h2 className="uppercase text-lg font-bold mb-6">Socials</h2>
            <div className="flex flex-wrap gap-4 lg:w-5/6 justify-center lg:justify-start">
              <Link className="p-3 rounded-full bg-emerald-600/80 hover:scale-105 transition text-white">
                <FaFacebookF />
              </Link>
              <Link className="p-3 rounded-full bg-emerald-600/80 hover:scale-105 transition text-white">
                <FaInstagram />
              </Link>
              <Link className="p-3 rounded-full bg-emerald-600/80 hover:scale-105 transition text-white">
                <FaXTwitter />
              </Link>
              <Link className="p-3 rounded-full bg-emerald-600/80 hover:scale-105 transition text-white">
                <FaLinkedinIn />
              </Link>
              <Link className="p-3 rounded-full bg-emerald-600/80 hover:scale-105 transition text-white">
                <FaThreads />
              </Link>
              <Link className="p-3 rounded-full bg-emerald-600/80 hover:scale-105 transition text-white">
                <SlSocialVkontakte />
              </Link>
              <Link className="p-3 rounded-full bg-emerald-600/80 hover:scale-105 transition text-white">
                <SlSocialTumblr />
              </Link>
              <Link className="p-3 rounded-full bg-emerald-600/80 hover:scale-105 transition text-white">
                <TiSocialYoutube />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 py-4 md:py-10 justify-between items-center">
          <h2 className="text-sm text-white/80">
            Copyright @2024 - Berao Estate
          </h2>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center px-6 lg:px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group shadow-xl"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative text-base lg:text-xl">Subscribe</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
