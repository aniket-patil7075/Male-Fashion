import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function DealWeek() {
  const [deal, setDeal] = useState([]);

  // Fetch deals from backend
  function getDeals() {
    fetch("http://localhost:4300/api/deal/getdeal")
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
        console.log(updatedDeals);
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

        return { ...item, days, hours, minutes, seconds };
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
      <Container>
        {deal.map((item, index) => (
          <Row key={index}>
            <Col lg={4}>
              <h1 className="fw-bold">Hoodie collection</h1>
            </Col>
            <Col lg={4}>
              <img
                src={`http://localhost:4300/api/deal/getphoto/${item._id}`}
                alt="Speacial Deal"
              />
              <h2>₹ {item.price}</h2>
            </Col>
            <Col lg={4}>
              <h1 className="fw-bold">{item.title}</h1>
              <div>
                <h1 className="fw-bold">
                  {item.days} : {item.hours} : {item.minutes} : {item.seconds}
                </h1>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default DealWeek;
