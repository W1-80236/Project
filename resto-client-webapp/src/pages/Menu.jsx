import React from 'react';
import './Menu.css';
import { Button,Card, CardBody, CardText, CardTitle, CardImg } from 'react-bootstrap';
import { getAllMenus } from '../services/food';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addItem } from '../features/cartSlice'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import config from '../config'

function Menu({item}) {
    const [foods, setFoods] = useState([])
    const dispatch = useDispatch(); 

  const loadAllFood = async () => {
    const result = await getAllMenus()
    if (result['status'] == 'success') {
      console.log(result)
      setFoods(result['data'])
    } else {
      toast.error(result['error'])
    }
  }

  useEffect(() => {
    loadAllFood()
  }, [])

 
  const addToCart = (food) => {
    dispatch(addItem( { ...item, quantity:1}));
    food.isAdded = true;
     toast.dark(`${food.food_name} added to cart`);


};
    
  
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu Card</h1>
                </div>
            </header>

            <div className='veg bg-dark py-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <h3 className='text-center text-uppercase text-success mb-4'>Veg Menu</h3>
                <div className='row'>
                    {foods.slice(0, 15).map((food) => (
                        <div className='col-md-6 mb-4' key={food.food_id}>
                            <Card className='border-0'>
                                <CardImg src={config.server + '/' + food.image} alt={food.food_name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} className='card-img-top' />
                                <CardBody>
                                    <CardTitle className='text-center fs-5 mb-2'>{food.food_name}</CardTitle>
                                    <CardText className='text-center fs-6 text-success mb-2'>Price: ₹{food.food_price}</CardText>
                                    <CardText className='text-center fs-6 mb-2'>Type: {food.food_type}</CardText>
                                    <div className='d-flex justify-content-center'>
                                    <Button onClick={() => addToCart(food)} className='btn btn-success'> {food.isAdded ? 'Added' : 'Add to Cart'}</Button>

                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className='col-lg-6'>
                <h3 className='text-center text-uppercase text-success mb-4'>Non Veg Menu</h3>
                <div className='row'>
                    {foods.slice(15).map((food) => (
                        <div className='col-md-6 mb-4' key={food.food_id}>
                            <Card className='border-0'>
                                <CardImg src={config.server + '/' + food.image} alt={food.food_name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} className='card-img-top' />
                                <CardBody>
                                    <CardTitle className='text-center fs-5 mb-2'>{food.food_name}</CardTitle>
                                    <CardText className='text-center fs-6 text-success mb-2'>Price: ₹{food.food_price}</CardText>
                                    <CardText className='text-center fs-6 mb-2'>Type: {food.food_type}</CardText>
                                    <div className='d-flex justify-content-center'>
                                        <Button onClick={() => addToCart(food)} className='btn btn-success'> {food.isAdded ? 'Added' : 'Add to Cart'}</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
        <div className="text-center mt-4">
                    <Link to="/cart" className="btn btn-success btn-lg">View Cart</Link>
        </div>
    </div>
</div>

    )
}

export default Menu;