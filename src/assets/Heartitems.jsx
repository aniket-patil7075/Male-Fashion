import React from 'react'
import { useHeart } from '../context/heartlist'
import { useAuth } from '../context/auth'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Heartitems() {
    const [heart,setHeart]=useHeart()
    const [auth,setAuth]=useAuth()
    const totlePrice=()=>{
        let total=0
        heart?.map(item=>{total=total+item.price})
        return total
    }
  return (
    <div>
        <div style={{paddingTop:"200px"}}>
        <Container>
            <h1 className='text-center p-3 mb-2'>{`Hello ${auth?.token && auth?.user?.name}`}</h1>
            <h4 className='text-center'>{heart?.length>1?`You have ${heart.length} items in your cart${auth.token?"":"Please Login to Checkout"}`:"Your cart is empty"}</h4>
            {auth.token?(
                <Row className='mb-4'>
                <Col md={9}>
                    <table className='table'>
                         <thead>
                            <tr>
                                <th>Image</th>
                                <th>Products</th>
                                <th>Price</th>
                            </tr>
                        </thead>     
                        <tbody>
                            {
                                heart?.map((c)=>{
                                    return (
                                        <tr>
                                            <td>
                                                <img className='ax-auto d-block' src={`http://localhost:4300/api/product/getphoto/${c._id}`} alt="" height={100} width={100}/>
                                            </td>
                                            <td>{c.name}</td>
                                            <td>{c.price}</td>
                                            <td>
                                                <Button variant='danger' onClick={()=>removecartitem(c._id)}>
                                                Remove
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>      
                    </table>
                </Col>

                <Col md={3}>
                <h2>Cart Summary</h2>
                <p>Total | Checkout | Payment</p>
                <hr/>
                <h4>Total:₹ {totlePrice()}</h4>
                <Button variant='success' className='mt-4' onClick={()=>navigate('/Dashboard/user/Orders')}>
                    Proceed to Checkout
                </Button>
                </Col>
            </Row>
            ):""}
            
        </Container>
    </div>
    </div>
  )
}

export default Heartitems