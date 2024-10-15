import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  function changePassword(e) {
    e.preventDefault();
    let user = { email, newPassword,answer };
    fetch("http://localhost:4300/api/auth/forgotPassword", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res1) => {
      res1.json().then((res2) => {
        console.log(res2);
       
        navigate("/Signin");
      });
    });
  }
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Form className="my-5 w-50 " onSubmit={changePassword}>
          <h2 className="text-center">Forgot Password</h2>

          <Form.Group as={Col} controlId="formGridEmail" className="my-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" className="my-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAnswer" className="my-4">
            <Form.Label>Answer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your favourite sports"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="mx-auto d-block">
            Reset
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ForgotPassword;
