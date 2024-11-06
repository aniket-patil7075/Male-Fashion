import React from 'react'
import { useHeart } from '../context/heartlist'
import { useAuth } from '../context/auth'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Heartitems() {
    const [heart, setHeart] = useHeart() // Correct hook usage
    const [auth, setAuth] = useAuth() // Correct hook usage
    const navigate = useNavigate() // Correct hook usage

    const totalPrice = () => {
        let total = 0
        heart?.forEach(item => {
            total += item.price
        })
        return total
    }

    function removeHeartItem(cid) {
        const updatedHeart = heart.filter(item => item._id !== cid) // Filter out the item
        setHeart(updatedHeart) // Update the heart state
        localStorage.setItem('heart', JSON.stringify(updatedHeart)) // Save updated list to localStorage
    }

    return (
        <div style={{ paddingTop: "170px" }}>
            <Container>
                <h1 className='text-center p-3 mb-2'>{`Hello ${auth?.token && auth?.user?.name}`}</h1>
                <h4 className='text-center'>
                    {heart?.length > 1 ? `You have ${heart.length} items in your cart${auth.token ? "" : "Please Login to Checkout"}` : "Your cart is empty"}
                </h4>
                {auth.token ? (
                    <Row className='mb-4 mt-5'>
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
                                        heart?.map((c) => {
                                            return (
                                                <tr key={c._id}>
                                                    <td>
                                                        <img className='ax-auto d-block' src={`http://localhost:4300/api/product/getphoto/${c._id}`} alt="" height={100} width={100} />
                                                    </td>
                                                    <td>{c.name}</td>
                                                    <td>{c.price}</td>
                                                    <td>
                                                        <Button variant='danger' className='rounded-0' onClick={() => removeHeartItem(c._id)}>
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
                            <hr />
                            <h4>Total: ₹ {totalPrice()}</h4>
                            <Button variant='success' className='mt-4 rounded-0' onClick={() => navigate('/Dashboard/user/Orders')}>
                                Proceed to Checkout
                            </Button>
                        </Col>
                    </Row>
                ) : ""}
            </Container>
        </div>
    )
}

export default Heartitems
