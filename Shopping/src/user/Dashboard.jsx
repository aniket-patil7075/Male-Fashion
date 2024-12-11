import React, { useEffect } from 'react'
import { useAuth } from '../context/auth'
import { Card, Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import UserMenu from '../assets/UserMenu'

function Dashboard() {
  const [auth]=useAuth()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='p-5' style={{paddingTop:"200px"}}>
      <Container fluid>
          <Row>
            <Col md={3}>
              <UserMenu/>
            </Col>
            <Col md={9} className="">
            <h3 className="fw-bold text-center my-5">PROFILE</h3>
            <Card className="p3 m-3 border-0 w-75">
              <Card.Header className="border-0 fs-5 fw-bold">
                Basic Information
              </Card.Header>
              <Card.Body className="border">
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3 fw-bold"
                    controlId="formPlaintextText"
                  >
                    <Form.Label column sm="2">
                      Name
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={auth?.user?.name}
                        className="ms-5"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3 fw-bold"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="2">
                      Email
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={auth?.user?.email}
                        className="ms-5"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3  fw-bold"
                    controlId="formPlaintextPhone"
                  >
                    <Form.Label column sm="2">
                      Phone
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={auth?.user?.phone}
                        className="ms-5"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3 fw-bold"
                    controlId="formPlaintextAddress"
                  >
                    <Form.Label column sm="2">
                      Address
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={auth?.user?.address}
                        className="ms-5"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3 fw-bold"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="2">
                      Password
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={auth?.user?.password}
                        className="ms-5"
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          </Row>
      </Container>
    </div>
  )
}

export default Dashboard