import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import AboutChef3 from '../utils/img/about-chef3.jpg';
import AboutChef4 from '../utils/img/about-chef4.jpg';
import AboutChef5 from '../utils/img/about-chef5.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { OurTeam } from '../components/OurTeam';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About Us!</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>Indian Food is just not about the food – it's about the people. Our warm and welcoming atmosphere, paired with attentive service, creates a sense of community where guests feel like family. From the moment you step through our doors, you'll be greeted with a smile and treated to an unforgettable dining experience, where every detail is thoughtfully considered to exceed your expectations.
                Join us at Carnival and discover why we're more than just a restaurant – we're a destination for food lovers, a place where culinary passion meets unparalleled hospitality. Whether you're celebrating a special occasion or simply craving a delicious meal, we look forward to welcoming you into our culinary family.</p>
                <h4>    After Lot Of struggle These Beauties Became Owner Of This Restaurant!!</h4>
            
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef3} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef4} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef5} className='img-fluid my-4' alt="" />
                    </div>
                </div>

          </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <OurTeam />
            </div>
        </div>
    )
}

export default About;