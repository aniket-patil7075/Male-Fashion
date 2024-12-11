import React, { useEffect } from "react";
import { useAuth } from "../context/auth";
import AdminMenu from "../assets/AdminMenu";
import { Card, Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FaShoppingCart } from "react-icons/fa";

function AdminDashboard() {
  const [auth] = useAuth();
  
  return (
    <div style={{ paddingTop: "200px" }}>
      <Container>
        <Row className="mx-4">
          <Col md={3}>
            <AdminMenu />
          </Col>
          <Col md={9} className="">
            <Row>
              <Col md={2} className="border w-25" style={{height:"150px"}}>
                <div className="d-flex">
                  <div className="fs-2"  >
                  <FaShoppingCart />
                  </div>
                  <div>
                    <h5>New Orders</h5>
                    <h6></h6>
                  </div>
                </div>
              </Col>
              <Col md={2}>
              
              </Col>
              <Col md={2}>
              
              </Col>
              <Col md={2}>
              
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;
