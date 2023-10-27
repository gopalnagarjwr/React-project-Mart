import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";
import './items.css';


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

function  SpecialCard() {
    const [data, setData] = useState([]);
    const[arr,setdata]=useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/SpecialCard")
        .then((response) => {
            response.json().then((da) => {
                setData(da);
            });
        });
    }, []);
   data.map((item)=>{
       arr.push(item.img)
   })

   const settings = {
    infinite: true,
    speed: 1800,
    slidesToShow: 3, // Show 4 items at a time
    slidesToScroll: 2, // Scroll 4 items at a time
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };
    return (
        <div className="container-fluid">
            <div className="container px-5 my-md-3">
                <div className="row pt-5">
                    <div className="col h5">Apple At Mart</div>
                </div>
                <div className="row px-md-2 bg-dark">
                        <div className="col-6 py-3"  >
                            <div className=" bg-dark rounded ">
                                <div className="w-100 m-auto">
                                    <img src={arr[0]} className="w-100 rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 py-3">
                            <div className=" bg-dark rounded">
                                <div className="w-100 m-auto">
                                    <img src={arr[1]} className="w-100 rounded" />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row bg-dark ">
                <Slider {...settings}>
                  {data.map((item)=>
                    <div className="col px-2"  >
                            <div className=" bg-dark rounded">
                                <div className="w-100 m-auto">
                                    <img src= {item.img} className="w-100 rounded" />
                                </div>
                            </div>
                        </div>
                  )}
                  </Slider>
                </div>
            </div>
        </div>
    );
}
export default SpecialCard;