//import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios";
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';
import { Form } from 'react-bootstrap';



//const axios = require('axios');

function Login() {
   

    return (
        <>

        <div className='login-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Sign IN</h1>
                </div>
            </header>
            </div>

            
            <div className='container my-5'>
          
                    <div className='col-lg-6 d-flex justify-content-center'>
                     
                    <Form>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='email'>Email</Form.Label>
                                    <Form.Control type='text' id='email' />
                                </div>
                                
                                <br/>
                                <br/>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='password'>Password</Form.Label>
                                    <Form.Control type='password' id='password' />
                
                                </div>
                                </Form.Group>
                                <Link className="col-md-6" to="/forgotpassword">Forgot Password?</Link>
                                <br/>

                                <Link className="col-md-7" to="/register">Register Here..</Link>
                                <br/>
                                <br/>
                               <button type="submit"  class="btn btn-success btn-lg">Sign In</button>
                            </Form>
                      
                    </div>
                     
                </div>
                
               


    </>

  );
}

export default Login;