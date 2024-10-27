import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminMenu from "../assets/AdminMenu";

function Categories() {
  return (
    <div style={{ paddingTop: "200px" }}>
      <Container>
        <Row className="mx-4">
          <Col md={3}>
          <AdminMenu/>
          </Col>

          <Col md={9} className="">
            <h3 className="fw-bold text-center my-5">CATEGORIES</h3>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Categories