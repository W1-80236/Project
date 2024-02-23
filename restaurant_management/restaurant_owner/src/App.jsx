import React, { useState, useEffect } from 'react';
import SplashPage from './pages/SplashPage';
import RestaurantLogin from './pages/RestaurantLogin';
import 'react-toastify/dist/ReactToastify.css'
import Register from './pages/Register';
import {  Routes, Route } from 'react-router-dom';
import Table from './pages/Table';
import Bill from './pages/Bill';


function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Adjust the time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container-fluid'>
      {showSplash ? <SplashPage /> : <RestaurantLogin />}
  
 
<Routes>
 <Route path='/register' element={<Register />} />
 <Route path='/table' element={<Table />} />
 <Route path='/orders' element={<Bill />} />


</Routes>


</div>
  );
}

export default App;
