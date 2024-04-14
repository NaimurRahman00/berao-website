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
        <div className="grid grid-cols-10 gap-10 py-40 border-b border-white/30">
          <div className="col-span-3">
            <h1 className="font-extrabold text-2xl mb-6 text-teal-700">Berao</h1>
            <p className="w-4/6">
              Berao estate: Luxurious properties, exceptional service, and
              unparalleled living experiences.
            </p>
          </div>
          <div className="col-span-2 flex flex-col space-y-2 font-semibold">
            <h2 className="uppercase text-lg font-bold mb-6">Company</h2>
            <Link className="text-black/60 hover:underline">Room</Link>
            <Link className="text-black/60 hover:underline">Package</Link>
          </div>
          <div className="col-span-2 flex flex-col space-y-2 font-semibold">
            <h2 className="uppercase text-lg font-bold mb-6">Support</h2>
            <Link className="text-black/60 hover:underline">Contact us</Link>
            <Link className="text-black/60 hover:underline">Documentation</Link>
            <Link className="text-black/60 hover:underline">Community</Link>
          </div>
          <div className="col-span-3">
            <h2 className="uppercase text-lg font-bold mb-6">Socials</h2>
            <div className="flex flex-wrap gap-4 w-5/6">
              <Link className="p-3 rounded-full bg-teal-600 text-white">
                <FaFacebookF />
              </Link>
              <Link className="p-3 rounded-full bg-teal-600 text-white">
                <FaInstagram />
              </Link>
              <Link className="p-3 rounded-full bg-teal-600 text-white">
                <FaXTwitter />
              </Link>
              <Link className="p-3 rounded-full bg-teal-600 text-white">
                <FaLinkedinIn />
              </Link>
              <Link className="p-3 rounded-full bg-teal-600 text-white">
                <FaThreads />
              </Link>
              <Link className="p-3 rounded-full bg-teal-600 text-white">
                <SlSocialVkontakte />
              </Link>
              <Link className="p-3 rounded-full bg-teal-600 text-white">
                <SlSocialTumblr />
              </Link>
              <Link className="p-3 rounded-full bg-teal-600 text-white">
                <TiSocialYoutube />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex py-10 justify-between items-center">
          <h2 className="text-sm text-white/80">
            Copyright @2024 - Berao Estate
          </h2>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group shadow-xl"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-teal-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative text-xl">Subscribe</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
