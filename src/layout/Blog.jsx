import { useEffect } from "react";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";

const Blog = () => {
  // Dynamic title
  useEffect(()=> {
    document.title='Berao | Blogs'
  },[])

  return (
    <div className="w-[95%] md:w-[90%] lg:w-10/12 max-w-[1400px] mx-auto pt-24">
      {/* Banner part */}
      <div className="md:grid grid-cols-10 md:gap-5 lg:gap-10">
        <div className="col-span-7 flex flex-col gap-10">
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="https://i.ibb.co/W6N2r0v/resort-blog.jpg"
              alt=""
              className="rounded-2xl"
            />
            <h2 className="absolute top-5 left-5 rounded-md px-4 py-1 bg-black/50 text-white">
              Resort
            </h2>
            <div className="absolute w-11/12 text-white/80 left-6 md:left-10 bottom-0 md:bottom-5 z-10">
              <div className="flex gap-4 items-center">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-10">
                    <img src="https://source.unsplash.com/300x300/?profile" />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold">Md Khan</h2>
                  <p className="text-xs">17 min read</p>
                </div>
              </div>
              <div className="my-5 space-y-3">
                <h2 className="text-lg md:text-2xl font-bold">
                  Luxurious seaside escape with private beach, spa, and gourmet
                  dining.
                </h2>
                <p className="hidden lg:flex">
                  The resort’s commitment to excellence is reflected in its
                  attentive service, ensuring a bespoke experience for every
                  visitor. Whether seeking a peaceful retreat or an opulent
                  escape, Oceanview Resort is a haven of sophistication,
                  offering a slice of paradise with every indulgent amenity one
                  could desire.
                </p>
              </div>
            </div>
            <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50"></div>
          </div>
          <div className="flex flex-wrap mb-4 md:mb-0 md:gap-6 lg:gap-0 lg:flex-nowrap justify-between items-center">
            <h2 className="text-2xl mb-4 md:mb-0 md:text-5xl font-bold text-black/90">
              Our Honorable Customers
            </h2>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://source.unsplash.com/300x300/?profile" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://source.unsplash.com/300x300/?profile-photo" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://source.unsplash.com/300x300/?profile-image" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://source.unsplash.com/300x300/?profile-img" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+17</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-10">
          <div className="rounded-2xl relative overflow-hidden h-[20rem]">
            <img
              src="https://i.ibb.co/KxCjc4L/hotel-blog.jpg"
              alt=""
              className="h-full rounded-2xl"
            />
            <h2 className="absolute top-5 left-5 rounded-md px-4 py-1 bg-black/50 text-white">
              Hotel
            </h2>
            <div className="absolute w-11/12 text-white/80 left-5 bottom-0 z-10">
              <div className="flex gap-4 items-center">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-10">
                    <img src="https://source.unsplash.com/300x300/?profile-photo" />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold">Dr Sardar</h2>
                  <p className="text-xs">12 min read</p>
                </div>
              </div>
              <div className="my-5 space-y-3">
                <h2 className="text-base font-bold">
                  The Historic District with modern amenities and professional
                  service.
                </h2>
                <p className="text-xs hidden lg:flex">
                  The hotel features well-appointed conference rooms, a
                  state-of-the-art fitness center, is designed to provide an
                  unparalleled experience of comfort and sophistication.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl relative overflow-hidden h-[20rem]">
            <img
              src="https://i.ibb.co/f0NLc9P/travel-blog.jpg"
              alt=""
              className="h-full rounded-2xl"
            />
            <h2 className="absolute top-5 left-5 rounded-md px-4 py-1 bg-black/50 text-white">
              Vacation
            </h2>
            <div className="absolute w-11/12 text-white/80 left-5 bottom-0 z-10">
              <div className="flex gap-4 items-center">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-10">
                    <img src="https://source.unsplash.com/300x300/?profile-image" />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold">Mr Fakir</h2>
                  <p className="text-xs">7 min read</p>
                </div>
              </div>
              <div className="my-5 space-y-3">
                <h2 className="text-base font-bold">
                  Exclusive mountain getaway with ski-in/ski-out access and cozy
                  amenities.
                </h2>
                <p className="text-xs  hidden lg:flex">
                  The rental spans 2000 sq ft, providing ample space for
                  relaxation and adventure. Guests can unwind in comfort while
                  enjoying the breathtaking landscape and the retreat’s
                  top-notch amenities, ensuring a vacation experience that
                  blends excitement with relaxation.
                </p>
              </div>
            </div>
            <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/70"></div>
          </div>
        </div>
      </div>
      {/* Body part */}
      <div className="md:grid grid-cols-10 my-10 lg:mt-36">
        <h2 className="text-5xl font-bold text-center py-5 md:hidden">More blogs</h2>
        <div className="col-span-7 flex flex-col gap-10">
          {/* card 1 */}
          <div className="flex flex-col md:flex-row gap-10 border-2 md:border-none p-6 md:p-0 shadow-xl md:shadow-none rounded-xl">
            <div className="rounded-2xl relative overflow-hidden w-full md:w-[30%]">
              <img
                src="https://source.unsplash.com/650x650/?motel"
                alt=""
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between md:pr-10 w-full gap-4 md:gap-0 md:w-[70%]">
              <div className="space-y-3">
                <h2 className="text-2xl text-black/70 font-bold">
                  Exclusive mountain getaway with ski-in/ski-out access and cozy
                  amenities.
                </h2>
                <p className="text-black/60 font-semibold">
                  The rental spans 2000 sq ft, providing ample space for
                  relaxation and adventure. Guests can unwind in comfort while
                  enjoying the breathtaking landscape and the retreat’s
                  top-notch amenities, ensuring a vacation experience that
                  blends excitement with relaxation.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                      <img src="https://source.unsplash.com/300x300/?profile-photo" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Md Barkat</h2>
                    <p className="text-xs">7 min read</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center text-xl">
                  <FaRegBookmark />
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex flex-col md:flex-row gap-10 border-2 md:border-none p-6 md:p-0 shadow-xl md:shadow-none rounded-xl">
            <div className="rounded-2xl relative overflow-hidden w-full md:w-[30%]">
              <img
                src="https://source.unsplash.com/650x650/?hotel"
                alt=""
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between md:pr-10 w-full gap-4 md:gap-0 md:w-[70%]">
              <div className="space-y-3">
                <h2 className="text-2xl text-black/70 font-bold">
                  Exclusive mountain getaway with ski-in/ski-out access and cozy
                  amenities.
                </h2>
                <p className="text-black/60 font-semibold">
                  The rental spans 2000 sq ft, providing ample space for
                  relaxation and adventure. Guests can unwind in comfort while
                  enjoying the breathtaking landscape and the retreat’s
                  top-notch amenities, ensuring a vacation experience that
                  blends excitement with relaxation.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                      <img src="https://source.unsplash.com/300x300/?profile-man-photo" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">A Salam</h2>
                    <p className="text-xs">7 min read</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center text-xl">
                  <FaRegBookmark />
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="flex flex-col md:flex-row gap-10 border-2 md:border-none p-6 md:p-0 shadow-xl md:shadow-none rounded-xl">
            <div className="rounded-2xl relative overflow-hidden w-full md:w-[30%]">
              <img
                src="https://source.unsplash.com/650x650/?resort-forest"
                alt=""
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between md:pr-10 w-full gap-4 md:gap-0 md:w-[70%]">
              <div className="space-y-3">
                <h2 className="text-2xl text-black/70 font-bold">
                  Exclusive mountain getaway with ski-in/ski-out access and cozy
                  amenities.
                </h2>
                <p className="text-black/60 font-semibold">
                  The rental spans 2000 sq ft, providing ample space for
                  relaxation and adventure. Guests can unwind in comfort while
                  enjoying the breathtaking landscape and the retreat’s
                  top-notch amenities, ensuring a vacation experience that
                  blends excitement with relaxation.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                      <img src="https://source.unsplash.com/300x300/?profile-woman-image" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Mrs Kalam</h2>
                    <p className="text-xs">7 min read</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center text-xl">
                  <FaRegBookmark />
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="flex flex-col md:flex-row gap-10 border-2 md:border-none p-6 md:p-0 shadow-xl md:shadow-none rounded-xl">
            <div className="rounded-2xl relative overflow-hidden w-full md:w-[30%]">
              <img
                src="https://source.unsplash.com/650x650/?lodge"
                alt=""
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between md:pr-10 w-full gap-4 md:gap-0 md:w-[70%]">
              <div className="space-y-3">
                <h2 className="text-2xl text-black/70 font-bold">
                  Exclusive mountain getaway with ski-in/ski-out access and cozy
                  amenities.
                </h2>
                <p className="text-black/60 font-semibold">
                  The rental spans 2000 sq ft, providing ample space for
                  relaxation and adventure. Guests can unwind in comfort while
                  enjoying the breathtaking landscape and the retreat’s
                  top-notch amenities, ensuring a vacation experience that
                  blends excitement with relaxation.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                      <img src="https://source.unsplash.com/300x300/?user-image" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Dr. Alam</h2>
                    <p className="text-xs">7 min read</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center text-xl">
                  <FaRegBookmark />
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 mt-10 md:mt-0 md:border-l border-black/30 w-[95%] md:w-full mx-auto md:pl-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Trending this week</h2>
            <div className="mt-4 border-l-2 border-black/70 ps-4">
              <h2 className="font-bold text-black/70">
                Tranquil Haven: Luxe Retreat with Breathtaking Views and Serene
                Ambiance.
              </h2>
              <div className="flex gap-4 items-center mt-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-7">
                      <img src="https://source.unsplash.com/300x300/?profile-photos-2" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold">Abul mia</h2>
                  </div>
                </div>
            </div>
            <div className="mt-4 border-l-2 border-black/70 ps-4">
              <h2 className="font-bold text-black/70">
                Tranquil Haven: Luxe Retreat with Breathtaking Views and Serene
                Ambiance.
              </h2>
              <div className="flex gap-4 items-center mt-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-7">
                      <img src="https://source.unsplash.com/300x300/?profile-photos-3" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold">Abul mia</h2>
                  </div>
                </div>
            </div>
            <div className="mt-4 border-l-2 border-black/70 ps-4">
              <h2 className="font-bold text-black/70">
                Tranquil Haven: Luxe Retreat with Breathtaking Views and Serene
                Ambiance.
              </h2>
              <div className="flex gap-4 items-center mt-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-7">
                      <img src="https://source.unsplash.com/300x300/?profile-photos-4" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold">Abul mia</h2>
                  </div>
                </div>
            </div>
            <div className="mt-4 border-l-2 border-black/70 ps-4">
              <h2 className="font-bold text-black/70">
                Tranquil Haven: Luxe Retreat with Breathtaking Views and Serene
                Ambiance.
              </h2>
              <div className="flex gap-4 items-center mt-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-7">
                      <img src="https://source.unsplash.com/300x300/?profile-photos-5" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold">Abul mia</h2>
                  </div>
                </div>
            </div>
            <div className="mt-4 border-l-2 border-black/70 ps-4">
              <h2 className="font-bold text-black/70">
                Tranquil Haven: Luxe Retreat with Breathtaking Views and Serene
                Ambiance.
              </h2>
              <div className="flex gap-4 items-center mt-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-7">
                      <img src="https://source.unsplash.com/300x300/?profile-photos-6" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold">Abul mia</h2>
                  </div>
                </div>
            </div>
            <h2 className="underline text-end mt-5">See the full list</h2>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-bold text-black/80 mb-5">You might like</h1>
            <div className="flex flex-wrap gap-2">
                <p className="px-4 py-1 bg-green-600/40 text-bold text-base w-fit rounded-md">Sundarban</p>
                <p className="px-4 py-1 bg-green-600/40 text-bold text-base w-fit rounded-md">Cox's bazar</p>
                <p className="px-4 py-1 bg-green-600/40 text-bold text-base w-fit rounded-md">Sylhet</p>
                <p className="px-4 py-1 bg-green-600/40 text-bold text-base w-fit rounded-md">Bandarban</p>
                <p className="px-4 py-1 bg-green-600/40 text-bold text-base w-fit rounded-md">Sajek</p>
                <p className="px-4 py-1 bg-green-600/40 text-bold text-base w-fit rounded-md">Saint Martin</p>
                <p className="px-4 py-1 bg-green-600/40 text-bold text-base w-fit rounded-md">National Zoo</p>
                <p className="px-4 py-1 bg-green-600/40 text-bold text-base w-fit rounded-md">Kuakata</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
