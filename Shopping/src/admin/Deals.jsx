import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import AdminMenu from "../assets/AdminMenu";
import DealWeek from "../assets/DealWeek"

function Deals() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ paddingTop: "200px" }}>
      <Container>
        <Row className="mx-4">
          
          <Col md={3}>
            <AdminMenu />
          </Col>

          {/* Product List */}
          <Col md={9}>
            <Container>
              <h3 className="fw-bold text-center my-5">DEALS</h3>
              {/* <h1>Deals</h1> */}
              <DealWeek />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Deals