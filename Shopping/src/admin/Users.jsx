import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminMenu from "../assets/AdminMenu";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  async function getUser() {
    try {
      const response = await fetch("https://male-fashion-pj3d.onrender.com/api/user/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });


      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data.user);
      setUsers(data.user);
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to fetch users. Please try again later.");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="users-page" style={{ paddingTop: "200px" }}>
      <Container>
        <Row className='mx-4'>
          <Col md={3} sm={12}>
            <AdminMenu />
          </Col>
          <Col md={9} sm={12}>
            <h4 className="text-center pb-3 fw-bold">All Users</h4>
            <div className="table-responsive">
              <table className="table table-striped w-100">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Answer</th>

                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                      <td>{user.answer}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {error && <p className="text-danger">{error}</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Users;