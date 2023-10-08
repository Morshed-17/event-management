// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Marquee from "react-fast-marquee";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import CategoryCard from "./categoryCard";

// import required modules

export default function Category() {
  const [orgs, setOrgs] = useState([]);
  useEffect(() => {
    fetch("/organizers.json")
      .then((res) => res.json())
      .then((data) => setOrgs(data));
  }, []);
  return (
    <>
      <div className="bg-[#4439a8] pt-12 pb-36  my-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center my-6">
            <h3 className=" text-2xl lg:text-4xl font-semibold text-white font-caveat mb-4">
              Organizers
            </h3>
            <h2 className=" text-3xl lg:text-5xl font-bold text-white">
              Featured Organizers
            </h2>
          </div>
          <div className="px-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <div>
            <Marquee>
              {orgs.map((org, idx) => (
                
                  <CategoryCard key={idx} org={org} />

              ))}
              </Marquee>
            </div>
          </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
