import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";

import "assets/scss/plugins/_plugin-react-slick.scss";

export default function SectionCarousel({ noDots, children }) {
  const settings = {
    dots: noDots ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return <Carousel {...settings}>{children}</Carousel>;
}
