import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

function Banner({ Components }) {
  const bannerStyle = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  console.log(Components);
  return (
    <Swiper {...bannerStyle}>
      {Components.map((Component, i) => (
        <Component key={i} />
      ))}
    </Swiper>
  );
}

export default Banner;
