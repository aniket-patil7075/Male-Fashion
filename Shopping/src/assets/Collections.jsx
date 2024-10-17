import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";

function Collections() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Container className="position-relative">
        <Row>
          <Col lg={12}>
            <div className="banner1-Text">
              <h1>Clothing Collection 2024</h1>
              <p>SHOP NOW</p>
            </div>
            <div>
              <img src="/banner-1.jpg" alt="banner1" className="banner1" />
            </div>
          </Col>
        </Row>
        <Container>
        <Row className="banner2-Row">
          <Col lg={4} className="banner2-Col ms-4">
            <div>
              <img src="/banner-2.jpg" alt="banner2" className="banner2"/>
            </div>
            <div className="banner2-Text pt-4">
              <h1>Accessories</h1>
              <p>SHOP NOW</p>
            </div>
          </Col>
          <Col lg={7} className="banner3-Col">
            <div className="banner3-Text">
              <h1>Shoes Spring 2024</h1>
              <p>SHOP NOW</p>
            </div>
            <div className="d-flex flex-row-reverse">
              <img src="/banner-3.jpg" alt="banner3" className="banner3" />
            </div>
          </Col>
        </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Collections;
