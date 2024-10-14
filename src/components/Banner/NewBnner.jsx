import { useState } from "react";
import Slider from "react-slick";
import banner from "/banner.png";
import "slick-carousel/slick/slick.css";

const NewBanner = () => {
  let [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0",
                fontFamily: "dm sans",
                fontSize: "14px",
              }
            : {
                width: "30px",
                borderRight: "3px white solid",
                padding: "10px 0",
                color: "transparent",
                fontFamily: "dm sans",
                fontSize: "14px",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      fontSize: "12px",
                      borderRight: "2px #262626 solid",
                    }
                  : {
                      width: "30px",
                      //   color: "#262626",
                      fontSize: "12px",
                      borderRight: "2px white solid",
                      color: "transparent",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className="focus-visible:border-none focus-visible:bg-none focus-visible:outline-none"
    >
      <div className="focus-visible:border-none focus-visible:bg-none focus-visible:outline-none">
        <img src={banner} alt="" />
      </div>
      <div className="focus-visible:border-none focus-visible:bg-none focus-visible:outline-none">
        <img src={banner} alt="" />
      </div>
      <div className="focus-visible:border-none focus-visible:bg-none focus-visible:outline-none">
        <img src={banner} alt="" />
      </div>
    </Slider>
  );
};

export default NewBanner;
