import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginAdmin } from '../services/admin'
import '../background.css'


export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
 
  const onSignin = async () => {
    if (email.length === 0) {
      toast.warn('enter email')
    } else if (password.length === 0) {
      toast.warn('enter password')
    } 
    else {
      // make the api call
      const result = await loginAdmin(email, password)
      if (result['message'] === 'success') {

        console.log(result)
        if(result.data[0].role !== "admin")
        {
          console.log("login as admin")
          alert("login as admin")
        }
        else{
          const token = result['data']['token']
          sessionStorage['token'] = token
  
          
          toast.success('Tables displayed')
          navigate('/table')
          alert("welcome admin")
          
        }
        // cache the token
        
      } else {
        toast.error(result['please register first'])
      }
    }
  }

  return (
    <>
    <div className="login-bg">
      <h1 className='title'style={{ color: 'green',fontSize: '5em' }}>Hello Admin</h1>

      <div className='row'>
        <div className='col-7'></div>
        <div className='col-7'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor='' style={{ color: 'blue',fontSize: '2em' }}>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Enter your Email'
                className='form-control short-input'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='' style={{ color: 'blue',fontSize: '2em'  }}>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Enter Passoword'
                className='form-control short-input '
              />
            </div>
            <div className='mb-3'>
              <div>
                create account here <Link to='/register'>Register here</Link>
              </div>
              <button onClick={onSignin} className='btn btn-primary mt-2'>
                Login
              </button>
            </div>
          </div>
        </div>
        <div className='col-7'></div>
      </div>
      </div>
    </>
  );
}

export default Login
