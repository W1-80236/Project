import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './OurTeam.css';
import Person1 from '../utils/img/person1.jpg';
import Person2 from '../utils/img/person2.jpg';
import Person3 from '../utils/img/person3.jpg';
import Person4 from '../utils/img/person4.jpg';
import Person5 from '../utils/img/person5.jpg';


export function OurTeam() {
    return (
        <div className="team-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Restaurant Team</h2>
            <div className="row g-5">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText  style={{ color: 'black' }}>
                                    "Hello! I'm Shruti from Pune."<br/>
                                    Contact: +91 7030363130<br/>
                                    Email: shrutivs0819@gmail.com
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Shruti Sawant</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText  style={{ color: 'black' }}>
                                "Hello! I'm Payal from Latur."<br/>
                                    Contact: +91 75583 41108<br/>
                                    Email: payal@gmail.com
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Payal Deshmane</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText  style={{ color: 'black' }}>
                                "Hello! I'm Kalyani from Nagpur."<br/>
                                    Contact: +91 92845 22492<br/>
                                    Email: kalyani@gmail.com                              </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Kalyani Ramteke</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText style={{ color: 'black' }}>
                                "Hello! I'm Tejaswini from Sangli."<br/>
                                    Contact:  +91 94228 45429<br/>
                                    Email: tejaswini@gmail.com    
                               
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Tejaswini Patil</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText  style={{ color: 'black' }}>
                                "Hello! I'm Swapnali from Nashik."<br/>
                                    Contact:  +91 97675 09084<br/>
                                    Email: swapnali@gmail.com    

                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person5} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Swapnali Mahajan</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}