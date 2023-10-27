import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {
  const [email, setemail] = useState("");
  const [flag, setflag] = useState(0);
  const [password, setpass] = useState("");
  const [all, setall] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/Users').then((result) => {
      result.json().then((res) => {
        setall(res);
      })
    }, [])
  })

  function log() {
    all.map((data) => {
      if (data.email == email && data.password == password) {
        setflag(1);
        console.log("hello")
        localStorage.setItem("User-info", JSON.stringify(data));
        navigate('/');
      }
    });
    if(flag==0){
      alert("invalid user");
    }
    
  }

  return (
    <MDBContainer fluid className='bod'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email'  required   size="lg" onChange={(e) => setemail(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password'  required   size="lg" className='bg-dark text-white' onChange={(e) => setpass(e.target.value)} />


              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <button className='mx-2 px-5 py-2 border border-white rounded bg-info h6 text-black' onClick={() => log()} >Login </button>

              <div className='d-flex flex-row mt-3 mb-5 h4'>
                <i class="fa fa-facebook " aria-hidden="true"></i>
                <i class="fa fa-twitter mx-5" aria-hidden="true"></i>
                <i class="fa fa-google" aria-hidden="true"></i>

              </div>

              <div>
                <p className="mb-0">Don't have an account? <Link to="/SignUp" class="text-white-50 fw-bold" >Sign Up</Link></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;