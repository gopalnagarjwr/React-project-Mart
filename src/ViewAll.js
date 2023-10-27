import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ViewAll = (props) => {
   
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
    <div className='container-fluid'>
      <div className='container'>
      <div className="row pt-5">
                    <div className="col h5">View ALL Deals</div>
                </div>
        <div className='row'>
          {data.map((item, index) => (
           
            <div className="col-md-3 p-1" key={index} >
            <Link to={`/viewall/detail/${index}`} className='text-decoration-none text-black' >
              <img src={item.img} className="w-75 m-auto" alt={item.desc} />
              <div>
                <p className="h6 text-danger">Price : {item.p}</p>
                <p className="secundery d-flex m-0">
                  MRP : <p className="text-decoration-line-through">{item.mrp}</p>
                </p>
                <p className="h6">{item.desc}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ViewAll;
