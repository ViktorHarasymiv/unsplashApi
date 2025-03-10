import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import {FreeMode, Navigation } from 'swiper/modules';

import SlideButtons from './SlideButtons';


function SwiperNav({onSearch}) {

    const navigationValue = [ 
        'Wallpapers',
        'Nature',
        '3D Renders',
        'Textures',
        'Architecture',
        'Travel',
        'Animals',
        'Fashion & Beauty',
        'Sports',
        'Food & Drink'
    ]

  return (
    <Swiper
      slidesPerView={8}
      spaceBetween={30}
      navigation={true}
      freeMode={true}
      modules={[FreeMode, Navigation]}
      className="mySwiper"
      >
      {navigationValue.map((items, index) => 
      <SwiperSlide key={index} className="button_slide">
        <SlideButtons onSearch={onSearch}  value={items}/>
       </SwiperSlide>)}
    </Swiper>
  )
}

export default SwiperNav