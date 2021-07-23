import React from 'react';
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap';
function Header(props){
    return(
        <div className="conatiner-fluid">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Covid-19-Dashboard</Navbar.Brand>
            <Nav className="mr-auto">
              
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
            <Form inline className="form">
              <FormControl size="lg" type="text" placeholder="Search" className="mb-2 mr-sm-2" onChange={(e) => props.country(e.target.value)}/>
            </Form>
        </Navbar>
        </div>
    );
}
export default Header;