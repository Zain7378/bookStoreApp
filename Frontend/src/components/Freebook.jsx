import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from "../../public/list.json";
import Card from "./Card";

export default function Freebook() {
  const filterData = List.filter((data) => data.category === "Free");
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
    <>
      <div className="max-w-screen-2xl container px-4 md:px-20">
        <h1 className="font-semibold font-xl pb-2">Free Offered Books</h1>
        <p className="font-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          mollitia est officia molestias saepe odio tempore voluptatum,
          temporibus, numquam nulla culpa, quo ipsum. Illo, perspiciatis?
        </p>
      </div>
      <div className="max-w-screen-2xl container px-4 md:px-20">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Card key={item.id} item={item} /> 
          ))}
        </Slider>
      </div>
    </>
  );
}
