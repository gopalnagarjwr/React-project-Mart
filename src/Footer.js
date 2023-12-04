import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import './App.css';

export default function Footer() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section className='mb-4 h2 ft'>
                    <i class="fa fa-youtube-play mx-2" aria-hidden="true"></i>
                    <i class="fa fa-facebook-square mx-2" aria-hidden="true"></i>
                    <i class="fa fa-instagram mx-2" aria-hidden="true"></i>
                    <i class="fa fa-linkedin-square mx-2" aria-hidden="true"></i>
                    <i class="fa fa-twitter mx-2" aria-hidden="true"></i>
                </section>

                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>CONNECT WITH US</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start>
                                <input type='email' placeholder='Email Email Id' className='w-100 py-2 rounded' />
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn outline color='light' type='submit' className='my-md-1 my-4'>
                                    Click here
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>

                <section className=' mt-md-3 ft'>
                    <MDBRow>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0 '>
                            <h5 className='text-uppercase'>USEFUL LINKS</h5>

                            <ul className='list-unstyled mb-0 ft'>
                                <li>
                                    <a href='#!' className='text-white '>
                                        About Mart
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Help And Support
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Buying Guide
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Return Policy
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        B2B Orders
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Store Locator
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        E-Waste

                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>   </h5>

                            <ul className='list-unstyled mt-md-4'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Franchise Opportunity
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Site Map
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Careers At Mart
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Terms Of Use
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Disclaimer
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Unboxed
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Gift Card
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>PRODUCTS</h5>

                            <ul className='list-unstyled mb-0 '>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Televisions & Accessories
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Home Appliances

                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Phones & Wearables
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Computers & Tablets
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Kitchen Appliances
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Audio & Video
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Health & Fitness
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0 '>
                            <h5 className='text-uppercase'></h5>

                            <ul className='list-unstyled mt-md-4'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Grooming & Personal Care
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Cameras & Accessories
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Smart Devices
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Gaming
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Accessories
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Top Brands
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © Copyright 2023 Mart. All rights reserved
            </div>
        </MDBFooter>
    );
}