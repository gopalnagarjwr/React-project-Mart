import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  
  const user=JSON.parse(localStorage.getItem("User-info"));
     let navigate=useNavigate();
     function Out(){
           localStorage.clear();
          navigate('/Login');
     }


  return (
    <nav className="navbar navbar-expand-lg navbar-light  container-fluid fixed-top position-relative py-4 bg-info">
      <div className="container fixed-top bg-info rounded-bottom">
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </a>
          {
            localStorage.getItem("User-info") ?
              <>
              <Link to="/" className='text-black text-decoration-none mx-2'>Home</Link>
                <Link to="#Contact" className='text-black text-decoration-none mx-2'>ContactUs</Link>
                <Link to="#Items" className='text-black text-decoration-none mx-2'>Items</Link>
                <Link to="/Login" className='text-black text-decoration-none mx-2'>Login</Link>
              </> :
              <>
                <Link to="#About" className='text-black text-decoration-none mx-2'>About</Link>
                <Link to="/Login" className='text-black text-decoration-none mx-2'>Login</Link>
              </>
          }
        </div>
        <div className="d-flex align-items-center">
          <a className="link-dark me-3" href="#">
            <i class="fa fa-shopping-cart h4" aria-hidden="true"></i>
          </a>
          <Dropdown  >
            <Dropdown.Toggle variant="info" size="lg" >
               {user && user.name[0]}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item  onClick={()=>Out()}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Header;
