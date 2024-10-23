import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function LatestNews() {
  return (
    <div>
      <p className="text-danger">LATEST NEWS</p>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/blog-1.jpg" />
          <Card.Body>
            <Card.Title><img src="/calendar.png" alt="calender" />16 February 2020</Card.Title>
            <Card.Text>
              What Curling Irons Are The Best Ones
            </Card.Text>
            <Card.Text>
                READ MORE
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default LatestNews;
