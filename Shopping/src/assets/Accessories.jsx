import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useCart } from "../context/cart";
import { useHeart } from "../context/heartlist";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Accessories() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [heart, setHeart] = useHeart();

  // Add to Cart Handler
  const handleCartClick = (item) => {
    const loginData = localStorage.getItem("login");

    if (!loginData) {
      alert("Please log in to add items to your cart.");
      return;
    }

    const parsedLoginData = JSON.parse(loginData);
    const userEmail = parsedLoginData?.user?.email;

    if (!userEmail) {
      alert("Email not found in login data.");
      return;
    }

    const cartKey = `cart_${userEmail}`;
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

  // Add to Wishlist Handler
  const handleWishlistClick = (item) => {
    const loginData = localStorage.getItem("login");

    if (!loginData) {
      alert("Please log in to add items to your wishlist.");
      return;
    }

    const parsedLoginData = JSON.parse(loginData);
    const userEmail = parsedLoginData?.user?.email;

    if (!userEmail) {
      alert("Email not found in login data.");
      return;
    }

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

  // Check if product is in the wishlist
  const isInWishlist = (item) => heart.some((prod) => prod._id === item._id);

  // Fetch Products and Filter by Category
  const getprods = () => {
    fetch("http://localhost:4300/api/product/getproducts")
      .then((response) => response.json())
      .then((data) => {
        // console.log("Products list: ", data);
        setProducts(data.product);

        // Filter products by category name
        const filtered = data.product.filter(
          (item) => item.category?.name === "Accessories"
        );
        setFilteredProducts(filtered);
      })
      .catch((error) => console.error("Error fetching products: ", error));
  };

  useEffect(() => {
    getprods();
  }, []);

  return (
    <div className="newArrivalMainDiv mb-5" style={{ paddingTop: "135px" }}>
        <div
                      className="bg-secondary bg-opacity-10 py-4 mb-5"
                      style={{ paddingLeft: "10%" }}
                    >
                      <h4 className="fw-bold">Accessories</h4>
                      <p>
                        Home{" "}
                        <span>
                          <MdOutlineKeyboardArrowRight />
                        </span>{" "}
                        <span className="text-secondary"> Accessories</span>
                      </p>
                    </div>
      <Container>
        <div className="mx-lg-5">
          <Row className="product-row">
            {filteredProducts.map((item) => (
              <Col sm={5} lg={3} key={item._id} className="mb-4 mt-5 fade-in">
                <div className="addTo">
                  <Card
                    className="productCard"
                    style={{ padding: "0", margin: "0" }}
                  >
                    <Card.Img
                      variant="top"
                      className="w-100 mx-auto d-block"
                      src={`http://localhost:4300/api/product/getphoto/${item._id}`}
                    />
                    <button
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "none",
                        border: "none",
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
                    </button>
                    <Card.Body className="text-start p-2">
                      <div style={{ height: "25px" }}>
                        <div className="addToCart">
                          <FaPlus
                            style={{ color: "#e53637", fontSize: "12px" }}
                          />
                          <button
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
                          </button>
                        </div>
                        <p className="m-0 p-0 fw-bold prodName">{item.name}</p>
                      </div>
                      <div>
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
                        <h5 className="fw-bold">₹ {item.price}</h5>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Accessories;
