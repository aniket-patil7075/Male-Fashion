// import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function LatestNews() {
  return (
    <div className="m-5 " >
      <Container className="">
        <Row>
          <Col lg={4}>
          <Card style={{ width: "22rem" }} className="blogCard">
          <Card.Img variant="top" src="/blog-1.jpg" />
          <Card.Body className="cardBody w-75 px-4">
            
            <Card.Text>
              <p><img src="/calendar.png" alt="calender" className="me-2"/>16 February 2023</p>
              <h6 className="fw-bold">What Curling Irons Are The Best Ones</h6>
              <p className="fw-bold ">READ MORE</p>
            </Card.Text>
            
          </Card.Body>
        </Card>
        
          </Col>
          <Col lg={4}>
          <Card style={{ width: "22rem" }} className="blogCard">
          <Card.Img variant="top" src="/blog-1.jpg" />
          <Card.Body className="cardBody w-75 px-4">
            
            <Card.Text>
              <p><img src="/calendar.png" alt="calender" className="me-2"/>16 February 2023</p>
              <h6 className="fw-bold">What Curling Irons Are The Best Ones</h6>
              <p className="fw-bold ">READ MORE</p>
            </Card.Text>
            
          </Card.Body>
        </Card>
        
          </Col>
          <Col lg={4}>
          <Card style={{ width: "22rem" }} className="blogCard">
          <Card.Img variant="top" src="/blog-1.jpg" />
          <Card.Body className="cardBody w-75 px-4">
            
            <Card.Text>
              <p><img src="/calendar.png" alt="calender" className="me-2"/>16 February 2023</p>
              <h6 className="fw-bold">What Curling Irons Are The Best Ones</h6>
              <p className="fw-bold ">READ MORE</p>
            </Card.Text>
            
          </Card.Body>
        </Card>
        
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LatestNews;
