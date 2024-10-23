import  { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import Card from "react-bootstrap/Card";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Shop() {
  const [products, setProducts] = useState([]);
  function getprods() {
    fetch("http://localhost:4300/api/product/getproducts").then((resp1) => {
      resp1
        .json()
        .then((resp2) => {
          console.log(resp2);
          setProducts(resp2.product);
          console.log(products);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  useEffect(() => {
    getprods();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="shopDiv   pb-4" style={{ paddingTop: "135px" }}>
      <div className="bg-secondary bg-opacity-25 py-4 mb-5" style={{paddingLeft:"10%"}}>
          <h4 className="fw-bold">Shop</h4>
          <p>Home <span><MdOutlineKeyboardArrowRight /></span> <spam className="text-secondary"> Shop</spam></p>
        </div>
      <Container>
        
        <Row>
          <Col md={3}>
            {/* <AdminMenu /> */}
          </Col>
          <Col md={9}>
            <Container>
              <div className="d-flex justify-content-between pb-3 me-2">
                <p>Showing 1–12 of 126 results</p>
                <NavDropdown
              id="nav-dropdown-light-example"
              title="Sort by Price : "
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1" className="fw-bold">Low To High</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                High To Low
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">₹500 To ₹1000</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                ₹1000 To ₹2000
              
              </NavDropdown.Item>
            </NavDropdown>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {products.map((item, index) => {
                  return (
                    <Link
                      to={`/Singleproduct/${item.slug}`}
                      key={item._id}
                      className="product-link text-decoration-none"
                    >
                      <div className="col">
                        <Card
                          key={index}
                          className="productCard"
                          style={{ padding: "0", margin: "0" }}
                        >
                          <Card.Img
                            variant="top"
                            className="w-100 mx-auto d-block"
                            src={`http://localhost:4300/api/product/getphoto/${item._id}`}
                          />
                          <Card.Body className="text-start p-2">
                            <p className="m-0 p-0">{item.name}</p>
                            <div className="d-flex gap-1 my-1">
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                            </div>
                            <h5 className="m-0 fw-bold">₹ {item.price}</h5>
                          </Card.Body>
                        </Card>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shop;
