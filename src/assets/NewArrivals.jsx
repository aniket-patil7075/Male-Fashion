import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [showArrival, setShowArrival] = useState(false); // Toggle state

  // Fetch products from the API
  function getprods() {
    fetch("http://localhost:4300/api/product/getproducts")
      .then((resp1) => resp1.json())
      .then((resp2) => {
        console.log(resp2);
        setProducts(resp2.product);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getprods(); // Fetch products on component mount
  }, []);

  const isWithinLast7Days = (createdAt) => {
    const givenDate = new Date(createdAt);
    const today = new Date();
    const differenceInDays = (today - givenDate) / (1000 * 60 * 60 * 24);
    return differenceInDays <= 7;
  };

  const handleArrivalClick = () => {
    const arrivals = products.filter((item) =>
      isWithinLast7Days(item.createdAt)
    );
    if (arrivals.length > 0) {
      setNewArrivals(arrivals);
      setShowArrival(true);
    } else {
      alert("No new arrivals within the last 7 days!");
      setShowArrival(false);
    }
    console.log("New Arrival")
  };

  // Determine which products to display (All or New Arrivals)
  const displayedProducts = showArrival ? newArrivals : products;

  return (
    <div className="newArrivalMainDiv my-5" style={{ paddingTop: "100px" }}>
      <Container>
        <div className="">
          <div className="d-flex justify-content-between text-secondary">
            <h3 className="fw-bold" style={{ cursor: "pointer" }} onClick={() => setShowArrival(false)}>
              All
            </h3>
            <h3
              className="fw-bold"
              style={{ cursor: "pointer" }}
              onClick={handleArrivalClick}
            >
              New Arrivals
            </h3>
            <h3 className="fw-bold" style={{ cursor: "pointer" }}>Best Seller</h3>
          </div>

          <Row>
            {displayedProducts.map((item) => (
              <Col sm={5} lg={3} key={item._id} className=" mb-4 mt-5">
                <Link
                  to={`/getsingleproduct/${item._id}`}
                  className="product-link text-decoration-none"
                >
                  <Card className="productCard" style={{ padding: "0", margin: "0" }}>
                    <Card.Img
                      variant="top"
                      className="w-100 mx-auto d-block"
                      src={`http://localhost:4300/api/product/getphoto/${item._id}`}
                    />
                    <Card.Body className="text-start p-2">
                      <p className="m-0 p-0 fw-bold">{item.name}</p>
                      <div className="d-flex gap-1 my-1">
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                      </div>
                      <p>
                        Available Size: <span>{item.size}</span>
                      </p>
                      <h5 className="m-0 fw-bold">₹ {item.price}</h5>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default NewArrivals;
