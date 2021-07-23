import React from 'react';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap';
function Header(){
    return(
        <div className="conatiner-fluid">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contactus">Contact Us</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        </div>
    );
}
export default Header;