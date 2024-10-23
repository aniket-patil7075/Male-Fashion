// import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function About() {
  return (
    <div style={{ paddingTop: "135px" }}>
      <div
        className="bg-secondary bg-opacity-25 py-4 mb-5"
        style={{ paddingLeft: "10%" }}
      >
        <h4 className="fw-bold">About Us</h4>
        <p>
          Home{" "}
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>{" "}
          <spam className="text-secondary"> About Us</spam>
        </p>
      </div>
      <Container className="px-5 mt-5">
      <img src="/about-us.jpg" alt="about img" className="w-100" />
      <Row className="mt-5" >
        <Col lg={4} className="my-2">
          <h4 className="fw-bold">Who We Are ?</h4>
          <p className="pt-2 text-secondary">Contextual advertising programs sometimes have strict policies that need to be adhered too. Let’s take Google as an example.</p>
        </Col>
        <Col className="my-2" lg={4}>
        <h4 className="fw-bold">Who We Do ?</h4>
          <p className="pt-2 text-secondary">In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance.</p>
        </Col>
        <Col className="my-2" lg={4}>
        <h4 className="fw-bold">Why Choose Us ?</h4>
          <p className="pt-2 text-secondary">A two or three storey house is the ideal way to maximise the piece of earth on which our home sits, but for older or infirm people.</p>
        </Col>
      </Row>
      </Container>
      <Row className="mt-5 bg-secondary bg-opacity-25">
        <Col lg={6} className="">
        <p className="w-50 text-center">“Going out after work? Take your butane curling iron with you to the office, heat it up, style your hair before you leave the office and you won’t have to make a trip back home.”</p>
        <h4>Augusta Schultz</h4>
        <p className="text-secondary">Fashion Design</p>
        <img src="/testimonial-author.jpg" alt="about testimonial" className="rounded rounded-pill"/>
        </Col>
        <Col lg={6}>
        <img src="/testimonial-pic.jpg" alt="about testimonial" className="w-100"/>
        </Col>
      </Row>
    </div>
  );
}

export default About;
