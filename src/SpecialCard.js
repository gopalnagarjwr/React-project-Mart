import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";
import './items.css';

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
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row pt-5">
                    <div className="col h5">Apple At Mart</div>
                </div>
                <div className="row  px-md-5">
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
                <div className="row  px-md-5">
                        <div className="col-4 py-3"  >
                            <div className=" bg-dark rounded">
                                <div className="w-100 m-auto">
                                    <img src= {arr[2]} className="w-100 rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="col-4 py-3">
                            <div className=" bg-dark rounded">
                                <div className="w-100 m-auto">
                                    <img src={arr[3]} className="w-100 rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="col-4 py-3">
                            <div className=" bg-dark rounded">
                                <div className="w-100 m-auto">
                                    <img src= {arr[4]} className="w-100 rounded" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default SpecialCard;