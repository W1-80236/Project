import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerAdmin } from '../services/admin'

export function Register() {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile_no, setMobileNo] = useState('')
  const [role,setRole] = useState('')

  // get the navigation function
  const navigate = useNavigate()

  const onSignup = async () => {
    if (first_name.length === 0) {
      toast.warn('enter first name')
    } else if (last_name.length === 0) {
      toast.warn('enter last name')
    } else if (email.length === 0) {
      toast.warn('enter email')
     } else if (mobile_no.length === 0) {
        toast.warn('enter mobile no')
    } else if (password.length === 0) {
      toast.warn('enter password')
    } else if (role.length === 0) {
      toast.warn('enter role')
    
    } else {
      // make the api call
      const result = await registerAdmin(first_name,last_name, email, mobile_no,password,role)
      if (result['status'] === 'success') {
        toast.success('Successfully registered the admin')
        navigate('/login')
      } else {
        toast.error(result['error'])
      }
    }
  }

  return (
    <>
      <h1 className='title'>register</h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                placeholder='Enter First Name'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                placeholder='Enter Last Name'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Enter Email'
                className='form-control'
              />
            </div>
            
            <div className='mb-3'>
              <label htmlFor=''>mobile no</label>
              <input
                onChange={(e) => setMobileNo(e.target.value)}
                type='Text'
                placeholder='Enter Mobile Number'
                className='form-control'
              />
              </div>
              <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Enter Password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Role</label>
              <input
                onChange={(e) => setRole(e.target.value)}
                type='Text'
                placeholder='Enter Role'
                className='form-control'
              />
            </div>
          <div className='mb-3'>
              <div>
                Registration Complete <Link to='/'>login here</Link>
              </div>
              <button onClick={onSignup} className='btn btn-primary mt-2'>
                register
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </>
  )
}

export default Register
