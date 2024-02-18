import 'bootstrap/dist/css/bootstrap.min.css';
import './Forgot.css';

function Forgot(){

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
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                
                type='email'
                placeholder='abc@test.com'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Enter New Password</label>
              <input
            
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
               
                type='password'
                className='form-control'
              />
            
              <button className='btn btn-success btn-lg mt-2'>
                Change Password
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </>

  );
}

export default Forgot;