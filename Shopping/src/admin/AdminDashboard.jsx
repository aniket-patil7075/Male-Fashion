import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import AdminMenu from "../assets/AdminMenu";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import OrderStatusDropdown from "./OrderStatusDropdown";
import axios from "axios";

function AdminDashboard() {
  const [auth] = useAuth();
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [activeIncomeView, setActiveIncomeView] = useState(null);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  async function getUser() {
    try {
      const response = await fetch("http://localhost:4300/api/user/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      // console.log(data.user);
      setUsers(data.user);
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to fetch users. Please try again later.");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("adminOrders")) || [];
    setOrders(storedOrders);
  }, []);

  useEffect(() => {
    const calculateTotals = () => {
      const totalOrdersCount = orders.length;
      const overallIncome = orders.reduce(
        (sum, order) => sum + order.price * order.quantity,
        0
      );
      setTotalOrders(totalOrdersCount);
      setTotalIncome(overallIncome);
    };

    calculateTotals();
  }, [orders]);

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
    setActiveIncomeView(null);
  };

  const calculateIncome = (filter, month = "all", year = null) => {
    return orders.reduce((sum, order) => {
      const orderDate = new Date(order.date);
      const withinMonth =
        month !== "all" &&
        orderDate.getMonth() + 1 === parseInt(month) &&
        orderDate.getFullYear() === year;
      const withinYear = year && orderDate.getFullYear() === year;

      if (filter === "monthly" && withinMonth)
        return sum + order.price * order.quantity;
      if (filter === "yearly" && withinYear)
        return sum + order.price * order.quantity;
      return sum;
    }, 0);
  };

  const handleIncomeClick = () => {
    setActiveSection((prevSection) =>
      prevSection === "income" ? null : "income"
    );
  };

  const filteredOrders =
    selectedMonth === "all"
      ? orders
      : orders.filter((order) => {
        const orderDate = new Date(order.date);
        return orderDate.getMonth() + 1 === parseInt(selectedMonth);
      });

  const handleStatusChange = async(orderId, newStatus) => {
    try {
      const updatedOrder = filteredOrders.find((order) => order.orderId === orderId);
      const updatedData = { ...updatedOrder, status: newStatus };

      const response = await axios.put("/api/orders/update", updatedData);

      if (response.status === 200) {
        alert("Order status updated successfully!");
      }
    } catch (error) {
      console.error("Failed to update order status:", error);
      alert("An error occurred while updating the order status.");
    }
  };


  return (
    <div style={{ paddingTop: "200px" }}>
      <Container>
        <Row className="mx-4">
          <Col md={3}>
            <AdminMenu />
          </Col>
          <Col md={9}>
            <Row className="">
              <Col md={3}>
                <div
                  className="d-flex align-items-center justify-content-center border bg-danger text-white shadow-sm"
                  onClick={() => toggleSection("orders")}
                  style={{ cursor: "pointer", height: "150px" }}
                >
                  <FaShoppingCart size={40} className="me-3" />
                  <div>
                    <h5>New Orders</h5>
                    <p>{totalOrders}</p>
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div
                  className="d-flex align-items-center justify-content-center border bg-success text-white shadow-sm"
                  onClick={handleIncomeClick}
                  style={{ cursor: "pointer", height: "150px" }}
                >
                  <FaRupeeSign size={40} className="me-3" />
                  <div>
                    <h5>Total Income</h5>
                    <p>₹{totalIncome.toFixed(2)}</p>
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div
                  className="d-flex align-items-center justify-content-center border bg-primary text-white shadow-sm"
                  onClick={() => toggleSection("users")}
                  style={{ cursor: "pointer", height: "150px" }}
                >
                  <FaUser size={40} className="me-3" />
                  <div>
                    <h5>New Users</h5>
                    <p>{users.length}</p>
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div
                  className="d-flex align-items-center justify-content-center border bg-warning text-white shadow-sm"
                  style={{ cursor: "pointer", height: "150px" }}
                >
                  <FaRupeeSign size={40} className="me-3" />
                  <div>
                    <h5>Rating</h5>
                    <p>₹{totalIncome.toFixed(2)}</p>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="mt-5">
              {activeSection === "orders" && (
                <div>
                  <div style={{ marginBottom: "20px" }}>
                    <label
                      htmlFor="monthFilter"
                      style={{ marginRight: "10px" }}
                    >
                      Filter by Month:
                    </label>
                    <select
                      id="monthFilter"
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      style={{ padding: "5px 10px", borderRadius: "4px" }}
                    >
                      <option value="all">All Months</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>

                  {/* Orders table */}
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr style={{ textAlign: "center" }}>
                          <th style={{ minWidth: "120px", width: "120px" }}>Order ID</th>
                          <th style={{ minWidth: "150px", width: "150px" }}>
                            Product
                          </th>
                          <th style={{ minWidth: "90px", width: "90px" }}>
                            Quantity
                          </th>
                          <th style={{ minWidth: "180px", width: "180px" }}>
                            User Email
                          </th>
                          <th style={{ minWidth: "120px", width: "120px" }}>
                            Total Price
                          </th>
                          <th style={{ minWidth: "170px", width: "170px" }}>
                            Date
                          </th>
                          <th style={{ minWidth: "100px", width: "100px" }}>
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredOrders.map((order, index) => {
                          // console.log(order); 
                          return (
                            <tr key={index} style={{ textAlign: "center" }}>
                              <td style={{ padding: "10px 10px" }}>{order.orderId}</td>
                              <td style={{ padding: "10px 10px" }}>{order.name}</td>
                              <td style={{ padding: "10px 10px" }}>{order.quantity}</td>
                              <td style={{ padding: "10px 10px" }}>{order.userEmail}</td>
                              <td style={{ padding: "10px 10px" }}>₹{order.price * order.quantity}</td>
                              <td style={{ padding: "10px 10px" }}>
                                {new Date(order.date).toLocaleString()}
                              </td>
                              <td style={{ padding: "10px 10px" }}>
                                <OrderStatusDropdown
                                  orderId={order.orderId}
                                  initialStatus={order.status}
                                  onChange={(newStatus) => handleStatusChange(order.orderId, newStatus)}
                                />
                              </td>
                            </tr>
                          );
                        })}

                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeSection === "income" && (
                <div>
                  <h4>Total Income Breakdown</h4>
                  <div className="d-flex justify-content-around mt-3">
                    <button
                      className="heroButton px-4 py-2"
                      onClick={() => setActiveIncomeView("monthly")}
                    >
                      Monthly
                    </button>
                    <button
                      className="heroButton px-4 py-2"
                      onClick={() => setActiveIncomeView("yearly")}
                    >
                      Yearly
                    </button>
                  </div>

                  {activeIncomeView === "monthly" && (
                    <div className="mt-4">
                      <h5>Monthly Income</h5>
                      <select
                        className="form-select mt-2"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                      >
                        <option value="all">All Months</option>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i} value={i + 1}>
                            {new Date(0, i).toLocaleString("default", { month: "long" })}
                          </option>
                        ))}
                      </select>
                      <select
                        className="form-select mt-2"
                        value={selectedYear}
                        onChange={(e) => {
                          setSelectedYear(parseInt(e.target.value));
                          setSelectedMonth("all");
                        }}
                      >
                        {Array.from({ length: new Date().getFullYear() - 2020 + 1 }, (_, i) => (
                          <option key={i} value={2021 + i}>
                            {2021 + i}
                          </option>
                        ))}
                      </select>
                      <p className="mt-3 ms-2 fw-bold">
                        ₹
                        {selectedMonth === "all"
                          ? calculateIncome("yearly", "all", selectedYear).toFixed(2)
                          : calculateIncome("monthly", selectedMonth, selectedYear).toFixed(2)}
                      </p>
                    </div>

                  )}

                  {activeIncomeView === "yearly" && (
                    <div className="mt-4">
                      <h5>Yearly Income</h5>
                      <select
                        className="form-select mt-2"
                        value={selectedYear}
                        onChange={(e) =>
                          setSelectedYear(parseInt(e.target.value))
                        }
                      >
                        {Array.from(
                          { length: new Date().getFullYear() - 2020 + 1 },
                          (_, i) => (
                            <option key={i} value={2021 + i}>
                              {2021 + i}
                            </option>
                          )
                        )}
                      </select>
                      <p className="mt-3 fw-bold ms-2">
                        ₹
                        {calculateIncome("yearly", "all", selectedYear).toFixed(
                          2
                        )}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeSection === "users" && (
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th style={{ minWidth: "150px", width: "150px" }}>
                          Name
                        </th>
                        <th style={{ minWidth: "200px", width: "200px" }}>
                          Email
                        </th>
                        <th style={{ minWidth: "150px", width: "150px" }}>
                          Phone
                        </th>
                        <th style={{ minWidth: "200px", width: "200px" }}>
                          Address
                        </th>
                        <th style={{ minWidth: "150px", width: "150px" }}>
                          Answer
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={index}>
                          <td style={{ padding: "10px 15px" }}>{user.name}</td>
                          <td style={{ padding: "10px 15px" }}>{user.email}</td>
                          <td style={{ padding: "10px 15px" }}>{user.phone}</td>
                          <td style={{ padding: "10px 15px" }}>{user.address}</td>
                          <td style={{ padding: "10px 15px" }}>{user.answer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;
