import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";
import './items.css';
import ViewAll from "./ViewAll";
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
    <div className="arrow right" onClick={onClick}>
      {">"}
    </div>
  );
};
function Items() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((response) => {
        response.json().then((da) => {
          setData(da);
        });
      });
  }, []);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // Show 4 items at a time
    slidesToScroll: 4, // Scroll 4 items at a time
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };
  return (
    <div className="container-fluid">
      <div className="container">
      <div className="row ">
        <div className="col-11 h5">Deals of the Day</div>
        <div className="col-1 text-right text-info h6 ">
             <Link to="/viewall">View All</Link>  
        </div>
      </div>
      <div className="row">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="col-md-3 m-md-3 p-1" key={index}>
              <img src={item.img} className="w-75 m-auto" alt={item.desc} />
              <div>
                <p className="h6 text-danger">Price : {item.p}</p>
                <p className="secundery d-flex m-0">
                  MRP : <p className="text-decoration-line-through">{item.mrp}</p>
                </p>
                <p className="h6">{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}
export default Items;
