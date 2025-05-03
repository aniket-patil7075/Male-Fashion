import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import AdminMenu from '../assets/AdminMenu';

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products, setProducts] = useState([]);
  function getprods() {
    fetch("https://male-fashion-pi.vercel.app/api/product/getproducts").then((resp1) => {
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
    
  }, []);

  return (
    <div style={{ paddingTop: "200px" }}>
      <Container>
        <Row className="mx-4">
          {/* Admin Menu on the left */}
          <Col md={3}>
            <AdminMenu />
          </Col>

          {/* Product List */}
          <Col md={9}>
            <Container>
            <h3 className="fw-bold text-center my-5">PRODUCTS</h3>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {products.map((item, index) => {
                  return (
                    <Link
                      to={`/Dashboard/admin/Updateproduct/${item.slug}`}
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
                            src={`https://male-fashion-pi.vercel.app/api/product/getphoto/${item._id}`}
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

export default Products;