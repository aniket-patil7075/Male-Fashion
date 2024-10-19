import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='bg-dark text-light text-center p-4 mt-5 pt-5'>
      <Container>
      <div>
        <Row>
          <Col>
            <img src='/footer-logo.png' alt='footerLogo' />
            <p className='text-start ms-5 my-4'>The customer is at the heart of our unique business model, which includes design.</p>
            <img src='/payment.png' alt='paymentCard' />
          </Col>
          <Col>
            <h6 className='fw-bold'>SHOPPING</h6>
          </Col>
          <Col>
            <h6 className='fw-bold'>SHOPPING</h6>
          </Col>
          <Col>
            <h6 className='fw-bold'>NEWSLETTER</h6>
          </Col>
        </Row>
      </div>
      <div>
      <h5 className='pt-5'>All Rights &copy; Copyright Reserved to @Aniket Patil</h5>
      </div>
      </Container>
    </div>
  )
}

export default Footer