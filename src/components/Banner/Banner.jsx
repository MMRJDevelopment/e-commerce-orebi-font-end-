import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "/banner.png";
import { useState } from "react";


export default function Banner() {
  const [activeDots, setActiveDots] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    beforeChange: (next) => {
    setActiveDots(next)
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "45%",
        }}
      >
        <ul >
          {dots.map((items, i) => {
            return (
              <li key={i} style={{display: "block" }}>
                {items}
              </li>
            );
          })}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i == activeDots
            ? {
                color: "#262626",
                borderRight: "3px #262626 solid",
                paddingRight: "30px",
                fontFamily: "dm sans",
                fontSize: "14px",
              }
            : {

                borderRight: "3px white solid",
                paddingRight: "30px",
                fontFamily: "dm sans",
                fontSize: "14px",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };

  return (
    <>
        <Slider {...settings}>
          <div>
            <img src={banner} alt=""  />
          </div>
          <div>
            <img src={banner}  alt="" />
          </div>
          <div>
            <img src={banner}  alt="" />
          </div>
        </Slider>
    </>
  );
}
