import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Forgot.css';

function Forgot(){

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleResetPassword = async () => {
  
    setErrorMessage('');
    setSuccessMessage('');

    if (!email) {
      setErrorMessage('Please enter your email.');
      return;
    }


    if (!newPassword) {
      setErrorMessage('Please enter your new password.');
      return;
    }

 
    if (!confirmPassword) {
      setErrorMessage('Please confirm your new password.');
      return;
    }

  
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      
      const response = await fetch('/customer_tb/resetpassword/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          newPassword: newPassword,
        }),
      });

      
      if (response.ok) {
        setSuccessMessage('Password reset successful.');
       
        setEmail('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        // Handle error response
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setErrorMessage('An error occurred while resetting your password. Please try again later.');
    }
  };

  return (
    <>
      <div className='forgot-page'>
        <header className='mt-5'>
          <div className='container h-100 d-flex align-items-center justify-content-center'>
            <h1 className='text-light'>Forgot Password</h1>
          </div>
        </header>
      </div>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form mt-3'>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='abc@test.com'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='newPassword'>Enter New Password</label>
              <input
                type='password'
                id='newPassword'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='form-control'
              />
            </div>
            <button onClick={handleResetPassword} className='btn btn-success btn-lg mt-2'>
              Change Password
            </button>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </>
  );
}

export default Forgot;
