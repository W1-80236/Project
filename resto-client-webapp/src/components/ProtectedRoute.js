import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    let login = localStorage.getItem('login');
  
    if (!login) {
      // Store the intended destination before redirecting to the login page
      localStorage.setItem('destination', location.pathname);
      navigate('/login');
    }
  }, [navigate, location.pathname]);
  
  const login = localStorage.getItem('login');
  
  return login || rest.public ? <Component {...rest} /> : null;
}

export default ProtectedRoute;
