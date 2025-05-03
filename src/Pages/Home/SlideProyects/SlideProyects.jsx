import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SlideProyects.css";
import { NavLink } from "react-router-dom";

import CrimsonSoul from "../../../Components/Games/CrimsonSoul/Banner.png";

const images = [
  {
    src: CrimsonSoul,
    link: "/CrimsonSoul",
    caption: "Crimson Soul - Google Play Store",
  },
];

function SlideProyects() {
  return (
    <div className="SlideMainContainer">
      <Swiper
        className="SwiperAjust"
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <NavLink to={img.link}>
              <div className="slide-container">
                <img
                  src={img.src}
                  alt={`slide-${index}`}
                  className="slide-image"
                />
                <div className="slide-caption">{img.caption}</div>
              </div>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideProyects;
