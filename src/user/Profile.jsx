import React from 'react'
import {Row, Col , Container} from 'react-bootstrap'
import UserMenu from '../assets/UserMenu'

function Profile() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={3}>
                    <UserMenu/>
                </Col>
                <Col md={9}>
                    <h1>Your Profiles</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Profile