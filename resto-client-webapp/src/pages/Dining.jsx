import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dining.css';
import { Container, Row, Col, Dropdown, DropdownButton, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { toast } from 'react-toastify';

function Dining() {
    const handleSelect = (eventKey) => {
        toast.success(`You have selected table number: ${eventKey}`);
        
    };

    return (
        <div className='dining-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Dining Hall</h1>
                </div>
            </header>
           
            
            <div className='container my-5 center'>
            

            <h3>Please Select the Dining Table as per your Wish and Enjoy Your Meal!<br/>
                     <br/> We are always here to Serve you!!</h3>

<hr/>

            <Container>
      <Row className="mt-3">
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <DropdownButton
            id="dropdown-button-drop-down"
            title="Select Your Dining Table"
            onSelect={handleSelect}
            variant="warning"
          >
            <Dropdown.Item eventKey="1">Table 1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Table 2</Dropdown.Item>
            <Dropdown.Item eventKey="3">Table 3</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Row>
                        <Col className="text-center">
                            <Link to="/menu">
                                <Button variant="btn btn-success btn-lg">View Menu Card</Button>
                            </Link>
                        </Col>
                    </Row>
    </Container>
            
            </div>
            </div>
        

    );
}
export default Dining;
