import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useAuth } from "../context/auth";
import { useNavigate, useParams } from "react-router-dom";
import AdminMenu from "../assets/AdminMenu";

function Updateproduct() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [id,setId]=useState()
  const [auth] = useAuth();
  const params=useParams()
  const navigate=useNavigate()
  const token = auth.token;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function getAllCategory() {
    fetch("https://male-fashion-pj3d.onrender.com/api/category/getcategory").then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        setCategories(res2.category)
      })
    })
  }
  useEffect(()=>{
getAllCategory()
  },[])

  function getsingleprod(){
    fetch(`https://male-fashion-pj3d.onrender.com/api/product/getsingleproduct/${params.slug}`).then((res1)=>{
      res1.json().then((res2)=>{
          console.log(res2)
          console.log(res2.product.category)
          setName(res2.product.name)
          setPrice(res2.product.price)
          setDescription(res2.product.description)
          setQuantity(res2.product.quantity)
          setId(res2.product._id)
          setCategory(res2.product.category._id)
      })
})
  }
  useEffect(() => {
    getsingleprod();
  }, []);


  function editProduct(e) {
    e.preventDefault();
    const prod = new FormData();
    prod.append("name", name);
    prod.append("description", description);
    prod.append("price", price);
    prod.append("quantity", quantity);
    prod.append("category",category)
    photo && prod.append("photo", photo);
    console.log(prod);

    fetch(`https://male-fashion-pj3d.onrender.com/api/product/update/${id}`,{      
      method:"put",
      headers:{
        // "Accept":'application/json',
        // "Content-Type":"application/json",
        "authorization":token
      },
      body:prod
    }).then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
      getprods()
      navigate('/Dashboard/admin/Products')
      }).catch((error)=>{
        console.log(error)
      })
    
  })
}

  function getprods() {
    fetch("https://male-fashion-pj3d.onrender.com/api/product/getproducts").then((res1) => {
      res1
        .json()
        .then((res2) => {
          console.log(res2);
          setProducts(res2.product);
          console.log(products);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  useEffect(() => {
    getprods();
  }, []);
  
  function deleteprod(){
    fetch(`https://male-fashion-pj3d.onrender.com/api/product/delete/${id}`,{
      method:"delete"
    }).then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        navigate('/Dashboard/admin/Products')
      })
    })
  }
  return (
    <div style={{paddingTop:"200px"}}>
    <Container fluid>
      <Row>
        <Col md={3}>
          <AdminMenu />
        </Col>

        <Col md={9}>
        <Container>
          <h1 className="mt-4 text-center">UpdateProduct</h1>
          <Form onSubmit={(e)=>editProduct(e)}>
          <Form.Select aria-label="Default select example" className='mb-3' name={category}
  onChange={(e)=>setCategory(e.target.value)}>
    <option>---select Category---</option>
    {
      categories?.map((c)=>{
        return (
        <option key={c._id} value={c._id}>{c.name}</option>)
      })
    }
  </Form.Select>
              <Form.Group as={Row} className="mb-3" controlId="formHorizantalEmail">
                <Form.Label column sm={2}>
                  Product Name:

                </Form.Label>
                  <Col sm={10}>
                  <Form.Control type="text" placeholder="Product Name" value={name} onChange={(e)=>setName(e.target.value)}/>

                  </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizantalPirce">
                <Form.Label column sm={2}>
                  Price:

                </Form.Label>
                  <Col sm={10}>
                  <Form.Control type="text" placeholder="Product Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>

                 
                  </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizantalQuantity">
                <Form.Label column sm={2}>
                  Qunatity:

                </Form.Label>
                  <Col sm={10}>
                  <Form.Control type="text" placeholder="Quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}>

                  </Form.Control>
                  </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizantalDescription">
                <Form.Label column sm={2}>
                  Description:

                </Form.Label>
                  <Col sm={10}>
                  <Form.Control type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}>

                  </Form.Control>
                  </Col>
              </Form.Group>

              <Form.Group  className="mb-3" controlId="formFile">
                <Form.Label >
                  Upload Product Picture

                </Form.Label>
                  
                  <Form.Control type="file" name="photo"
                  accept="image/*"  onChange={(e)=>setPhoto(e.target.files[0])} hidden/>

                
                  
              </Form.Group>
              <div className="mb-3">
                  {
                    photo && (
                      <div className="text-center">
                        <img src={URL.createObjectURL(photo)} alt="product" height={'200px'} className="img-fluid"/>
                      </div>
                    )
                  }
              </div>
              <Form.Group as={Row} className="mb-3">
                
                  <Col sm={{span :10, offset: 2}}>
                  <Button variant="dark" type="submit" className="heroButton mt-4  px-4 py-3">
           Edit Product 
          </Button>{" "}    
          <Button variant="danger" onClick={()=>deleteprod(id)} className="deleteButton mt-4  px-4 py-3">
           Delete Product 
          </Button>                 </Col>
              </Form.Group>
          </Form>
        </Container>
        </Col>
      </Row>
    </Container>
  </div>
  )
}
export default Updateproduct;
