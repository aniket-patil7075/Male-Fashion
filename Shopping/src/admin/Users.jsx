import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import AdminMenu from '../assets/AdminMenu'
import { Container } from 'react-bootstrap'

function Users() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={3}>
                    <AdminMenu/>
                </Col>
                <Col md={9}>
                    <h1>All Users</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Users