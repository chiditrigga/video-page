import React from 'react'
import Navv from './Navv'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Form from 'react-bootstrap/Form';
import fb from './assets/fb.svg'
import { Link } from "react-router-dom";

function Getstarted() {
  
  return (
      <>
      <Navv />
      
      <Container>
 <Row>
   {/* first ###################start############################# */}
     <Col xs={12} md={6} className='mt-5' >
       <Row style={{borderRight:"2px solid rgba(244, 246, 248, 1)"}}>
  
    <Col xs={12}>
        <h1>Your video is ready!</h1>
    </Col>

    <Col xs={12}>
         Name
         <Form.Control
        type="text"
        placeholder="Untitled_Video_20232509 "
        aria-label="Disabled input example"
        disabled
        readOnly
        style={{color:"rgba(65, 60, 109, 1)",fontWeight:"600"}}
      />
      <br />
      </Col>

      <Col xs={12}>
        <p>Video Url</p>
      <Form.Control
        type="text"
        placeholder="enter email of receiver"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
      </Col>

      <Col xs={12}>
      <p>Video Url</p>
      <Form.Control
        type="text"
        placeholder="enter email of receiver"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
      </Col>

      <Col xs={12}>
      <p>Share your video </p>
      <Button variant="outline-primary"> <Image src={fb} /> Facebook</Button >  <Button variant="outline-success">WhatsApp</Button>  <Button variant="outline-info">Telegram</Button>
      </Col>

       </Row>
     </Col>
      {/* first ###################stop############################# */}

      {/* second ###################start############################# */}
     <Col xs={12} md={6}> 

     </Col> 
       {/* second ###################stop############################# */}




 </Row>






      </Container>
     <Container fluid>
      <Row className='py-3'>
        <Col xs={12} style={{background:"rgba(231, 231, 237, 0.2)"}} className='text-center '> 
               <h4 className='mx-auto' style={{maxWidth:"600px"}}>To ensure the availability and privacy of your video, we recommend saving it to your account.</h4>
               <Button style={{fontWeight:"500"}}>Save Video</Button>
               <span><h3>Don’t have an account? <Link>Create account</Link> </h3></span>
        </Col>
      </Row>
     </Container>
      
      
      
      
      
      </>
   
  )
}

export default Getstarted