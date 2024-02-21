
import { Link, useNavigate } from 'react-router-dom'

export function Navbar() {
  const navigate = useNavigate()

  

  const onLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
  
            <li>
              <button
                onClick={onLogout}
                className='nav-link'
                aria-current='page'
              >
                Logout
              </button>
            </li>
      
  )
}

export default Navbar
