
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
      backgroundImage: "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fabstract&psig=AOvVaw18grSyIOmztsz7HTEh1gWG&ust=1716144026236000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDtkeTsl4YDFQAAAAAdAAAAABAE')"
  }} className='bg-cover mt-[-110px]'>
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
