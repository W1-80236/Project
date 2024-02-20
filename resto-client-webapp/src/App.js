import React from 'react';
import './App.css';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Cart from './pages/Cart';
import Order from './pages/Order';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('token'); // Check if user is logged in

  const onLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
    toast.success('Logout');
  };

  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              Carnival Restaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
            {isLoggedIn ? null : (
                <>
                   <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
                  <Nav.Link href='/login' className='text-uppercase'>Sign In</Nav.Link>
                  <Nav.Link href='/register' className='text-uppercase'>Register</Nav.Link>
                </>
              )}
             
             <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>

              
              {isLoggedIn && (
                <>
                  <Nav.Link href='/menu' className='text-uppercase'>Menu</Nav.Link>
                  <Nav.Link href='/cart' className='text-uppercase'>Cart</Nav.Link>
                  <Nav.Link href='/order' className='text-uppercase'>Order</Nav.Link>
                  <Nav.Link href='/logout' onClick={onLogout} className='text-uppercase'>Logout</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
        <Route path='/forgotPassword' element={<Forgot />} />
      </Routes>
      <ToastContainer />

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ Developed in Sunbeam, India</p>
      </footer>
    </div>
  );
}

export default App;
