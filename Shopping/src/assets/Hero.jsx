import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mainHero">
      <Carousel
        fade
        interval={3000}
        className="custom-carousel"
        indicators={false}
      >
        <Carousel.Item>
          <img src="/hero-1.jpg" alt="Hero1" className="caraImg w-100" />
          
          <div className="caraText w-25">
            <p className="text-danger fw-bold">SUMMER COLLECTION</p>
            <h1 className="text-dark fw-bold mt-4">Fall - Winter </h1>
            <h1 className="text-dark fw-bold">Collections 2024</h1>
            <p className="text-dark fw-bold mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt aliqua.
            </p>
            <Button variant="dark" className="heroButton mt-4 px-4 py-3" onClick={() => navigate('/Shop')}>
              SHOP NOW <FaArrowRightLong className="heroArrow ms-1" />
            </Button>
            <div className="mt-3"><FaFacebookF className="mx-2"/><FaPinterestP className="mx-2" /><FaInstagram className="mx-2" /><FaTwitter className="mx-2" /></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/hero-2.jpg" alt="Hero2" className="caraImg w-100" />

          <div className="caraText w-25">
            <p className="text-danger fw-bold">SUMMER COLLECTION</p>
            <h1 className="text-dark fw-bold mt-4">Fall - Winter </h1>
            <h1 className="text-dark fw-bold">Collections 2024</h1>
            <p className="text-dark fw-bold mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt aliqua.
            </p>
            <Button variant="dark" className="heroButton mt-4  px-4 py-3" onClick={() => navigate('/Shop')}>
              SHOP NOW <FaArrowRightLong className="heroArrow ms-1" />
            </Button>
            <div className="mt-3"><FaFacebookF className="mx-2"/><FaPinterestP className="mx-2" /><FaInstagram className="mx-2" /><FaTwitter className="mx-2" /></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
