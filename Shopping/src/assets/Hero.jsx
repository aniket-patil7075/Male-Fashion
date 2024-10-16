import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Hero() {
  return (
    <div className="mainHero">
      <Carousel fade interval={3000} className="custom-carousel" indicators={false}>
        <Carousel.Item>
          <img src="/hero-1.jpg" alt="Hero1" className="caraImg w-100" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/hero-2.jpg" alt="Hero2" className="caraImg w-100" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
