import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxQuote } from "react-icons/rx";
import { useEffect, useState } from "react";

function About() {
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [numberOfCategories, setNumberOfCategories] = useState(0);
  async function fetchUserCount() {
    try {
      const response = await fetch("http://localhost:4300/api/user/getuser");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setNumberOfUsers(data.user.length);
    } catch (error) {
      console.error("Error fetching user count:", error);
      setNumberOfUsers(0);
    }
  }

  async function fetchCategoryCount() {
    try {
      const response = await fetch(
        "http://localhost:4300/api/category/getcategory"
      );
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setNumberOfCategories(data.category.length);
    } catch (error) {
      console.error("Error fetching category count:", error);
      setNumberOfCategories(0);
    }
  }

  useEffect(() => {
    fetchUserCount();
    fetchCategoryCount();
  }, []);

  return (
    <div style={{ paddingTop: "135px" }}>
      <div
        className="bg-secondary bg-opacity-10 py-4 mb-5 text-start"
        style={{ paddingLeft: "8%" }}
      >
        <h4 className="fw-bold ms-4">About Us</h4>
        <p className="ms-4">
          Home{" "}
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>{" "}
          <span className="text-secondary"> About Us</span>
        </p>
      </div>
      <Container className=" px-md-5 mt-5">
        <img src="/about-us.jpg" alt="about img" className="w-100" />
        <Row className="mt-5 text-start">
          <Col lg={4} md={6} className="my-2">
            <h4 className="fw-bold">Who We Are?</h4>
            <p className="pt-2 text-secondary">
              Contextual advertising programs sometimes have strict policies
              that need to be adhered to. Let’s take Google as an example.
            </p>
          </Col>
          <Col lg={4} md={6} className="my-2">
            <h4 className="fw-bold">What We Do?</h4>
            <p className="pt-2 text-secondary">
              In this digital generation where information can be easily
              obtained within seconds, business cards still have retained their
              importance.
            </p>
          </Col>
          <Col lg={4} md={12} className="my-2">
            <h4 className="fw-bold">Why Choose Us?</h4>
            <p className="pt-2 text-secondary">
              A two or three-story house is the ideal way to maximize the piece
              of earth on which our home sits, but for older or infirm people.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="m-0 p-0">
        <Row className="m-0 p-0 mt-5">
          <Col
            lg={6}
            className="d-flex flex-column align-items-center justify-content-center text-center py-4 bg-secondary bg-opacity-25"
          >
            <RxQuote className="mb-3 Quote" />
            <p className="w-75 mb-3 going" style={{ fontStyle: "italic" }}>
              “Going out after work? Take your butane curling iron with you to
              the office, heat it up, style your hair before you leave the
              office and you won’t have to make a trip back home.”
            </p>
            <div className="d-flex align-items-center">
              <img
                src="/testimonial-author.jpg"
                alt="testimonial author"
                className="rounded-circle me-3"
                style={{ width: "60px", height: "60px" }}
              />
              <div>
                <h5 className="mb-1 fw-bold">Augusta Schultz</h5>
                <h5 className="text-secondary" style={{ fontStyle: "italic" }}>
                  Fashion Design
                </h5>
              </div>
            </div>
          </Col>
          <Col lg={6} className="m-0 p-0">
            <img
              src="/testimonial-pic.jpg"
              alt="testimonial"
              className="w-100 h-100"
            />
          </Col>
        </Row>
      </Container>
      <Container className=" px-md-5 mt-5 total">
        <Row>
          <Col className="d-flex " lg={3} md={6}>
            <div className="pe-3">
              <h2>{numberOfUsers}</h2>
            </div>
            <div className="text-start total-span">
              <span>
                Our
                <br />
                Users
              </span>
            </div>
          </Col>
          <Col className="d-flex pb-md-4" lg={3} md={6}>
            <div className="pe-3">
              <h2>{numberOfCategories}</h2>
            </div>
            <div className="text-start total-span">
              <span>
                Total
                <br />
                Categories
              </span>
            </div>
          </Col>
          <Col className="d-flex" lg={3} md={6}>
            <div className="pe-3">
              <h2>102</h2>
            </div>
            <div className="text-start total-span">
              <span>
                In
                <br />
                country
              </span>
            </div>
          </Col>
          <Col className="d-flex" lg={3} md={6}>
            <div className="pe-3">
              <h2>98%</h2>
            </div>
            <div className="text-start total-span">
              <span>
                Happy
                <br />
                Customers
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="px-3 px-md-5 mt-5">
        <Row className="text-center ">
          <p style={{ color: "#e53637" }} className="fw-bold">
            OUR TEAM
          </p>
          <h1 className="fw-bold pb-5">Meet Our Team</h1>

          <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
            <div>
              <img
                src="./team-1.jpg"
                alt="Team Member"
                className="img-fluid w-100"
              />
              <h4 className="fw-bold pt-3">John Smith</h4>
              <p className="text-secondary">Fashion Design</p>
            </div>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
            <div>
              <img
                src="./team-2.jpg"
                alt="Team Member"
                className="img-fluid w-100"
              />
              <h4 className="fw-bold pt-3">Christine Wise</h4>
              <p className="text-secondary">C.E.O</p>
            </div>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
            <div>
              <img
                src="./team-3.jpg"
                alt="Team Member"
                className="img-fluid w-100"
              />
              <h4 className="fw-bold pt-3">Sean Robbins</h4>
              <p className="text-secondary">Manager</p>
            </div>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
            <div>
              <img
                src="./team-4.jpg"
                alt="Team Member"
                className="img-fluid w-100"
              />
              <h4 className="fw-bold pt-3">Lucy Myers</h4>
              <p className="text-secondary">Delivery</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <p style={{ color: "#e53637" }} className="fw-bold pt-5 text-center">
          PARTNER
        </p>
        <h1 className="fw-bold pb-5 text-center">Happy Clients</h1>
        <Row className="pb-sm-2 pb-lg-5">
          <Col xs={6} sm={4} md={3} lg={3} className="text-center ">
            <img src="./client-1.png" alt="Client 1" className="" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={3} className="text-center mb-4">
            <img src="./client-2.png" alt="Client 2" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={3} className="text-center mb-4">
            <img src="./client-3.png" alt="Client 3" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={3} className="text-center mb-4">
            <img src="./client-4.png" alt="Client 4" />
          </Col>
        </Row>
        <Row className="pt-sm-2 pt-lg-5">
          <Col xs={6} sm={4} md={3} lg={3} className="text-center mb-4">
            <img src="./client-5.png" alt="Client 5" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={3} className="text-center mb-4">
            <img src="./client-6.png" alt="Client 6" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={3} className="text-center mb-4">
            <img src="./client-7.png" alt="Client 7" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={3} className="text-center mb-4">
            <img src="./client-8.png" alt="Client 8" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
