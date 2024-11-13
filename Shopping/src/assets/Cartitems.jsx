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
  const [selectedOption, setSelectedOption] = useState("QR");

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item._id] = item.quantity || 0; 
      return acc;
    }, {})
  );

  useEffect(() => {
    
    setQuantities(
      cart.reduce((acc, item) => {
        acc[item._id] = item.quantity || 0;
        return acc;
      }, {})
    );
  }, [cart]);

  const totlePrice = () => {
    let total = 0;
    cart?.forEach((item) => {
      total = total + item.price * (quantities[item._id] || 1); // Multiply by quantity
    });
    return total;
  };

  function removecartitem(cid) {
    let myCart = [...cart];
    let index = myCart.findIndex((item) => item._id === cid);
    myCart.splice(index, 1);
    setCart(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
  }

  
  const incrementQuantity = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1), 
    }));
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
                            src={`http://localhost:4300/api/product/getphoto/${c._id}`}
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
                  className="heroButton px-4 py-2 mt-4 rounded-0"
                  onClick={handleShow}
                >
                  Proceed to Checkout
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
                Close
              </Button>
              <Button
                variant=""
                id=""
                className="heroButton py-2 px-4 "
                onClick={handleClose}
              >
                Save Changes
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
