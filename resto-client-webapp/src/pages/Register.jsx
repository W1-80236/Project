import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

import { registerCustomer } from '../services/customer'

export function Register() {
  const [cust_firstName, setFirstName] = useState('')
  const [cust_lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile_no, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // get the navigation function
  const navigate = useNavigate()

  const onRegister = async () => {
    if (cust_firstName.length == 0) {
      toast.warn('Enter First Name!')
    } else if (cust_lastName.length == 0) {
      toast.warn('Enter Last Name!')
    } else if (mobile_no.length == 0) {
      toast.warn('Enter Mobile No.!')
    } else if (email.length == 0) {
      toast.warn('Enter Email!')
    } else if (password.length == 0) {
      toast.warn('Enter Password!')
    } else if (confirmPassword.length == 0) {
      toast.warn('Enter Confirm Password!')
    } else if (password != confirmPassword) {
      toast.warn('Password Does Not Match!')
    } else {
      // make the api call
      const result = await registerCustomer(cust_firstName, cust_lastName, email, mobile_no, password)
      if (result['status'] == 'success') {
        toast.success('Successfully Registered the Customer')
        navigate('/login')
      } else {
        toast.error(result['error'])
      }
    }
  }

  return (
    <>
    <div className='register-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Registration</h1>
                </div>
            </header>
            </div>
     
    <div className='container my-5'>
            <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='abc@test.com'
                className='form-control'
              />
              </div>
      
              <div className='mb-3'>
              <label htmlFor=''>Mobile</label>
              <input
                onChange={(e) => setMobile(e.target.value)}
                type='mobile'
                placeholder='0000000000'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='xxxxxxxx'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type='password'
                placeholder='xxxxxxxx'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div>
                Already got an account? <Link to='/login'>Login here</Link>
              </div>
              <button onClick={onRegister} className='btn btn-success btn-lg mt-3'>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
      </div>

    </>
  )
}

export default Register;