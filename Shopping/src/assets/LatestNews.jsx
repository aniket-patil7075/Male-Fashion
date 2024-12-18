// import React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function LatestNews() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="latestNewsMainDiv" style={{ paddingBottom: "100px"}} >
      <Container className="">
        <Row  className='mx-4'>
          <Col lg={4}>
          <Card style={{ width: "22rem" }} className="blogCard ">
          <Card.Img variant="top" src="/blog-1.jpg" className="rounded-0" />
          <Card.Body className="cardBody w-75 px-4">
            
            <Card.Text>
              <p><img src="/calendar.png" alt="calender" className="me-2"/>16 February 2023</p>
              <h6 className="fw-bold">What Curling Irons Are The Best Ones</h6>
              <p className="fw-bold read">READ MORE</p>
            </Card.Text>
            
          </Card.Body>
        </Card>
        
          </Col>
          <Col lg={4}>
          <Card style={{ width: "22rem" }} className="blogCard">
          <Card.Img variant="top" src="/blog-2.jpg" className="rounded-0"  />
          <Card.Body className="cardBody w-75 px-4">
            
            <Card.Text>
              <p><img src="/calendar.png" alt="calender" className="me-2"/>07 June 2023</p>
              <h6 className="fw-bold">Eternity Bands Do Last Forever</h6>
              <p className="fw-bold read">READ MORE</p>
            </Card.Text>
            
          </Card.Body>
        </Card>
        
          </Col>
          <Col lg={4}>
          <Card style={{ width: "22rem" }} className="blogCard">
          <Card.Img variant="top" src="/blog-3.jpg" className="rounded-0"  />
          <Card.Body className="cardBody w-75 px-4">
            
            <Card.Text>
              <p><img src="/calendar.png" alt="calender" className="me-2"/>01 February 2023</p>
              <h6 className="fw-bold">The Health Benefits Of Sunglasses</h6>
              <p className="fw-bold read">READ MORE</p>
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
