import React, { useState, useEffect, useReducer } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Prices } from "./Prices";
import { useCart } from "../context/cart";

function Home() {
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [state, dispatch] = useReducer(reducer, products);

  function reducer(state, action) {
    switch (action.type) {
      case "cartfilter":
        return console.log(state);
      default:
        return state;
    }
  }

  function getAllCategory() {
    fetch("http://localhost:4300/api/category/getcategory")
      .then((res1) => res1.json())
      .then((res2) => {
        console.log(res2);
        setCategories(res2.category);
      })
      .catch((error) => console.log(error));
  }

  function getProducts() {
    fetch("http://localhost:4300/api/product/getproducts")
      .then((resp1) => resp1.json())
      .then((resp2) => {
        console.log(resp2);
        setProducts(resp2.product);
      })
      .catch((error) => console.log(error));
  }

  function handleFilter(value, id) {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  }

  function filterProduct() {
    const data = { checked, radio };
    fetch("http://localhost:4300/api/product/filter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res1) => res1.json())
      .then((res2) => {
        console.log(res2);
        setProducts(res2.products);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (checked.length || radio.length) {
      filterProduct();
    } else {
      getProducts(); // Reset products if no filters are applied
    }
  }, [checked, radio]);

  return (
    <div style={{ paddingTop: "200px" }}>
      <Row className="mt-4">
        <Col md={2}>
          <h5 className="mb-3">Filter By Category</h5>
          {categories.map((c) => (
            <Form.Check
              type="checkbox"
              key={c._id}
              label={c.name}
              onChange={(e) => handleFilter(e.target.checked, c._id)}
            />
          ))}
          <h5 className="mb-3 mt-3">Filter By Prices</h5>
          {Prices.map((p) => (
            <Form.Check
              type="radio"
              key={p._id}
              label={p.name}
              value={p.array}
              onChange={() => setRadio(p.array)}
              name="price" // ensure only one radio button can be selected at a time
            />
          ))}
          <Button
            variant="info"
            className="mt-3"
            onClick={() => {
              setChecked([]);
              setRadio([]);
              getProducts(); // reset the products to the original list
            }}
          >
            RESET FILTERS
          </Button>
        </Col>
        <Col md={9}>
          <h3 className="text-center">All Products</h3>
          <Container>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {products?.map((item, index) => {
                return (
                  <div className="col" key={index}>
                    <Card style={{ width: "18rem" }} key={index}>
                      <Card.Img
                        variant="top"
                        className="w-100 mx-auto d-block"
                        src={`http://localhost:4300/api/product/getphoto/${item._id}`}
                      />
                      <Card.Body className="text-center">
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          {item.description}

                          <h4>₹ {item.price}</h4>
                        </Card.Text>
                        <Button
                          variant="success"
                          onClick={() => {
                            setCart([...cart, item]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, item])
                            );
                          }}
                        >
                          Add To Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
