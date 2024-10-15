import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {useNavigate} from 'react-router-dom'

function Signup() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")
  const [address,setAddress]=useState("")
  const [answer, setAnswer]=useState("")
  const navigate = useNavigate()

  function userSignup(e){
    e.preventDefault()
    let user={name,email,password,phone,address,answer}
    fetch("http://localhost:4300/api/auth/register",{
      method:"post",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(user)
    }).then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        navigate('/Signin')
      })
    })
  }

  return (
    <div>
      <Container>
        
        <Form className="my-5 w-50 " onSubmit={userSignup}>
        <h2 className="text-center">Signup</h2>
          <Form.Group  controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Enter city" value={address} onChange={(e)=>setAddress(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridSport">
            <Form.Label>Answer</Form.Label>
            <Form.Control placeholder="Enter sport" value={answer} onChange={(e)=>setAnswer(e.target.value)} />
          </Form.Group>

          <Button variant="dark" type="submit" className="mx-auto d-block">
            Sign up
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Signup;
