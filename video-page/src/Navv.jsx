import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import main from "./assets/main.svg"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";



function Navv() {
  return (
    <>
     <Navbar expand="md" className="bg-body-light">
      <Container>
       
          <Navbar.Brand href="#home"><Link style={{textDecoration:"none"}} to="/"><Image fluid src={main} /> <span style={{fontWeight:"700",color:"rgba(16, 10, 66, 1)"}}>HelpMeOut</span></Link></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='' href="#features" style={{fontWeight:"500",color:"black"}}>Features</Nav.Link>
            <Nav.Link href="#how" style={{fontWeight:"500",color:"black"}}>How It Works</Nav.Link>
           
          </Nav>
          <span > <Link style={{fontWeight:"600",color:"rgba(18, 11, 72, 1)",textDecoration:"none"}} to="/Getstarted">Get Started</Link> </span> 
        </Navbar.Collapse>
      
      
      
      
      </Container>
    </Navbar>
    <div style={{height:"3px",background:"rgba(244, 246, 248, 1)"}}></div>
    </>
  )
}

export default Navv