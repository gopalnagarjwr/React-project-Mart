import React, { Component, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import ViewAll from './ViewAll';
import Footer from './Footer';

const ItemDetails = () => {
    const [data, setData] = useState([]);
    const [all, setall] = useState({});
    const [li,setli]=useState([]);
    const param = useParams();
    const { id } = param;
        let a=parseInt(id);
    function call() {
        fetch("http://localhost:3000/profile")
            .then((response) => {
                response.json().then((da) => {
                    setData(da[a])
                    setall(da)
                });
            });
    }
    useEffect(() => {
        call();
    }, []);

    return (
        <div className='container-fluid'>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-md'>
                        <div className='w-md-75 m-auto'>
                            <img src={data.img} className='w-100' />
                        </div>
                    </div>
                    <div className='col-md my-auto'>
                        <p className="h5">{data.desc}</p>
                        <p className="h5 text-danger m-0 mt-4">Price : {data.p}</p>
                        <label className='small mb-md-3'>(Incl. all Taxes)</label>
                        <p className="secundery d-flex m-0">
                            <p className="text-decoration-line-through">MRP : {data.mrp}</p>
                            <label className='mx-2 h6'>(Save ₹2,799, 16.00% off)</label>
                        </p>

                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col h5">Similar products</div>
                </div>
                <ViewAll  />
            </div>
            <Footer />
        </div>
        
    )
}

export default ItemDetails
