import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import UserMenu from "../assets/UserMenu";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null); // State to store the selected order

    const handleClose = () => setShow(false);
    const handleShow = (order) => {
        setSelectedOrder(order); // Set the clicked order data
        setShow(true);
    };

    const loginData = JSON.parse(localStorage.getItem("login"));
    const userEmail = loginData?.user?.email;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(
                    "http://localhost:4300/api/orders/allorders",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const data = await response.json();
                console.log(data);

                if (Array.isArray(data.orders)) {
                    const filteredOrders = data.orders.filter(
                        (order) => order.userEmail === userEmail
                    );
                    setOrders(filteredOrders);
                } else {
                    console.error("Expected orders to be an array, but got:", data.orders);
                    setOrders([]); // Fallback to an empty array
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };
        fetchOrders();
    }, [userEmail]);

    const formatDate = (dateString) => {
        const date = new Date(dateString); 
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0'); 
        return `${year}-${month}-${day}`; 
    };


    const getDeliveryDate = (orderDate) => {
        const date = new Date(orderDate); 
        date.setDate(date.getDate() + 5); 
        return date.toISOString().split('T')[0]; 
    };


    return (
        <div className="p-5" style={{ paddingTop: "200px" }}>
            <Container>
                <Row className="mx-4">
                    <Col md={3}>
                        <UserMenu />
                    </Col>
                    <Col md={9} className="" style={{ marginTop: "100px" }}>
                        <h3 className="fw-bold text-center my-5">ALL ORDERS</h3>
                        {orders.length === 0 ? (
                            <p>No orders found.</p>
                        ) : (
                            <table className="table table-bordered table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order._id}>
                                            <td
                                                className="text-primary text-decoration-underline"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => handleShow(order)} // Pass the order data
                                            >
                                                {order.orderId}
                                            </td>
                                            <td>{order.name}</td>
                                            <td>{order.quantity}</td>
                                            <td>₹ {order.price}</td>
                                            <td>{order.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {/* Modal */}
                        <Modal
                            show={show}
                            onHide={handleClose}
                            className="orderModal bg-secondary bg-opacity-25"
                            style={{ marginTop: "10%" }}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title className="text-dark">
                                    ORDER DETAILS
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="bg-secondary bg-opacity-10">
                                {selectedOrder ? (
                                    <div>
                                        <p>
                                            <strong>Order ID:</strong>{" "}
                                            <span className="text-primary text-decoration-underline">
                                                {selectedOrder.orderId}
                                            </span>
                                        </p>
                                        <p>
                                            <strong>Name:</strong> {selectedOrder.name}
                                        </p>
                                        <p>
                                            <strong>Description
                                                :</strong> {selectedOrder.description
                                            }
                                        </p>
                                        <p>
                                            <strong>Ordered Date:</strong> {formatDate(selectedOrder.date)}
                                        </p>

                                        <p>
                                            <strong>Status:</strong> {selectedOrder.status}
                                        </p>
                                        <p>
                                            <strong>Delivery Date:</strong> {getDeliveryDate(selectedOrder.date)}
                                        </p>
                                    </div>
                                ) : (
                                    <p>No order details available.</p>
                                )}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    className="heroButton py-2 px-4"
                                    onClick={handleClose}
                                >
                                    CLOSE
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Orders;
