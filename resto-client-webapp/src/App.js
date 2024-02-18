import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout'
import Forgot from './pages/Forgot'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
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
              <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
             
              <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
              <Nav.Link href='/login' className='text-uppercase'>Sign In</Nav.Link>
              <Nav.Link href='/register' className='text-uppercase'>Register</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>

        <Route path='/' element={<ProtectedRoute Component={Home} />} />
        <Route path='/menu' element={<ProtectedRoute Component={Menu}  />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotPassword' element={<Forgot/>} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      <ToastContainer/>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ Developed in Sunbeam,India</p>
      </footer>
    </div>
  );
}

export default App;