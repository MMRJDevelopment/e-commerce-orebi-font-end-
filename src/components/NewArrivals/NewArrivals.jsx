import Container from "../layouts/Container";
import Slider from "react-slick";
import Heading from "../layouts/Heading";
import Products from "../layouts/Products";
import SampleNextArrow from "../layouts/SampleNextArrow";
import SamplePrevArrow from "../layouts/SamplePrevArrow";



export default function NewArrivals() {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className="mt-[128px]">
      <Heading title="New Arrivals" />
      <Slider {...settings} className="gap-x-10">
        <Products className="mt-12" badge={true} />
        <Products className="mt-12" badge={true} />
        <Products className="mt-12" badge={false} />
        <Products className="mt-12" badge={false} />
      </Slider>
    </Container>
  );
}
