import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";
import './items.css';

// Define custom arrow components outside of the Items component
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow left" onClick={onClick}>
    {"<"}
  </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow right " onClick={onClick}>
      {">"}
    </div>
  );
};

function Brands() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Brands")
      .then((response) => {
        response.json().then((da) => {
          setData(da);
        });
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 6, // Show 4 items at a time
    slidesToScroll: 4, // Scroll 4 items at a time
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };

  return (
    <div className="container-fluid">
      <div className="container">
      <div className="row ">
        <div className="col h5 pt-5">Top Brands</div>
      </div>
      <div className="row ">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="col-md-3 my-3" key={index}>
              <div className=" w-75 m-auto">
              <img src={item.img} className="rounded-circle w-100" alt={item.desc} />
              </div>
              <p className="text-white text-center">ItemName</p>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}
export default Brands;