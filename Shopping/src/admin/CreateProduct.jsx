import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import AdminMenu from '../assets/AdminMenu'
import { Container } from 'react-bootstrap'

function CreateProduct() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={3}>
                    <AdminMenu/>
                </Col>
                <Col md={9}>
                    <h1>Create Product</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CreateProduct