import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'react-bootstrap';
import VegMenuImg from '../utils/img/breakfast.jpg';
import NonVegMenuImg from '../utils/img/lunch.jpg';
import Idali from '../utils/img/idli.jpg';
import Manchurian from '../utils/img/manchurian.jpg';
import MeduVada from '../utils/img/meduvada.jpg'
import PaneerTikka from '../utils/img/paneertikka.jpg'
import Roti from '../utils/img/roti.jpg'
import Naan from '../utils/img/naan.jpg'
import JeeraRice from '../utils/img/jeerar.jpg'
import VegBiryani from '../utils/img/vegbiryani.jpeg'
import VegPulav from '../utils/img/vegpulao.jpeg'
import Hakka from '../utils/img/hakka.jpg'
import PavBhaji from '../utils/img/pavbhaji.jpeg'
import MasalaDosa from '../utils/img/masaladosa.jpg'
import PuriBhaji from '../utils/img/puribhaji.jpg'
import VegThali from '../utils/img/vegthali.jpg'
import MisalPav from '../utils/img/misalpav.jpeg'

const VegMenu = [
   
    {
        id: 1,
        name: 'Idali Sambar',
        description: '',
        price: '₹30 ',
        image: Idali
    },
    {
        id: 2,
        name: 'Gobi-Manchurian',
        description: 'tortilla, egg, cheese, potatoes, pork meat',
        price: '₹40',
        image: Manchurian
    },
    {
        id: 3,
        name: 'Medu Vada',
        description: 'Bread, Sprouts, Farsan',
        price: '₹70',
        image: MeduVada
    },
    {
        id: 4,
        name: 'Paneer Tikka Masala',
        description: 'Bread, Sprouts, Farsan',
        price: '₹70',
        image: PaneerTikka
        
    },
    {
        id: 5,
        name: 'Roti',
        description: 'Bread, Sprouts, Farsan',
        price: '₹70',
        image: Roti
    },
    {
        id: 6,
        name: 'Naan',
        description: 'Bread, Sprouts, Farsan',
        price: '₹70',
        image: Naan
    },
    {
        id: 7,
        name: 'Jeera Rice',
        description: 'Bread, Sprouts, Farsan',
        price: '₹70',
        image: JeeraRice
    },
    {
        id: 8,
        name: 'Veg Biryani',
        description: 'Bread, Sprouts, Farsan',
        price: '₹70' ,
        image: VegBiryani
    },
    {
        id: 9,
        name: 'Veg Pulav',
        description: 'Bread, Sprouts, Farsan',
        price: '₹70',
        image: VegPulav
    },
    {
        id: 10,
        name: 'Hakka Noodles',
        description: 'Bread, Sprouts, Farsan',
        price: '₹70',
        image: Hakka
    },
    {
        id: 11,
        name: 'Pav Bhaji',
        description: 'Bread, Sprouts, Farsan',
        price: '₹70',
        image: PavBhaji
    },
    {
        id: 12,
        name: 'Masala Dosa',
        description: 'Bread, Sprouts, Farsan',
        price: '₹70',
        image: MasalaDosa
    },
    {
        id: 13,
        name: 'Puri Bhaji',
        description: '',
        price: '₹70',
        image: PuriBhaji
    },
    {
        id: 14,
        name: 'Veg Thali',
        description: '3 Chapati, Sabji of Your Choice, Rice ,Daal, Sweet ',
        price: '₹100',
        image: VegThali
    },
    {
        id: 15,
        name: 'Misal Pav',
        description: 'Bread, Sprouts, Farsan',
        price: '₹60',
        image: MisalPav
    }
   
];
const NonVegMenu = [
    
];


function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='veg my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Veg Menu</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        {/* <div className='col-lg-6 d-flex justify-content-center'>
                            { <img src={VegMenuImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" /> }
                        </div> */}
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {VegMenu.map((veg) => (
                                <div key={veg.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {veg.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {veg.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {veg.price}
                                            </CardText>
                                                <CardImg src={veg.image} alt={veg.name} className='card-img-top' />
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='nonveg bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Non Veg Menu</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {NonVegMenu.map((nonveg) => (
                                <div key={nonveg.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {nonveg.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {nonveg.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {nonveg.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={NonVegMenuImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Menu;