import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Collections() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <Container fluid className="position-relative collection">
        <Row className="">
        <Col sm={12} md={12} lg={7} >
            <div className="banner1-text ">
              <h1 className="fw-bold">Clothing Collection 2024</h1>
              <p className="banner-p" onClick={() => navigate('/Shop')}>SHOP NOW</p>
            </div>
            <div className="d-flex flex-row-reverse">
              <img src="/banner-1.jpg" alt="" className="banner1"/>
            </div>
          </Col>
        
        </Row>
        <Container  fluid>
        <Row className="banner2-row ps-3 position-relative">
        <Col lg={5} md={12} className="banner2-col">
            
            <div className="">
              <img src="/banner-2.jpg" alt="" className="banner2"/>
            </div>
            <div className="banner2-text text-start ms-5">
              <h1 className="fw-bold">Accessories</h1>
              <p className="banner-p" onClick={() => navigate('/Shop')}>SHOP NOW</p>
            </div>
          </Col>

          
          
          <Col lg={6} md={12} className="banner3-col text-start">
            <div className="banner3-text">
              <h1 className="fw-bold">Shoes Spring 2024</h1>
              <p className="banner-p" onClick={() => navigate('/Shop')}>SHOP NOW</p>
            </div>
            <div className="d-flex flex-row-reverse">
              <img src="/banner-3.jpg" alt="" className="banner3 "/>
            </div>
          </Col>
        </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Collections;