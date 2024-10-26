import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import Hero from "./Hero";
import Collections from "./Collections";
import DealWeek from "./DealWeek";
import NewArrivals from "./NewArrivals";
import Instagram from "./Instagram";
import {Row,Col,Card,Button, Container} from 'react-bootstrap'
import {Prices} from './Prices'

function Home() {
  const [auth, setAuth] = useAuth();
  const [products,setProducts] = useState([])
  const [categories,setCategories] = useState([])
  const [checked, setChecked] = useState([])
  const [radio,setRadio] = useState([])

  function getprods(){
    fetch("http://localhost:4300/api/product/getproducts").then((resp1) => {
      resp1
        .json()
        .then((resp2) => {
          console.log(resp2);
          setProducts(resp2.product);
          console.log(products);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  useEffect(()=>{
    if(!checked.length || !radio.length) getprods()
  },[checked.length,radio.length])

  function filterProduct(){
    let data={checked,radio}
    fetch("http://localhost:4300/api/product/filter",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        setProducts(res2.products)
        console.log(products)
      })
    })
  }

  useEffect(()=>{
    if(checked.length || radio.length) filterProduct()
  },[checked.radio])

  function handleFilter(value,id){
    let all = [ ...checked]
    if(value){
      all.push(id)
    }
    else{
      all=all.filter(c=>c!=id)
    }
    setChecked(all)
  }

  function getAllCategory(){
    fetch("http://localhost:4300/api/category/getcategory").then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        setCategories(res2.category)
      })
    })
  }

  useEffect(()=>{
    getAllCategory()
  },[])

  return(
    <div>
      {/* <Hero/>
      <Collections/>
      <NewArrivals/>
      <DealWeek/>*/}
      <Instagram/> 
      {/* {JSON.stringify(auth)} */}

    <Row className="" style={{paddingTop:"150px"}}>
      <Col md={2}>
        <h5 className="mb-3">Filter By Category</h5>
        {
          categories.map((c)=>{
            return (
              <div className="d-flex">
                <input type="checkbox" key={c._id} onChange={(e)=>handleFilter(e.target.checked,c._id)} className="form-check" />
                <label className="form-check-label" >{c.name}</label>
              </div>
            )
          })
        }
        <h5 className="mb-3 mt-3">Filter By Prices</h5>
        {
          Prices?.map(p=>{
            return(
              <div className="d-flex">
                <input type="radio" name="r1" key={p._id} value={p.array} onChange={(e)=>setRadio(e.target.value)} className="form-check" />
                <label className="form-check-label">{p.name}</label>
              </div>
            )
          })
        }
        <Button variant="info" className="mt-3" onClick={()=>window.location.reload()}> RESET FILTER </Button>
      </Col>
      <Col>
        <h3 className="text-center">All Products</h3>
        <Container>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              products.map((item,index)=>{
                return(
                  <div className="col" key={index}>
                    <Card style={{width:'18rem'}} key={index}>
                      <Card.Img variant="top" className="w-100 mx-auto d-block" src={`http://localhost:4300/api/product/getphoto/${item._id}`}  />
                      <Card.Body className="text-center" >
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          {item.description}
                          <h4>{item.price}</h4>
                          {/* <h4>{item.size}</h4> */}
                        </Card.Text>
                        <Button variant="success">Add To Cart</Button>
                      </Card.Body>
                    </Card>
                  </div>
                )
              })
            }
          </div>
        </Container>
      </Col>
    </Row>
   </div>
  )
}

export default Home;
