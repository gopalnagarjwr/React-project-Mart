import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";
import './items.css';
import { Link } from "react-router-dom";

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

function Brands(props) {
  let ap=props;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/brandItem")
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
            <div className="col-md-5 my-5 p-0" key={index}>
             <Link to='' className="text-center h5 text-black text-decoration-none"> 
              <div className="w-100 m-auto">
              <img src={item.img} className="rounded-circle w-75 m-auto" alt={item.desc} />
              </div>
              <p >{item.name}</p>
              </Link>
            </div>
           
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}
export default Brands;