import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/about-img.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';

function Home() {
    const navigate = useNavigate(); // Initialize navigate function

    // Function to handle clicking on the menu buttons
    const handleMenuClick = () => {
        const isLoggedIn = sessionStorage.getItem('token'); // Check if user is logged in
        if (!isLoggedIn) {
            navigate('/menu'); // Navigate to login page if not logged in
        } else {
            // Handle logic for clicking on the menu buttons
            // For now, just logging a message
            console.log("User is logged in. Handle logic for menu button click here.");
        }
    };

    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-black fw-bold'>Welcome To</h2>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>Carnival Restaurant</h1>
                            <MenuBtn  onClick={handleMenuClick}/>
                        </div>
                    </div>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>Welcome to Carnival Restaurant, where passion for food meets exceptional service. Nestled in the heart of Pune, our restaurant brings together a rich tapestry of flavors, crafted with care and dedication to culinary excellence. With a heritage rooted in 2023, we take pride in offering a dining experience that transcends mere sustenance, inviting our guests to embark on a journey of gastronomic delight.</p>
                        <p className='mb-5'>We believe that every dish tells a story. Our talented team of chefs, hailing from diverse culinary backgrounds, meticulously curates each menu item, sourcing the finest ingredients to create dishes that are both innovative and comforting. Whether you're craving classic comfort food or adventurous flavors from around the globe, our menu caters to every palate, ensuring a memorable dining experience for all.</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='menu-section py-5 text-light shadow'>
                <div className='container d-flex flex-column align-items-center'>
                <h4 className='fs-1 mb-5 text-uppercase fw-bold'>Chef's Special</h4>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Customer's Favorites</h2>

                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Veg Food</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Veg Thali</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>INR 100</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Veg Pulav</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>INR 110</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Puri Bhaji</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>INR 80</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Non Veg Food</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Fish Fry</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>INR 550</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Butter Chicken</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>INR 350</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Mutton Thali</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>INR 320</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <MenuBtn />
                </div>
            </div>

            <ImageGallery />

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;