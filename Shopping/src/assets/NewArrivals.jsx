import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useCart } from "../context/cart";
import { useHeart } from "../context/heartlist";

function NewArrivals() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [showArrival, setShowArrival] = useState(false);
  const [fade, setFade] = useState(false);
  const [cart, setCart] = useCart();
  const [heart, setHeart] = useHeart();

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
    fetch("https://male-fashion-pi.vercel.app/api/product/getproducts")
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

  const isWithinLast7Days = (createdAt) => {
    const givenDate = new Date(createdAt);
    const today = new Date();
    const differenceInDays = (today - givenDate) / (1000 * 60 * 60 * 24);
    return differenceInDays <= 1;
  };

  const handleArrivalClick = () => {
    setFade(true);

    setTimeout(() => {
      const arrivals = products.filter((item) =>
        isWithinLast7Days(item.createdAt)
      );
      if (arrivals.length > 0) {
        setNewArrivals(arrivals);
        setShowArrival(true);
      } else {
        alert("No new arrivals within the last 1 day!");
        setShowArrival(false);
      }
      setFade(false);
    }, 500);
  };

  const handleAllClick = () => {
    setFade(true);

    setTimeout(() => {
      setShowArrival(false);
      setFade(false);
    }, 500);
  };

  const displayedProducts = showArrival ? newArrivals : products;

  return (
    <div className="newArrivalMainDiv my-5" style={{ paddingTop: "100px" }}>
      <Container>
        <div className="mx-5 mx-xs-3 ">
          <div className="d-flex justify-content-around">
            <h3
              className={`fw-bold ${
                showArrival ? "text-secondary" : "text-dark"
              }`}
              style={{ cursor: "pointer" }}
              onClick={handleAllClick}
            >
              All
            </h3>
            <h3
              className={`fw-bold ${
                showArrival ? "text-dark" : "text-secondary"
              }`}
              style={{ cursor: "pointer" }}
              onClick={handleArrivalClick}
            >
              New Arrivals
            </h3>
          </div>

          <Row className={`product-row ${fade ? "fade-out" : "fade-in"}`}>
            {displayedProducts.map((item) => (
              <Col sm={5} lg={3} key={item._id} className="mb-4 mt-5 fade-in">
                <div className="addTo">
                  <Card
                    className="productCard"
                    style={{ padding: "0", margin: "0" }}
                  >
                    <Card.Img
                      variant="top"
                      className="w-100 mx-auto d-block"
                      src={`https://male-fashion-pi.vercel.app/api/product/getphoto/${item._id}`}
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

                      <div className="" style={{height:"25px"}}>
                      <div className="addToCart ">
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
                      <div className="" >
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

export default NewArrivals;
