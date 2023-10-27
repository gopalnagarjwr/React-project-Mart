import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

  const SignUp = () => {
      const[name,setname]=useState("");
      const[email,setemail]=useState("");
      const[password,setpass]=useState("");
       const navigate=useNavigate();
      function sign (){
        let data={name,email,password};
         fetch('http://localhost:3000/Users',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((result) => {
            result.json().then((res) => {
                localStorage.setItem("User-info",JSON.stringify(res));
                navigate('/')
                alert("data submited");
            })
        })
      }

    return (
        <section className="vh-100" style={{ backgroundColor: '#eee' }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: 25 }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                            <i class="fa fa-user me-4 h5" aria-hidden="true"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" required placeholder='Your Name'  onChange={(e)=>setname(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                            <i class="fa fa-envelope me-3 h5" aria-hidden="true"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control" required placeholder='Your Email' onChange={(e)=>setemail(e.target.value)}/>
                                                   
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                               <i class="fa fa-lock me-4 h5" aria-hidden="true"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" className="form-control" required placeholder='Password' onChange={(e)=>setpass(e.target.value)} />
                                                   
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                            <i class="fa fa-key me-3 h5" aria-hidden="true"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control" required placeholder='Repeat your password' />
                                                </div>
                                            </div>
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" required defaultValue id="form2Example3c" />
                                                <label className="form-check-label h6" htmlFor="form2Example3">
                                                    I agree all statements in <a href="#!" className='text-decoration-none'>Terms of service</a>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg" onClick={()=>sign()}>Register</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SignUp
