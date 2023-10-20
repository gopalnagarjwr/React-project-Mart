import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import './items.css';

function Card() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/profile")
            .then((response) => {
                response.json().then((da) => {
                    setData(da);
                });
            });
    }, []);

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-11 h5">Deals On Laptops</div>
                    <div className="col-1 text-right text-info h6 "></div>
                </div>
                <div className="row bg-white  px-5">

                    {data.map((item, index) => (
                        <div className="col-md-3 py-3" key={index}>
                            <div className=" bg-dark rounded">
                                <div className="w-75 m-auto">
                                    <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664419033/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257390_0_uih5kd.png?tr=w-640" className="w-100" />
                                </div>
                                <p className="text-white m-2 h6" >{item.desc}</p>
                                <p className="text-white m-2 h6">{item.p}</p>
                                <label className="text-white mx-2"><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i></label>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
export default Card;