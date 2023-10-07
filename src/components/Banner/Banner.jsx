
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";
import {  Autoplay} from 'swiper/modules';
import Slides from './Slides';

const Banner = ({events}) => {
  return (
    <div style={{
      backgroundImage: "url('https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/11/hero_area_image_3.jpg')"
  }} className='bg-cover mt-[-100px]'>
      <Swiper 
    pagination={{
          type: 'fraction',
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay]}
        className="mySwiper text-white"
     >
      {
        events.map(event => <SwiperSlide key={event.id}><Slides event={event}/> </SwiperSlide>)
      }
      
     
    </Swiper>
    </div>
  );
};

export default Banner;
