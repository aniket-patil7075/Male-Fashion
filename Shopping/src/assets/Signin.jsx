import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../context/auth";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [auth,setAuth]=useAuth()

  function userLogin(e){
    e.preventDefault();
    let user={email,password}
    fetch("http://localhost:4300/api/auth/login",{
      method:"post",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(user)
    }).then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        setAuth({
          ...auth,
          user:res2.user,
          token:res2.token
        })
        localStorage.setItem("login",JSON.stringify(res2))
        navigate("/")
      })
    })
  }

  return (
    <div className="" style={{paddingTop:"180px"}}>
      <Container className="d-flex justify-content-center">
        <Form className="my-5 w-50 " onSubmit={userLogin}>
          <h2 className="text-center">Signin</h2>

          
            <Form.Group as={Col} controlId="formGridEmail" className="my-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" className="my-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          

          <Button variant="dark" onClick={()=>navigate('/Forgotpassword')} type="submit" className="mx-auto d-block mb-3 mt-3">
            Forgot Password
          </Button>

          <Button variant="dark" type="submit" className="mx-auto d-block">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Signin;
