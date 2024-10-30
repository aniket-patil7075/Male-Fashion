import { useEffect, useState } from "react";
import { Container, Row, Col, Pagination, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import Card from "react-bootstrap/Card";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { Prices } from "./Prices";

function Shop() {
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Calculate the index range for products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startItem = (currentPage - 1) * productsPerPage + 1;
  const endItem = Math.min(currentPage * productsPerPage, products.length);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFirstDropdownToggle = (isOpen) => {
    setIsFirstDropdownOpen(isOpen);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getprods();
  }, [checked.length, radio.length]);

  function filterProduct() {
    let data = { checked, radio };
    fetch("http://localhost:4300/api/product/filter", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res1) => {
      res1.json().then((res2) => {
        console.log(res2);
        setProducts(res2.products);
        console.log(products);
      });
    });
  }

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked.radio]);

  function handleFilter(value, id) {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c != id);
    }
    setChecked(all);
  }

  function getAllCategory() {
    fetch("http://localhost:4300/api/category/getcategory").then((res1) => {
      res1.json().then((res2) => {
        console.log(res2);
        setCategories(res2.category);
      });
    });
  }

  useEffect(() => {
    getAllCategory();
  }, []);

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
  }, []);

  const [selectedSize, setSelectedSize] = useState(null);

  // Filter products by the selected size (if any)
  const filteredProducts = selectedSize
    ? products.filter((product) => product.size.includes(selectedSize))
    : products;

  return (
    <div className="shopDiv pb-4" style={{ paddingTop: "135px" }}>
      <div
        className="bg-secondary bg-opacity-25 py-4 mb-5"
        style={{ paddingLeft: "10%" }}
      >
        <h4 className="fw-bold">Shop</h4>
        <p>
          Home{" "}
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>{" "}
          <span className="text-secondary"> Shop</span>
        </p>
      </div>
      <Container>
        <Row className="ms-4">
          <Col md={3}>
            <div>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control
                  required
                  type="text"
                  placeholder="Search"
                  className="shopSearch py-2"
                />
              </Form.Group>
            </div>
            <div className="mt-3 custom-accordion">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>CATEGORIES</Accordion.Header>
                  {categories.map((c) => {
                    return (
                      <div className="d-flex">
                        <Accordion.Body
                          key={c._id}
                          onChange={(e) =>
                            handleFilter(e.target.checked, c._id)
                          }
                        >
                          {c.name}
                        </Accordion.Body>
                      </div>
                    );
                  })}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>FILTER</Accordion.Header>
                  {Prices.map((p) => {
                    return (
                      <div className="d-flex">
                        <Accordion.Body>{p.name}</Accordion.Body>
                      </div>
                    );
                  })}
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0" className="my-4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>SIZE</Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-wrap">
                      {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <div
                          key={size}
                          className={`w-25 text-dark fw-bold border border-secondary text-center py-2 m-2 ${
                            selectedSize === size ? "bg-primary text-white" : ""
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                    <div
                      className="w-25 text-dark fw-bold border border-secondary text-center py-2 m-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedSize(null)}
                    >
                      All
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col sm={9} md={9}>
            <Container>
              <div className="d-flex justify-content-between pb-3 me-2">
                <p>
                  Showing {startItem}–{endItem} of {totalPages} pages
                </p>
                <NavDropdown
                  id="nav-dropdown-light-example"
                  title="Sort by Price : "
                  menuVariant="light"
                >
                  {Prices?.map((p) => {
                    return (
                      <div className="d-flex">
                        <NavDropdown.Item
                          href="#action/3.1"
                          className="fw-bold text-secondary"
                        >
                          {p.name}
                        </NavDropdown.Item>
                      </div>
                    );
                  })}
                </NavDropdown>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {filteredProducts.map((item, index) => {
                  return (
                    <Link
                      to={`/getsingleproduct/${item._id}`}
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
                            <p className="m-0 p-0 fw-bold">{item.name}</p>
                            <div className="d-flex gap-1 my-1">
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                            </div>

                            <p>Available Size :<span> </span> 
                               {item.size}
                            </p>
                            
                            <h5 className="m-0 fw-bold">₹ {item.price}</h5>
                          </Card.Body>
                        </Card>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <Pagination className="justify-content-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                    className={`text-dark bg-white border-dark ${
                      index + 1 === currentPage ? "active" : ""
                    }`}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shop;
