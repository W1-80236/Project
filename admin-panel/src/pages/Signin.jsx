import { Link } from "react-router-dom"

export function Signin(){
    return (
        // <> create fragment
        <>
        <h1 className="title" >Signin</h1>
      
      <div className="row">
        <div className="col"></div>
        <div className="col">
        <div className="form"></div>         
        <div className="mb-3">
     <label htmlFor="">Email</label>
     <input type="Email" 
     placeholder="abc@test" 
     className="form-control" />
    </div>


    <div className="mb-3">
     <label htmlFor="">Password</label>
     <input type="Password" 
     placeholder="xxxxxxx" 
     className="form-control" />
      </div> 

        <div className="mb-3">
            <div >
       Dont't have an account? <Link to='/signup'>Signup Here</Link>
       </div>
      <button className="btn btn-primary mt-2"> Signin</button>
     </div> 


        </div>
        <div className="col"></div>
      </div>
        </>
    )
}
export default Signin