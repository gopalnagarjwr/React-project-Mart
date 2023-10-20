import React from 'react';

import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
const Header = () => {
  return (
    <div className='Container-fluid '>
      <div className='container'>
        <div className='row '>
          <div className='col-12'>
            <Navbar bg="" variant="" expand="lg" >
              <Container>
                <Navbar.Brand href="#home"><i class="fa fa-shopping-bag" aria-hidden="true"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav >
                    <Nav.Link href="#about" className="li">About</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className='col-12 '>
            <Navbar bg="" variant="" expand="lg" >
              <Container >
                <Navbar.Brand href="#home">Mart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Form className='m-auto'>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;
