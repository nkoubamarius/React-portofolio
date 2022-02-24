import React from 'react'
import './Testimonial.css'
import Avatar from '../../assets/avatar.png'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const testimonials=[
  {
    id:1,
    image: Avatar,
    name: 'Mario',
    review:'lorem ipsum dolor sit amet, consectetur adip'
  },
  {
    id:2,
    image: Avatar,
    name: 'Mario',
    review:'lorem ipsum dolor sit amet, consectetur adip'
  },
  {
    id:3,
    image: Avatar,
    name: 'Mario',
    review:'lorem ipsum dolor sit amet, consectetur adip'
  },
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>My Recent Work</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container"
            // install Swiper modules
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          >
            {testimonials.map(({id, name, image ,review}) =>{
              return(
                
                <SwiperSlide key={id} className="testimonial">
                  <div className="client__avatar">
                    <img src={image} alt=""/>
                  </div>
                  <h5>{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
                </SwiperSlide>
              )
            })}
        
      </Swiper>

    </section>
  )
}

export default Testimonial