// import React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-dark text-light text-center p-4 " style={{marginTop:"75px"}}>
      <Container>
        <div className="d-flex justify-content-between">
          <Row>
            <Col sm={6} lg={3} className="mt-5 pt-2">
              <img src="/footer-logo.png" alt="footerLogo" className="mb-4" />
              <p className="text-start text-light text-opacity-50 mt-4 mb-4 ms-5 ">
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              <img src="/payment.png" alt="paymentCard" className="mt-2" />
            </Col>
            <Col sm={6} lg={3} className="footerSecond mt-5 pt-2">
              <h6 className="text-start mb-4 fw-bold">SHOPPING</h6>
              <p className="text-start text-light text-opacity-50" style={{cursor:"pointer"}}>
                Clothing Store
              </p>
              <p className="text-start text-light text-opacity-50"  style={{cursor:"pointer"}} onClick={() => navigate('/Shoes')}>
                Trending Shoes
              </p>
              <p className="text-start text-light text-opacity-50"  style={{cursor:"pointer"}}  onClick={() => navigate('/Accessories')}>
                Accessories
              </p>
              <p className="text-start text-light text-opacity-50"  style={{cursor:"pointer"}}>
                Sale
              </p>
            </Col>
            <Col sm={6} lg={3} className="footerThird mt-5 pt-2">
              <h6 className="text-start mb-4 fw-bold">SHOPPING</h6>
              <p className="text-start text-light text-opacity-50"  style={{cursor:"pointer"}} onClick={() => navigate('/Contact')}>
                Contact Us
              </p>
              <p className="text-start text-light text-opacity-50"  style={{cursor:"pointer"}}>
                Payment Methods
              </p>
              <p className="text-start text-light text-opacity-50"  style={{cursor:"pointer"}}>
                Delivery
              </p>
              <p className="text-start text-light text-opacity-50"  style={{cursor:"pointer"}}>
                Return and Exchanges
              </p>
            </Col>
            <Col sm={6} lg={3} className="mt-5 pt-2">
              <h6 className="text-start fw-bold">NEWSLETTER</h6>
              <p className="text-start text-light text-opacity-50 my-3">
                Be the first to know about new arrivals, look books, sales &
                promos!
              </p>
              <Form>
                <Form.Group className="mt-4" controlId="formBasicEmail">
                  <Form.Control
                    className="custom-input bg-dark"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>
        <div>
          <h6 className="pt-5 text-light text-opacity-50">
            All Rights &copy; Copyright Reserved to @Aniket Patil
          </h6>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
