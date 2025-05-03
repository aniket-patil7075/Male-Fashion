import React, { useState, useEffect } from "react";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Modal from "react-bootstrap/Modal";
import QRcode from './QRcode'
import CreditCard from "./CreditCard";
import COD from "./COD";


function Cartitems() {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = auth.token;

  const [selectedOption, setSelectedOption] = useState("QR");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderPaymentOption = () => {
    switch (selectedOption) {
      case "QR":
        return <QRcode />;
      case "Card":
        return <CreditCard />;
      case "COD":
        return <COD />;
      default:
        return null;
    }
  };

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item._id] = 1; // Set default quantity to 1
      return acc;
    }, {})
  );

  useEffect(() => {
    setQuantities(
      cart.reduce((acc, item) => {
        acc[item._id] = quantities[item._id] || 1; // Default to 1 if undefined
        return acc;
      }, {})
    );
  }, [cart]);

  const totlePrice = () => {
    let total = 0;
    cart?.forEach((item) => {
      total = total + item.price * (quantities[item._id] || 1);
    });
    return total;
  };

  function removecartitem(cid) {
    let myCart = [...cart];
    let index = myCart.findIndex((item) => item._id === cid);
    myCart.splice(index, 1);
    setCart(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
    const loginData = JSON.parse(localStorage.getItem("login"));
    if (loginData?.user?.email) {
      const userEmail = loginData.user.email;
      const cartKey = `cart_${userEmail}`;
      localStorage.setItem(cartKey, JSON.stringify(myCart));
    }
    console.log("Updated Cart:", myCart);
  }



  const incrementQuantity = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 })); // Start increment from 1
  };

  const decrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const generateNewOrderId = () => {
    let lastOrderId = JSON.parse(localStorage.getItem("lastOrderId")) || 0;
  
    lastOrderId += 1;
  
    localStorage.setItem("lastOrderId", JSON.stringify(lastOrderId));
  
    return `#MF${lastOrderId.toString().padStart(4, "0")}`;
  };
  
  const handlePlaceOrder = async () => {
    const userEmail = JSON.parse(localStorage.getItem("login")).user.email;
    const currentOrders = JSON.parse(localStorage.getItem("adminOrders")) || [];
    const currentDate = new Date().toISOString();
  
    const newOrders = cart.map((item) => {
      const orderId = generateNewOrderId(); 
      return {
        ...item,
        quantity: quantities[item._id],
        userEmail,
        date: currentDate,
        orderId,
      };
    });
  
    console.log("Cart Item : ", newOrders);
  
    try {
      if (!Array.isArray(newOrders) || newOrders.length === 0) {
        console.error("Invalid orders data: Orders should be a non-empty array.");
        return;
      }
  
      const formattedOrders = newOrders.map((order) => ({
        orderId: order.orderId,
        name: order.name,
        quantity: order.quantity,
        userEmail: order.userEmail,
        price: order.price,
        date: order.date || new Date().toISOString(),
        color: typeof order.color === "string" ? order.color.split(",") : order.color,
        size: Array.isArray(order.size) ? order.size.join(",") : order.size || null,
        slug: order.slug || null,
        description: order.description || null,
        createdAt: order.createdAt || new Date().toISOString(),
        updatedAt: order.updatedAt || new Date().toISOString(),
      }));
  
      const response = await fetch("https://male-fashion-pi.vercel.app/api/orders/createorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Ensure token is properly formatted
        },
        body: JSON.stringify({ orders: formattedOrders }), // Wrap orders in an object
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Save orders to localStorage
        const updatedOrders = [...currentOrders, ...newOrders];
        localStorage.setItem("adminOrders", JSON.stringify(updatedOrders));
  
        // Clear cart
        let myCart = [];
        setCart(myCart);
        localStorage.setItem("cart", JSON.stringify(myCart));
  
        const loginData = JSON.parse(localStorage.getItem("login"));
        if (loginData?.user?.email) {
          const userEmail = loginData.user.email;
          const cartKey = `cart_${userEmail}`;
          localStorage.setItem(cartKey, JSON.stringify(myCart));
        }
  
        setShow(false);
        alert("Your order has been placed successfully! Thank you for shopping with us.");
        navigate("/Dashboard/user/Orders");
      } else {
        throw new Error("Failed to save orders to the database.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing your order. Please try again.");
    }
  };

  return (
    <div style={{ paddingTop: "135px" }}>
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
          <span className="text-secondary"> Cart</span>
        </p>
      </div>
      <Container>
        {auth.token ? (
          <Row className="mb-4 mt-5">
            <Col md={9}>
              <table className="table">
                <thead>
                  <tr>
                    <th className="w-25">IMAGE</th>
                    <th className="w-25">PRODUCT</th>
                    <th className="w-25">QUANTITY</th>
                    <th className="w-25">TOTAL PRICE</th>
                    <th className="w-25">EDIT</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((c) => {
                    const quantity = quantities[c._id] || 1;

                    return (
                      <tr key={c._id}>
                        <td>
                          <img
                            className="ax-auto d-block"
                            src={`https://male-fashion-pi.vercel.app/api/product/getphoto/${c._id}`}
                            alt=""
                            height={100}
                            width={100}
                          />
                        </td>
                        <td>{c.name}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-outline-dark d-flex align-items-center justify-content-center"
                              onClick={() => decrementQuantity(c._id)}
                              disabled={quantity <= 1}
                            >
                              <FaMinus />
                            </button>

                            <span className="mx-3">{quantity}</span>

                            <button
                              className="btn btn-outline-dark d-flex align-items-center justify-content-center"
                              onClick={() => incrementQuantity(c._id)}
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </td>
                        <td>{c.price * quantity}</td>
                        <td>
                          <Button
                            variant="danger"
                            className="rounded-0"
                            onClick={() => removecartitem(c._id)}
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Col>

            <Col md={3}>
              <div className="bg-secondary bg-opacity-10 p-5">
                <h4>CART TOTAL</h4>
                <p>Total | Checkout | Payment</p>
                <hr />
                <h6>Total: ₹ {totlePrice()}</h6>
                <Button
                  variant="dark"
                  className="heroButton px-2 py-2 mt-4 rounded-0"
                  onClick={handleShow}
                >
                  PROCEED TO CHECKOUT
                </Button>
              </div>
              <Modal
                show={show}
                onHide={handleClose}
                className="bg-secondary bg-opacity-25"
              >
                <Modal.Header closeButton>
                  <Modal.Title className="text-dark">
                    PAYMENT OPTION
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-secondary bg-opacity-10">
                  <Row
                    className="p-3 bg-light border border-opacity-25"
                    style={{ borderColor: "#13357b" }}
                  >
                    {renderPaymentOption()}
                  </Row>
                  <h5 className="py-3 ps-2 text-dark" style={{ color: "#13357b" }}>
                    UPI, Cards & More
                  </h5>
                  <Row
                    className="p-3 border border-opacity-25"
                    style={{ borderColor: "#13357b" }}
                  >
                    <div
                      className="p-3 bg-light border border-opacity-25"
                      onClick={() => setSelectedOption("QR")}
                      style={{ cursor: "pointer", borderColor: "#13357b" }}
                    >
                      UPI / QR
                    </div>
                    <div
                      className="p-3 bg-light border border-opacity-25"
                      onClick={() => setSelectedOption("Card")}
                      style={{ cursor: "pointer", borderColor: "#13357b" }}
                    >
                      Cards
                    </div>
                    <div
                      className="p-3 bg-light border border-opacity-25"
                      onClick={() => setSelectedOption("COD")}
                      style={{ cursor: "pointer", borderColor: "#13357b" }}
                    >
                      Cash On Delivery
                    </div>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant=""
                    id=""
                    className="heroButton py-2 px-4 "
                    onClick={handleClose}
                  >
                    CLOSE
                  </Button>
                  <Button
                    variant=""
                    id=""
                    className="heroButton py-2 px-4 "
                    onClick={() => {
                      handleClose();
                      handlePlaceOrder();
                    }}
                  >
                    PLACE ORDER
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}

export default Cartitems;
