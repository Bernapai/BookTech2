
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget"


export const NavBar= () =>{
 return(
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >
          <NavLink to="/">BookTech</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="categoria/javascript">Javascript</NavLink>
            <NavLink to="categoria/code">Code</NavLink>
            <NavLink to="categoria/phyton">Phyton</NavLink>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
      
    
        )
}