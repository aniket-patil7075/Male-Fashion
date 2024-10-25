import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Instagram() {
  return (
    <div style={{paddingTop:"100px"}}>
        <Container>
            <Row  className='mx-4'> 
                <Col  lg={8}>
                    <div>
                        <img src='/instagram-1.jpg' alt='InstagramImg' />
                        <img src='/instagram-2.jpg' alt='InstagramImg' />
                        <img src='/instagram-3.jpg' alt='InstagramImg' />
                    </div>
                    <div>
                        <img src='/instagram-4.jpg' alt='InstagramImg' />
                        <img src='/instagram-5.jpg' alt='InstagramImg' />
                        <img src='/instagram-6.jpg' alt='InstagramImg' />
                    </div>
                </Col>
                <Col  lg={4} className='my-auto'>
                    <h2 className='fw-bold mb-5'>Instagram</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h3 className='text-danger fw-bold mt-5'>#Male_Fashion</h3>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Instagram