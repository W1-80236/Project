import React from 'react';
import './Menu.css';
import { Button,Card, CardBody, CardText, CardTitle, CardImg } from 'react-bootstrap';
import { getAllMenus } from '../services/food';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addItem } from '../features/cartSlice'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

function Menu({item}) {
    const [foods, setFoods] = useState([])

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

  const dispatch = useDispatch()

  const addItemToCart = (food) => {
    dispatch(addItem({ ...item, quantity: 1 }))
    toast.success(`Added ${food.food_name} to cart`);

  }
    
  
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu Card</h1>
                </div>
            </header>

            <div className='veg bg-dark py-5'>
    <div className='container'>
        {/* <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Menu Card</h2> */}
        <div className='row'>

            <div className='col-lg-6'>
                <div className='row'>
                <h3 className='text-center text-uppercase text-success'>Veg Menu</h3>

                    {foods.slice(0, 15).map((food) => (
                        <div className='col-md-6' key={food.food_id}>
                            <Card className='border-0'>
                                <CardBody>
                                    <CardTitle className='text-center fs-3'>{food.food_name}</CardTitle>
                                    <CardText className='text-center fs-3 fw-bold text-success'>{food.food_price}</CardText>
                                    <CardTitle className='text-center fs-3'>{food.food_type}</CardTitle>
                                    <div className='d-flex justify-content-center'> {/* Center the button */}
                                                <Button onClick={() => addItemToCart} className='btn btn-success'>Add to Cart</Button>
                                            </div>

                                    {/* <CardImg src={food.food_image} alt={food.food_name} className='card-img-top' /> */}
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='row'>
                <h3 className='text-center text-uppercase text-success'>Non Veg Menu</h3>
                    {foods.slice(15).map((food) => (
                        <div className='col-md-6' key={food.food_id}>
                            <Card className='border-0'>
                                <CardBody>
                                    <CardTitle className='text-center fs-3'>{food.food_name}</CardTitle>
                                    <CardText className='text-center fs-3 fw-bold text-success'>{food.food_price}</CardText>
                                    <CardTitle className='text-center fs-3'>{food.food_type}</CardTitle>
                                    {/* <CardImg src={food.image} alt={food.food_name} className='card-img-top' /> */}
                                    <div className='d-flex justify-content-center'> {/* Center the button */}
                                                <Button onClick={() => addItemToCart} className='btn btn-success'>Add to Cart</Button>
                                            </div>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
               
            </div>
        </div>
        <div className="text-center mt-4">
                    <Link to="/cart" className="btn btn-success btn-lg">View Cart</Link>
                </div>
    </div>
</div>

        </div>
    )
}

export default Menu;