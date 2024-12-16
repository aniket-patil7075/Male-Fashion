import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import UserMenu from '../assets/UserMenu'

function Orders() {
    const [orders, setOrders] = useState([]);

    const loginData = JSON.parse(localStorage.getItem("login"));
    const userEmail = loginData.user.email;
    // console.log("User Email : ", userEmail)

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:4300/api/orders/allorders', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const data = await response.json();
                console.log("Orders : ",data);

                if (Array.isArray(data.orders)) {
                    const filteredOrders = data.orders.filter(order => order.userEmail === userEmail);
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
    }, []);

    return (
        <div className='p-5' style={{ paddingTop: "200px" }}>
            <Container>
                <Row className='mx-4'>
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
                                            <td>{order.orderId}</td>
                                            <td>{order.name}</td>
                                            <td>{order.quantity}</td>
                                            <td> ₹ {order.price}</td>
                                            <td>{order.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Orders