import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function DealWeek() {
  const [deal, setDeal] = useState([]);
  function getDeals() {
    fetch("http://localhost:4300/api/deal/getdeal").then((res1) => {
      res1
        .json()
        .then((res2) => {
          console.log(res2);
          setDeal(res2.deal);
          console.log(deal);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  useEffect(() => {
    getDeals();
  }, []);
  return (
    <div className="mt-5 py-5 deal" >
      <Container>
       
          {deal.map((item, index) => {
            return (
              <Row key={index}>
                <Col lg={4}>
                  <h1 className="fw-bold ">Hoodie collection</h1>
                </Col>
                <Col lg={4}>
                  <img
                    src={`http://localhost:4300/api/deal/getphoto/${item._id}`}
                    alt="Speacial Deal"
                  />                  
                  <h2>₹ {item.price}</h2>
                </Col>
                <Col lg={4}>
                  <h1>{item.title}</h1>
                  <h3>{item.days}</h3>
                  <h4>{item.hours}</h4>
                  <h5>{item.minutes}</h5>
                  <h6>{item.seconds}</h6>
                </Col>
              </Row>
            );
          })}
        
      </Container>
    </div>
  );
}

export default DealWeek;
