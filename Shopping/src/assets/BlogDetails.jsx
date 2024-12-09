import React, { useEffect } from "react";
import { Col, Container, Row,Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Form from 'react-bootstrap/Form';
function BlogDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blog-div-main">
      <div className="bg-div1 py-5" >
        <Container className="my-5 pb-5">
          <div className="pb-5 text-center">
            <h1 className="fw-bold blog-h1 py-4 m-auto text-center">
              Are you one of the thousands of iPhone owners who has no idea
            </h1>
            <div className="blog-div1">
              <span className="pe-2">By Deercreative</span> |
              <span className="px-2">February 21, 2019</span> |
              <span className="ps-2">8 Comments</span>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div
          className="blog-Img"
          style={{ position: "relative", top: "-10%" }}
        >
          <Container className="d-flex justify-content-center">
            <img
              src="./blog-details.jpg"
              alt="Blog Details"
              className="img-fluid responsive-img"
            />
          </Container>
        </div>
      </Container>
      <Container className="d-flex justify-content-center ">
        <Row className="w-75">
          <Col lg={1} md={12} xs={12} className="d-flex flex-column align-items-center my-5 mb-lg-0 pe-5">
            <span className="d-flex justify-content-center fw-bolder fs-5 mb-4">SHARE</span>
            <div className="social-icons d-flex flex-column ">
              <a href="" className="share-i" style={{backgroundColor:"#4267B2"}}>
              <FaFacebookF className=""/>
              </a>
              <a href="" className="share-i my-3" style={{backgroundColor:"#1da1f2"}}>
              <FaTwitter className="my-2" />

              </a>
              <a href="" className="share-i" style={{backgroundColor:"#fe0003"}}>
              <FaYoutube className="my-2" />
              </a>
              <a href="" className="share-i my-3" style={{backgroundColor:"#0173b2"}}>
              <FaLinkedinIn className="my-2" />
              </a>
              
              
            </div>
          </Col>
          <Col lg={11} md={9} xs={12} className="mt-5 ps-4">
          <div className="share-col">
            <div className="text-start share-p">
              <p>
                Hydroderm is the highly desired anti-aging cream on the block. This serum restricts
                the occurrence of early aging signs on the skin and keeps the skin younger, tighter,
                and healthier. It reduces the wrinkles and loosening of the skin. This cream nourishes
                the skin and brings back the glow that had been lost over the years.
              </p>
              <p>
                The most essential ingredient that makes Hydroderm so effective is Vyo-Serum, which
                is a product of natural selected proteins. This concentrate works actively in bringing
                about the natural youthful glow of the skin. It tightens the skin along with its
                moisturizing effect. Another important ingredient is “marine collagen,” which,
                along with Vyo-Serum, helps revitalize the skin.
              </p>
            </div>
            <div className="text-start position-relative mt-5">
              <div className="share-i position-absolute share-i1" style={{backgroundColor:"#e53637"}}>
              <FaQuoteLeft className=" "/>
              </div>
              <div className="share-when p-5">
                <p className="fw-bold fs-5">
                “When designing an advertisement for a particular product many things should be researched like where it should be displayed.”


                </p>
                <p className="fw-bold text-danger fs-5">_ John Smith _</p>
              </div>
              <div className="share-p mb-5">
                <p>Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of skin. Problems like dark circles, puffiness, and crow’s feet can be control from the strong effects of this serum.</p>
                <p>Hydroderm is a multi-functional product that helps in reducing the cellulite and giving the body a toned shape, also helps in cleansing the skin from the root and not letting the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging from the sensitive near the eyes.</p>
                <p></p>
              </div>
            </div>
            <hr ></hr>
            <Row className="mt-3 mb-5">
              <Col lg={6} className="d-flex">
                <img src="./blog-author.jpg" className="rounded rounded-circle "/>
                <h6 className="fw-bold mt-2 ms-3">Aiden Blair</h6>
              </Col>
              <Col lg={6}>
                <h6 className="fw-bold text-end">#Fashion #Trending #2020</h6>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <div style={{border:"1px solid #ebebeb",padding:"25px 30px 30px"}}>
                 <p className="text-start "> <a href="" className="text-start text-secondary text-decoration-none"><IoIosArrowRoundBack className="fs-3 "/>Previous Pod</a></p>
                  <h5 className="fw-bold text-start">Is S Classified How To Utilize</h5>
                  <h5 className="fw-bold text-start">Free Classified Ad Sites</h5>
                </div>
              </Col>
              <Col>
                <div style={{border:"1px solid #ebebeb",padding:"25px 30px 30px"}}>
                <p className="text-end "><a className="text-end text-secondary text-decoration-none">Next Pod<IoIosArrowRoundForward className="fs-3"/></a></p>
                  <h5 className="fw-bold text-end">Tips For Choosing The Perfect </h5>
                  <h5 className="fw-bold text-end">Gloss For Your Lips</h5>
                </div>
              </Col>
            </Row>
            </div>
            <h2 className="mt-5 pt-5 pb-4 fw-bold">Leave A Comment</h2>
            <Form>
      <Row className="mb-3 pb-2 form">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="email" placeholder="Enter email" className="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder="Password"rows={3} className="pb-5"/>
      </Form.Group>

      <Button variant="dark" className="heroButton mt-4  px-4 py-3 post">
              POST COMMENT
            </Button>
    </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogDetails;
