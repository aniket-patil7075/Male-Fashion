import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [showArrival, setShowArrival] = useState(false); 
  const [fade, setFade] = useState(false);
  const [heart, setHeart] = useState(() => {
    const savedHeart = localStorage.getItem("heart");
    return savedHeart ? JSON.parse(savedHeart) : [];
  }); 

  const handleCartClick=(item)=>{
    const alreadyInCart = cart.find((prod)=>prod._id === item._id);
    if(alreadyInCart){
      alert("Product is already in your cartlist")
    }else{
      const updatedCart = [...cart,item];
      setCart(updatedCart)
      localStorage.setItem("cart",JSON.stringify(updatedCart))
    }
  }
  const isInWishlist = (item) => heart.some((prod) => prod._id === item._id);

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
    return differenceInDays <= 1;
  };

  const handleArrivalClick = () => {
    setFade(true); // Trigger fade-out effect

    setTimeout(() => {
      const arrivals = products.filter((item) => isWithinLast7Days(item.createdAt));
      if (arrivals.length > 0) {
        setNewArrivals(arrivals);
        setShowArrival(true);
      } else {
        alert("No new arrivals within the last 1 day!");
        setShowArrival(false);
      }
      setFade(false); // Trigger fade-in effect
    }, 500); // Delay to match the CSS transition duration
  };

  const handleAllClick = () => {
    setFade(true); // Trigger fade-out effect

    setTimeout(() => {
      setShowArrival(false);
      setFade(false); // Trigger fade-in effect
    }, 500); // Delay to match the CSS transition duration
  };

  const displayedProducts = showArrival ? newArrivals : products;

  return (
    <div className="newArrivalMainDiv my-5" style={{ paddingTop: "100px" }}>
      <Container>
        <div className="mx-lg-5">
          <div className="d-flex justify-content-around">
            <h3
              className={`fw-bold ${showArrival ? "text-secondary" : "text-dark"}`}
              style={{ cursor: "pointer" }}
              onClick={handleAllClick}
            >
              All
            </h3>
            <h3
              className={`fw-bold ${showArrival ? "text-dark" : "text-secondary"}`}
              style={{ cursor: "pointer" }}
              onClick={handleArrivalClick}
            >
              New Arrivals
            </h3>
          </div>

          <Row className={`product-row ${fade ? 'fade-out' : 'fade-in'}`}>
            {displayedProducts.map((item) => (
              <Col sm={5} lg={3} key={item._id} className="mb-4 mt-5 fade-in">
                <Link
                  to={`/getsingleproduct/${item._id}`}
                  className="product-link text-decoration-none"
                >
                  <div className="addTo">
                  <Card className="productCard" style={{ padding: "0", margin: "0" }}>
                    <Card.Img
                      variant="top"
                      className="w-100 mx-auto d-block"
                      src={`http://localhost:4300/api/product/getphoto/${item._id}`}
                    />
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
                          <img src="./heart.png" alt="Add to favorites" 
                          style={{ filter: isInWishlist(item) ? "invert(36%) sepia(80%) saturate(7482%) hue-rotate(340deg) brightness(91%) contrast(108%)" : "none" }} />
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
                              onClick={()=>handleCartClick(item)}
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
                        Available Size: <span>{item.size}</span>
                      </p>
                      <h5 className="m-0 fw-bold">₹ {item.price}</h5>
                    </Card.Body>
                  </Card>
                  </div>
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
