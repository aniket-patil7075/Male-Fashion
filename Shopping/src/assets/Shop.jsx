import { useEffect, useState, useReducer } from "react";
import { Container, Row, Col, Pagination, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import Card from "react-bootstrap/Card";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { Prices } from "./Prices";
import { useCart } from "../context/cart";
import { FaPlus } from "react-icons/fa6";
import Searchinput from "./Searchinput";
import { useHeart } from "../context/heartlist";

function Shop() {
  // const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [priceChecked, setPriceChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [cart, setCart] = useCart();
  const [heart, setHeart] = useHeart();
  // const [heart, setHeart] = useState(() => {
  //   const savedHeart = localStorage.getItem("heart");
  //   return savedHeart ? JSON.parse(savedHeart) : [];
  // });

  // const handleCartClick = (item) => {
  //   const loginData = JSON.parse(localStorage.getItem("login"));
  //   const userToken = loginData?.token;
  //   console.log("Usertoken: ", userToken);
  //   if (!userToken) {
  //     alert("Please log in to add items to your cart.");
  //     return;
  //   }

  //   const cartKey = `cart_${userToken}`;
  //   const existingCart = JSON.parse(localStorage.getItem(cartKey)) || [];
  //   const alreadyInCart = existingCart.find((prod) => prod._id === item._id);
    
  //   if (alreadyInCart) {
  //     alert("Product is already in your cart.");
  //   } else {
  //     const updatedCart = [...existingCart, item];
  //     setCart(updatedCart);
  //     localStorage.setItem(cartKey, JSON.stringify(updatedCart));
  //     alert("Product successfully added to cart.");
  //   }
  // };
  const handleCartClick = (item) => {
    const loginData = localStorage.getItem("login");

    if (!loginData) {
        alert("Please log in to add items to your cart.");
        return;
    }

    const parsedLoginData = JSON.parse(loginData);
    const userEmail = parsedLoginData?.user?.email; // Access email from the nested 'user' object

    if (!userEmail) {
        alert("Email not found in login data.");
        return;
    }

    console.log("User Email: ", userEmail);

    const cartKey = `cart_${userEmail}`; // Use email to generate a unique cart key
    const existingCart = JSON.parse(localStorage.getItem(cartKey)) || [];
    const alreadyInCart = existingCart.find((prod) => prod._id === item._id);

    if (alreadyInCart) {
        alert("Product is already in your cart.");
    } else {
        const updatedCart = [...existingCart, item];
        setCart(updatedCart);
        localStorage.setItem(cartKey, JSON.stringify(updatedCart));
        alert("Product successfully added to cart.");
    }
};


const handleWishlistClick = (item) => {
  // Retrieve the login data and extract the email
  const loginData = localStorage.getItem("login");

  if (!loginData) {
      alert("Please log in to add items to your wishlist.");
      return;
  }

  const parsedLoginData = JSON.parse(loginData);
  const userEmail = parsedLoginData?.user?.email; // Access email from the nested 'user' object

  if (!userEmail) {
      alert("Email not found in login data.");
      return;
  }

  console.log("User Email: ", userEmail);

  const heartKey = `heart_${userEmail}`; 
  const existingHeart = JSON.parse(localStorage.getItem(heartKey)) || [];
  const alreadyInWishlist = existingHeart.find((prod) => prod._id === item._id);

  if (alreadyInWishlist) {
      alert("Product is already in your wishlist!");
  } else {
      const updatedHeart = [...existingHeart, item];
      setHeart(updatedHeart);
      localStorage.setItem(heartKey, JSON.stringify(updatedHeart));
      alert("Product successfully added to wishlist.");
  }
};


  const isInWishlist = (item) => heart.some((prod) => prod._id === item._id);

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
    getprods();
  }, []);

  function reducer(state, action) {
    switch (action.type) {
      case "cartfilter":
        return console.log(state);
      default:
        return state;
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startItem = (currentPage - 1) * productsPerPage + 1;
  const endItem = Math.min(currentPage * productsPerPage, products.length);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFirstDropdownToggle = (isOpen) => {
    setIsFirstDropdownOpen(isOpen);
  };

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

  const priceRanges = [
    { _id: 0, label: "0-999", min: 0, max: 999 },
    { _id: 1, label: "1000-9999", min: 1000, max: 9999 },
    { _id: 2, label: "10000-99999", min: 10000, max: 99999 },
    { _id: 3, label: "100000-999999", min: 100000, max: 999999 },
  ];

  function handleFilterPrice(value, id) {
    if (!priceRanges.some((range) => range._id === id)) {
      console.error("Invalid price range ID:", id);
      return;
    }

    console.log("Product price filter ID:", id);
    let all = [...priceChecked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setPriceChecked(all);
  }

  function filterProduct() {
    const data = { checked, priceChecked, radio };
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

  const filteredProducts = products
    .filter((product) => {
      return selectedSize ? product.size.includes(selectedSize) : true;
    })
    .filter((product) => {
      if (priceChecked.length === 0) return true;
      return priceChecked.some((id) => {
        const range = priceRanges[id];

        return (
          range && product.price >= range.min && product.price <= range.max
        );
      });
    });

  useEffect(() => {
    if (checked.length || priceChecked.length) {
      filterProduct();
    } else {
      getProducts();
    }
  }, [checked, priceChecked, radio]);
  useEffect(() => {
    getAllCategory();
    getProducts();
  }, []);

  return (
    <div className="shopDiv pb-4" style={{ paddingTop: "135px" }}>
      <div
        className="bg-secondary bg-opacity-10 py-4 mb-5"
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
              <Searchinput />
            </div>
            <div className="mt-3 custom-accordion">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>CATEGORIES</Accordion.Header>
                  {categories.map((c) => {
                    return (
                      <Form.Check
                        className="text-secondary py-2 ms-2"
                        type="checkbox"
                        key={c._id}
                        label={c.name}
                        onChange={(e) => handleFilter(e.target.checked, c._id)}
                      />
                    );
                  })}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>FILTER</Accordion.Header>
                  {priceRanges.map((p) => {
                    return (
                      <Form.Check
                        className="text-secondary py-2 ms-2"
                        type="checkbox"
                        key={p._id}
                        label={p.label}
                        onChange={(e) =>
                          handleFilterPrice(e.target.checked, p._id)
                        }
                      />
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
                {/* <NavDropdown
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
                </NavDropdown> */}
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {filteredProducts.map((item, index) => {
                  return (
                    <div className="col addTo">
                      <Card
                        key={index}
                        className="productCard"
                        style={{ padding: "0", margin: "0" }}
                      >
                        <Link
                          to={`/getsingleproduct/${item.slug}`}
                          key={item._id}
                          className="product-link text-decoration-none"
                        >
                          <Card.Img
                            variant="top"
                            className="w-100 mx-auto d-block"
                            src={`http://localhost:4300/api/product/getphoto/${item._id}`}
                          />{" "}
                        </Link>
                        <a
                          href=""
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                          }}
                          className="heart"
                          onClick={(e) => {
                            e.preventDefault();
                            handleWishlistClick(item);
                          }}
                        >
                          <img
                            src="./heart.png"
                            alt="Add to favorites"
                            style={{
                              filter: isInWishlist(item)
                                ? "invert(36%) sepia(80%) saturate(7482%) hue-rotate(340deg) brightness(91%) contrast(108%)"
                                : "none",
                            }}
                          />
                        </a>
                        <Card.Body className="text-start p-2">
                          <div className="addToCart">
                            <FaPlus
                              style={{ color: "#e53637", fontSize: "12px" }}
                            />
                            <a
                              href=""
                              variant="success"
                              // onClick={() => {
                              //   setCart([...cart, item]);
                              //   localStorage.setItem(
                              //     "cart",
                              //     JSON.stringify([...cart, item])
                              //   );
                              // }}
                              onClick={(e) => {
                                e.preventDefault();
                                handleCartClick(item);
                              }}
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "#e53637",
                                fontWeight: "bold",
                                textDecoration: "none",
                              }}
                            >
                              Add To Cart
                            </a>
                          </div>
                          <p className="m-0 p-0 fw-bold prodName">
                            {item.name}
                          </p>
                          <div className="d-flex gap-1 my-1">
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                            <CiStar />
                          </div>

                          <p>
                            Available Size :<span> </span>
                            {item.size}
                          </p>

                          <h5 className="fw-bold">₹ {item.price}</h5>
                        </Card.Body>
                      </Card>
                    </div>
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
