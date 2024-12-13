import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import UserMenu from '../assets/UserMenu'

function Orders() {
    return (
        <div className='p-5' style={{ paddingTop: "200px" }}>
            <Container>
                <Row className='mx-4'>
                    <Col md={3}>
                        <UserMenu />
                    </Col>
                    <Col md={9} className="" style={{marginTop:"100px"}}>
                        <h3 className="fw-bold text-center my-5">ALL ORDERS</h3>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Orders