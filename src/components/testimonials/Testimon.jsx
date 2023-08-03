import React from "react";
import "./Testimon.css";
import Data from "./TestimonData";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimon = () => {
  return (
    <section className='testimonials countainer section'>
      <h2 className='section__title'> Clientts & Reviews</h2>
      <Swiper
        className='testimonials__container grid'
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        pagination={{ clickable: true }}>
        {Data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className='testimonial__item' key={id}>
              <div className='thumb'>
                <img src={image} alt='avatar' />
              </div>
              <h3 className='testimonials__title'>{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className='comment'>{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimon;
