import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AddItem() {
    const [data,setdata]=useState([]);
  
    useEffect(()=>{
    call();
    },[]);
    function call(){
        fetch('http://localhost:3000/AddToCard').then((response) => {
            response.json().then((da) => {
                setdata(da); 
            });
        })
    }
    function subTotal(){
        let sum=0;
        for(let i=0; i<data.length; i++){
           sum=sum+Number.parseInt(data[i].p);
        }
        return sum;
    }

    function remove(id){
        fetch(`http://localhost:3000/AddToCard/${id}`,{
            method:'DELETE'
          }).then((respons)=>{
            respons.json().then(data=>{
                call();
            })
          })
    }
    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <Header />
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody className="p-4">
                                <MDBRow>
                                    <MDBCol lg="7">
                                    <div className="position-sticky top-0  z-1 bg-white pb-1">
                                        <MDBTypography tag="h5" >
                                            <Link  className="text-body" to='/'>Continue shopping</Link>
                                        </MDBTypography>

                                        <hr />

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p className="mb-1">Shopping cart</p>
                                                <p className="mb-0">You have {data.length} items in your cart</p>
                                            </div>
                                            <div>
                                                <p>
                                                    <span className="text-muted">Sort by:</span>
                                                    <a href="#!" className="text-decoration-none text-body">
                                                        price
                                                        <i class="fa fa-sort mx-1" aria-hidden="true"></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                        {
                                          data.map((d)=>
                                                <MDBCard className="mb-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between">
                                                <Link to={`/viewall/detail/${d.pn-1}`} className="text-body text-decoration-none">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <MDBCardImage
                                                                src={d.img}
                                                                fluid className="rounded-3" style={{ width: "65px" }}
                                                                alt="Shopping item" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <MDBTypography tag="h5">
                                                                Iphone 11 pro
                                                            </MDBTypography>
                                                            <p className="small mb-0">256GB, Navy Blue</p>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: "50px" }}>
                                                            <MDBTypography tag="h5" className="fw-normal mb-0">
                                                            <i class="fa fa-trash-o hover-effect" aria-hidden="true" onClick={()=>remove(d.id)}></i>
                                                            </MDBTypography>
                                                        </div>
                                                        <div style={{ width: "80px" }}>
                                                            <MDBTypography tag="h5" className="mb-0">
                                                               $ {d.p}
                                                            </MDBTypography>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <MDBIcon fas icon="trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                       
                                        )
                                        }

                                      
                                    </MDBCol>

                                    <MDBCol lg="5">
                                        <MDBCard className="bg-primary text-white rounded-3 position-sticky top-0">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        Card details
                                                    </MDBTypography>
                                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                                                </div>

                                                <p className="small">Card type</p>
                                                <a href="#!" type="submit" className="text-white h3 mx-1">
                                                    <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                                                </a>
                                                <a href="#!" type="submit" className="text-white h3 mx-1">
                                                    <i class="fa fa-cc-visa" aria-hidden="true"></i>
                                                </a>
                                                <a href="#!" type="submit" className="text-white h3 mx-1">
                                                    <i class="fa fa-cc-amex" aria-hidden="true"></i>
                                                </a>
                                                <a href="#!" type="submit" className="text-white h3 mx-1">
                                                    <i class="fa fa-cc-paypal" aria-hidden="true"></i>
                                                </a>

                                                <form className="mt-2">
                                                    <label>Name</label>
                                                    <MDBInput className="mb-4 bg-primary" type="text" size="lg"
                                                        placeholder="Cardholder's Name" contrast />
                                                    <label>Card Number</label>
                                                    <MDBInput className="mb-4 bg-primary" type="text" size="lg"
                                                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                                                    <MDBRow className="mb-4">
                                                        <MDBCol md="6">
                                                            <label>Expiration</label>
                                                            <MDBInput className="mb-4 bg-primary" type="text" size="lg"
                                                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                                                        </MDBCol>
                                                        <MDBCol md="6">
                                                            <label>Cvv</label>
                                                            <MDBInput className="mb-4 bg-primary" type="text" size="lg" minLength="3"
                                                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                                                        </MDBCol>
                                                    </MDBRow>
                                                </form>

                                                <hr />

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Subtotal</p>
                                                    <p className="mb-2">${subTotal()}</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Shipping</p>
                                                    <p className="mb-2">${data.length*20}</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Total(Incl. taxes)</p>
                                                    <p className="mb-2">${(data.length*20)+subTotal()}</p>
                                                </div>

                                                <button className="btn btn-info btn-lg w-100 my-lg-2">
                                                    <div className="d-flex justify-content-between text-white">
                                                        <span>${(data.length*20)+subTotal()}</span>
                                                        <span>
                                                            Checkout{" "}
                                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                                        </span>
                                                    </div>
                                                </button>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </section>
    );
}