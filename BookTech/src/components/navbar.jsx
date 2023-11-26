

import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget"


export const NavBar= () =>{
 return(
    <Navbar bg="dark" data-bs-theme="dark" >
        <Container className='navbar-container'>
          <Navbar.Brand >
          <NavLink to="/"className={"titulo-color"}>BookTech</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto" >
            <NavLink to="category/javascript" className={"paginas-color"}>Javascript</NavLink>
            <NavLink to="category/code"className={"paginas-color"}>Code</NavLink>
            <NavLink to="category/phyton"className={"paginas-color"}>Phyton</NavLink>
          </Nav>
          <div className='cart'>
          <CartWidget/>
          </div>
        </Container>
      </Navbar>
     
    
        )
} 