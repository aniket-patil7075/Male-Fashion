import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Footer() {
  return (
    <div className="bg-dark text-light text-center p-4 mt-5 pt-5">
      <Container>
        <div>
          <Row>
            <Col>
              <img src="/footer-logo.png" alt="footerLogo" className="mb-4" />
              <p className="text-start text-light text-opacity-50 ms-5 my-4">
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              <img src="/payment.png" alt="paymentCard" />
            </Col>
            <Col>
              <h6 className="text-start ps-5 ms-5 mb-4 fw-bold">SHOPPING</h6>
              <p className="text-start ps-5 ms-5 text-light text-opacity-50">
                Clothing Store
              </p>
              <p className="text-start ps-5 ms-5 text-light text-opacity-50">
                Trending Shoes
              </p>
              <p className="text-start ps-5 ms-5 text-light text-opacity-50">
                Accessories
              </p>
              <p className="text-start ps-5 ms-5 text-light text-opacity-50">
                Sale
              </p>
            </Col>
            <Col>
              <h6 className="text-start me-5 mb-4 fw-bold">SHOPPING</h6>
              <p className="text-start me-5 text-light text-opacity-50">
                Contact Us
              </p>
              <p className="text-start me-5 text-light text-opacity-50">
                Payment Methods
              </p>
              <p className="text-start me-5 text-light text-opacity-50">
                Delivery
              </p>
              <p className="text-start me-5 text-light text-opacity-50">
                Return and Exchanges
              </p>
            </Col>
            <Col>
              <h6 className="text-start fw-bold">NEWSLETTER</h6>
              <p className="text-start text-light text-opacity-50">
                Be the first to know about new arrivals, look books, sales &
                promos!
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    className="custom-input bg-dark "
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>
        <div>
          <h5 className="pt-5">
            All Rights &copy; Copyright Reserved to @Aniket Patil
          </h5>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
