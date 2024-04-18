
const Welcome = () => {
  return (
    <section className="w-10/12 mx-auto max-w-[1400px] py-12 md:py-24 flex justify-center bg-white flex-col lg:py-32 bg-gradient-to-b from-#52C2FF to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center text-black">
          {/* Text content */}
          <div className="space-y-4">
            <h1 className="text-3xl mb-10 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to <span className="text-green-500">Berao Estate</span> 
            </h1>
            <p className="mx-auto max-w-[400px]">
              Explore the wide range of Berao Estate world. Dive
              into the world of the creativity of Tourism.
            </p>
          </div>
          <div className="space-x-4">
          <a
            href="#_"
            className="relative inline-flex items-center justify-center px-4 lg:px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group shadow-xl"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative text-base lg:text-xl">Explore Now</span>
          </a>
          </div>
        </div>
      </div>
      {/* Feature Cards */}
      <div className="container md:grid px-4 md:px-6 mt-16 grid-cols-3 flex-wrap justify-center items-center gap-9">
        <div className="flex flex-col grid-cols-1 items-center text-center text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10 mb-4"
          >
            <circle cx={12} cy={12} r={10} />
            <line x1={2} x2={22} y1={12} y2={12} />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <h3 className="text-lg font-semibold">Global Reach</h3>
          <p className="text-sm">Amazing Hotel, Resort, Guest House and more from all around the world.</p>
        </div>
        <div className="flex flex-col grid-cols-1 items-center text-center text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10 mb-4"
          >
            <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
            <path d="m13 12-3 5h4l-3 5" />
          </svg>
          <h3 className="text-lg font-semibold">Fast and Efficient Services</h3>
          <p className="text-sm">Experience lightning fast Service times and care also.</p>
        </div>
        <div className="flex flex-col grid-cols-1 items-center text-center text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10 mb-4"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <h3 className="text-lg font-semibold">Loved by Travelers</h3>
          <p className="text-sm">Join our community of happy Berao users.</p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
