import React from "react";
import { Container } from "react-bootstrap";

function NewArrivals() {
  return (
    <div className="my-5" style={{paddingTop:"50px"}}>
      <Container>
      <div className="d-flex justify-content-around mx-5 px-5">
        <h3 className="fw-bold">Best Sellers</h3>
        <h3 className="fw-bold">New Arrivals</h3>
        <h3 className="fw-bold">Hot Sales</h3>
      </div>
      
      </Container>
    </div>
  );
}

export default NewArrivals;
