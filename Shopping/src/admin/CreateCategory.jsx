import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import AdminMenu from '../assets/AdminMenu'
import { Container } from 'react-bootstrap'

function CreateCategory() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={3}>
                    <AdminMenu/>
                </Col>
                <Col md={9}>
                    <h1>Create Category</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CreateCategory