import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import AdminMenu from '../assets/AdminMenu'
import { Button, Container, Form, FormControl, FormLabel } from 'react-bootstrap'
import { useAuth } from "../context/auth";
import {useNavigate} from 'react-router-dom'

function CreateProduct() {
    const [products , setProducts]= useState([])
    const [name, setName]=useState("")
    const [price, setPrice]=useState(0)
    const [quantity,setQuantity]=useState(1)
    const [description,setDescription]=useState("")
    const [photo,setPhoto]=useState("")
    const [categories,setCategories]=useState([])
    const [category,setCategory]=useState("")
    const [auth]=useAuth()
    const token=auth.token
    const navigate=useNavigate()

    function getAllCategory()
    {
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



    function addproduct(e){
        e.preventDefault();
        const prod=new FormData()
        prod.append("name",name)
        prod.append("description",description)
        prod.append("price",price)
        prod.append("quantity",quantity)
        photo && prod.append("photo",photo)
        prod.append("category",category)
        console.log(prod)

        fetch("http://localhost:4300/api/product/create",{
            method:"post",
            headers:{
                "authorization":token
            },
            body:prod
        }).then((res1)=>{
            res1.json().then((res2)=>{
                console.log(res2)
                getprods()
                navigate('/Dashboard/admin/Products')
            }).catch((error)=>{
                console.log(error)
            })
        })
    }

    function getprods(){
        fetch("http://localhost:4300/api/product/getproducts").then((res1)=>{
            res1.json().then((res2)=>{
                console.log(res2)
                setProducts(res2.product)
                console.log(products)
            }).catch((error)=>{
                console.log(error)
            })
        })
    }

    useEffect(()=>{
        getprods()
    },[])

  return (
    <div>
        <Container fluid style={{paddingTop:"180px"}}>
            <Row>
                <Col md={3}>
                    <AdminMenu/>
                </Col>
                <Col md={9}>
                    <Container>
                        <h1 className='mt-4 text-center'>Add New Product</h1>
                        <Form onSubmit={(e)=>addproduct(e)}>
                            <Form.Select aria-label='Default select example' className='mb-3' name={category} onChange={(e)=>setCategory(e.target.value)}>
                                <option>--Select Category--</option>
                                {
                                    categories?.map((c)=>{
                                        return(
                                            <option key={c._id} value={c._id}>{c.name}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                            <Form.Group as={Row} className='mb-3' controlId='forHorizontalEmail'>
                                <FormLabel column sm={2}>
                                    Product Name : 
                                </FormLabel>
                                <Col sm={10}>
                                    <FormControl type='text' placeholder='Product Name' value={name} onChange={(e)=>setName(e.target.value)} /> 
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className='mb-3' controlId='forHorizontalPrice'>
                                <FormLabel column sm={2}>
                                    Price : 
                                </FormLabel>
                                <Col sm={10}>
                                    <FormControl type='text' placeholder='Product Price' value={price} onChange={(e)=>setPrice(e.target.value)} /> 
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className='mb-3' controlId='forHorizontalQuantity'>
                                <FormLabel column sm={2}>
                                    Quantity : 
                                </FormLabel>
                                <Col sm={10}>
                                    <FormControl type='text' placeholder='Product Quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)} /> 
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className='mb-3' controlId='forHorizontalDescription'>
                                <FormLabel column sm={2}>
                                    description : 
                                </FormLabel>
                                <Col sm={10}>
                                    <FormControl type='text' placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} /> 
                                </Col>
                            </Form.Group>

                            <Form.Group  className='mb-3' controlId='formFile'>
                                <FormLabel column sm={2}>
                                    Upload Product Picture : 
                                </FormLabel>
                                    <FormControl type='file' name='photo' accept='image/*' onChange={(e)=>setPhoto(e.target.files[0])} hidden /> 
                            </Form.Group>

                            <div className='mb-3'>
                                {photo && (
                                    <div className='text-center'>
                                        <img src={URL.createObjectURL(photo)} alt='product' height={"200px"} className='img-fluid' />
                                    </div>
                                )}
                            </div>
                            <Form.Group as={Row} className='mb-3'>
                                <Col sm={{span:10 , offset:2}}>
                                <Button type='submit' variant="dark" className="heroButton mt-4  px-4 py-3">
              ADD PRODUCT 
            </Button>
                                </Col>
                            </Form.Group>

                        </Form>
                    </Container>                
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CreateProduct