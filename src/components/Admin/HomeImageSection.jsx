import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const HomeImageSectionAdmin = () => {
    const images = [
    'https://static.vecteezy.com/system/resources/thumbnails/032/734/475/small_2x/business-and-entrepreneurship-symposium-speaker-giving-a-talk-at-business-meeting-audience-in-conference-hall-ai-generative-photo.jpg',
    'https://topdanceled.com/wp-content/uploads/2024/08/Event-LED-Screens-for-Different-Events-1.jpg',
    'https://topdanceled.com/wp-content/uploads/2024/08/Event-LED-Screens-for-Different-Events-1.jpg'
  ];

  return (
     <div className="hero-section">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content" style={{ backgroundImage: `url(${image})` }}>
              <div className="overlay">
                <div className="text-content">
                  <h1>Table Mountain Cableway</h1>
                  <p>
                    <span className="info-item">
                      <span role="img" aria-label="calendar">🗓️</span> APRIL 14, 2024
                    </span>
                    <span className="info-item">
                      <span role="img" aria-label="location">📍</span> CAPE TOWN
                    </span>
                    <span className="info-item">
                      <span role="img" aria-label="mountain">⛰️</span> TABLE MOUNTAIN
                    </span>
                  </p>
                  <div className="button-group">
                    <button className="btn details-btn">DETAILS</button>
                    <button className="btn buy-ticket-btn">BUY TICKET</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeImageSectionAdmin
