import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
import { toast } from 'react-toastify'

import { loginCustomer} from '../services/customer'

    export function Login() {
    
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
      
        const navigate = useNavigate()
      
        const onLogin = async () => {
          if (email.length == 0) {
            toast.warn('Enter Email')
          } else if (password.length == 0) {
            toast.warn('Enter Password')
          } else {
            // make the api call
            const result = await loginCustomer(email, password)
            if (result['status'] == 'success') {
              // cache the token
              const token = result['data']['token']
              sessionStorage['token'] = token
      
              toast.success('Logged In Successfully,Welcome to the Carnival Restaurant')
              navigate('/home')
            } else {
              toast.error(result['error'])
            }
          }
        }
      
    return (
        <>
        <div className='login-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Customer Login</h1>
                </div>
            </header>
            </div>
            
            <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form mt-3'>
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
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='xxxxxxxx'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div>
                Don't have an account? <Link to='/register'>Register here</Link>
              </div>
              <div>
                Forgot Password <Link to='/forgotPassword'>Click here</Link>
              </div>
              <button onClick={onLogin} className='btn btn-success btn-lg mt-2'>
                Login
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </>

  );
}

export default Login;