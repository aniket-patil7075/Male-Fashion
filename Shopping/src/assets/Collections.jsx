import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";

function Collections() {
  return (
    // <div style={{ marginTop: "100px" }}>
    //   <Container className="position-relative">
    //     <Row>
    //       <Col lg={12}>
    //         <div className="banner1-Text">
    //           <h1>Clothing Collection 2024</h1>
    //           <p className="banner-p">SHOP NOW</p>
    //         </div>
    //         <div>
    //           <img src="/banner-1.jpg" alt="banner1" className="banner1" />
    //         </div>
    //       </Col>
    //     </Row>
    //     <Container>
    //     <Row className="banner2-Row">
    //       <Col lg={4} className="banner2-Col ms-4">
    //         <div>
    //           <img src="/banner-2.jpg" alt="banner2" className="banner2"/>
    //         </div>
    //         <div className="banner2-Text pt-4">
    //           <h1>Accessories</h1>
    //           <p className="banner-p">SHOP NOW</p>
    //         </div>
    //       </Col>
    //       <Col lg={7} className="banner3-Col">
    //         <div className="banner3-Text">
    //           <h1>Shoes Spring 2024</h1>
    //           <p className="banner-p">SHOP NOW</p>
    //         </div>
    //         <div className="d-flex flex-row-reverse">
    //           <img src="/banner-3.jpg" alt="banner3" className="banner3" />
    //         </div>
    //       </Col>
    //     </Row>
    //     </Container>
    //   </Container>
    // </div>
    <div style={{ marginTop: "100px" }}>
      <Container fluid className="position-relative collection">
        <Row className="">
        <Col sm={12} lg={7} >
            <div className="banner1-text ">
              <h1 className="fw-bold">Clothing Collection 2024</h1>
              <p className="banner-p">SHOP NOW</p>
            </div>
            <div className="d-flex flex-row-reverse">
              <img src="/banner-1.jpg" alt="" className="banner1"/>
            </div>
          </Col>
        
        </Row>
        <Container  fluid>
        <Row className="banner2-row ms-5 ps-3 position-relative">
        <Col lg={4} className="banner2-col">
            
            <div className="">
              <img src="/banner-2.jpg" alt="" className="banner2"/>
            </div>
            <div className="banner2-text text-start ms-5">
              <h1 className="fw-bold">Accessories</h1>
              <p className="banner-p">SHOP NOW</p>
            </div>
          </Col>

          
          
          <Col lg={7} className="banner3-col text-start">
            <div className="banner3-text">
              <h1 className="fw-bold">Shoes Spring 2024</h1>
              <p className="banner-p">SHOP NOW</p>
            </div>
            <div className="d-flex flex-row-reverse">
              <img src="/banner-3.jpg" alt="" className="banner3 me-4"/>
            </div>
          </Col>
        </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Collections;
