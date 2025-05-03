import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function DealWeek() {
  const navigate = useNavigate();
  const [deal, setDeal] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch deals from backend
  function getDeals() {
    fetch("https://male-fashion-pi.vercel.app/api/deal/getdeal")
      .then((res1) => res1.json())
      .then((res2) => {
        const updatedDeals = res2.deal.map((item) => ({
          ...item,
          days: item.days,
          hours: item.hours,
          minutes: item.minutes,
          seconds: item.seconds,
        }));
        setDeal(updatedDeals);
      })
      .catch((error) => console.error(error));
  }

  // Decrement timer for each deal
  const decrementTimer = () => {
    setDeal((prevDeals) =>
      prevDeals.map((item) => {
        let { days, hours, minutes, seconds } = item;
  
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
  
        // Ensure all time components are two digits
        return {
          ...item,
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        };
      })
    );
  };
  

  useEffect(() => {
    getDeals(); // Fetch deals on mount
    const timer = setInterval(decrementTimer, 1000); // Decrement every second
    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div className="mt-5 py-5 deal">
      <Container fluid>
        <Carousel interval={3000}>
          {deal.map((item, index) => (
            <Carousel.Item key={index}>
              <Row className="py-5">
              <Col lg={4} className="text-start ps-5">
                  <div className="mainWhiteImg ps-3">
                  <img
                    src="/DealWeek.png"
                    alt="DealWeek" className="whiteImg ms-5" style={{width:"350px", height:"350px"}}
                  />
                    <h2 className="fw-bold text-dark dealWeektext1">Clothing Collection</h2>
                    <h2 className="fw-bold text-dark dealWeektext2">Clothing Collection</h2>
                    <h2 className="fw-bold text-dark dealWeektext3">Clothing Collection</h2>
                  </div>
                </Col>
                <Col lg={4} className="position-relative ">
                  <div className="deal-sale text-white rounded rounded-circle p-4">
                    <p className="sale">Sale Of</p>
                    <p className="fw-bold">₹ {item.price}</p>
                  </div>
                  <img
                    src={`https://male-fashion-pi.vercel.app/api/deal/getphoto/${item._id}`}
                    alt="Special Deal" className="ms-5" style={{width:"400px", height:"350px"}}
                  />
                </Col>
                <Col lg={4} className="text-start ps-5">
                  <div className="ps-3">
                    <p className="text-danger">
                      <span className="text-danger">D</span>EAL{" "}
                      <span className="text-danger">O</span>F{" "}
                      <span className="text-danger">T</span>HE{" "}
                      <span className="text-danger">W</span>EEK
                    </p>
                    <h1 className="fw-bold">{item.title}</h1>
                    <div className="mt-4 mb-3">
                      <h1 className="fw-bold">
                        <spam>{"  "}</spam>{" "+item.days} : {item.hours} : {item.minutes} : {item.seconds}
                      </h1>
                      <div className="mt-3">
                        <span className="px-3">Days</span>
                        <span className="px-3">Hours</span>
                        <span className="px-3">Minutes</span>
                        <span className="ps-3">Seconds</span>
                      </div>
                    </div>
                    <Button variant="dark" className="heroButton mt-4 px-4 py-3" onClick={() => navigate('/Shop')}>
                      SHOP NOW
                    </Button>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default DealWeek;