import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSearch } from "../context/search";
import { CiStar } from "react-icons/ci";
import { useCart } from "../context/cart";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Search() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [cart, setCart] = useCart();
  const [heart, setHeart] = useState(() => {
    const savedHeart = localStorage.getItem("heart");
    return savedHeart ? JSON.parse(savedHeart) : [];
  });
  const [values, setValues] = useSearch();
  const handleCartClick = (item) => {
    const alreadyInCart = cart.find((prod) => prod._id === item._id);
    if (alreadyInCart) {
      alert("Product is already in your cartlist");
    } else {
      const updatedCart = [...cart, item];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  const isInWishlist = (item) => heart.some((prod) => prod._id === item._id);
  return (
    <div style={{ paddingTop: "180px" }}>
      <h5 className="mb-4">
        {values?.result.length < 1
          ? "No Products Found"
          : `Found ${values?.result.length} Products`}
      </h5>
      <Container>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {values?.result.map((item, index) => {
            return (
              <div className="col" key={index}>
                <div className="col addTo">
                  <Card
                    key={index}
                    className="productCard"
                    style={{ padding: "0", margin: "0" }}
                  >
                    <Card.Img
                      variant="top"
                      className="w-100 mx-auto d-block"
                      src={`http://localhost:4300/api/product/getphoto/${item._id}`}
                    />{" "}
                    <a
                      href=""
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                      }}
                      className="heart"
                      onClick={() => handleWishlistClick(item)}
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
                          
                          onClick={() => handleCartClick(item)}
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
                      <p className="m-0 p-0 fw-bold prodName">{item.name}</p>
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
                      {/* <Button
                              variant="dark"
                              className="heroButton mt-4 px-4 py-2"
                              onClick={() => {
                                setCart([...cart, item]);
                                localStorage.setItem(
                                  "cart",
                                  JSON.stringify([...cart, item])
                                );
                              }}
                            >
                              Add To Cart
                            </Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Search;
