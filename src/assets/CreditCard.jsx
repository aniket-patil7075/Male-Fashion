import React from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CreditCard() {
  return (
    <div className="p-3 bg-light border border-secondary border-opacity-25">
        <h5 className='text-center'>Card Details</h5>
      <Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            placeholder=""
            className="py-2 border border-secondary border-opacity-25  rounded rounded-0"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Name on Card</Form.Label>
          <Form.Control
            placeholder=""
            className="py-2 border border-secondary border-opacity-25  rounded rounded-0"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control
              placeholder=""
              className="py-2 border border-secondary border-opacity-25  rounded rounded-0"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="">
            <Form.Label>Security Code</Form.Label>
            <Form.Control
              placeholder=""
              className="py-2 border border-secondary border-opacity-25  rounded rounded-0"
            />
          </Form.Group>
          
          <div>
          <Button
                variant="outline-primary"
                id="discovernow"
                className="heroButton py-2 px-4 mt-4"
                
                
              >
                Pay Now
              </Button>
          </div>
      </Row>
    </div>
  )
}

export default CreditCard
