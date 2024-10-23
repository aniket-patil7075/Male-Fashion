// import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div style={{paddingTop:"135px"}}>
      <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d122295.92004806882!2d74.25314605000001!3d16.689514100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728474440167!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <Container className='mt-5 px-5 text-start'>
    <Row>
      <Col lg={6} className='pe-3 mb-5'>
        <p className='text-danger fw-bold'>INFORMATION</p>
        <h1 className='fw-bold'>Contact Us</h1>
        <p className='text-secondary pt-2'>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>

        <h4 className='fw-bold pt-4'>Kolhapur</h4>
        <p  className='text-secondary pt-2'>2nd Lane , Vikramnagr , Kolhapur </p>
        <p  className='text-secondary pt-1'> +91 1234567890 </p>

        <h4 className='fw-bold pt-4'>Kolhapur</h4>
        <p  className='text-secondary pt-2'>1st Lane , Shivaji Peth , Kolhapur </p>
        <p  className='text-secondary pt-1'> +91 0987654321 </p>
      </Col>
      <Col lg={6} className=''>
      <Form>
      <Row>
        <Col>
          <Form.Control placeholder="Name" className='p-3'/>
        </Col>
        <Col>
          <Form.Control placeholder="Email" className='p-3'/>
        </Col>
      </Row>
      <Form.Group className="my-4" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control placeholder="Message" as="textarea" rows={6} />
      </Form.Group>
    </Form>
    <Button variant="dark" className="heroButton mt-4  px-5 py-2">
              SEND MESSAGE
            </Button>
      </Col>
    </Row>
  </Container>
    </div>
  )
}

export default Contact