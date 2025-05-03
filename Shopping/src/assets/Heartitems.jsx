import React, { useEffect } from 'react'
import { useHeart } from '../context/heartlist'
import { useAuth } from '../context/auth'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Heartitems() {
    const [heart, setHeart] = useHeart() 
    const [auth, setAuth] = useAuth() 
    const navigate = useNavigate() 
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const totalPrice = () => {
        let total = 0
        heart?.forEach(item => {
            total += item.price
        })
        return total
    }

    function removeHeartItem(cid) {
        let updatedHeart = [...heart]; 
        const index = updatedHeart.findIndex((item) => item._id === cid);
        if (index !== -1) {
            updatedHeart.splice(index, 1); 
            setHeart(updatedHeart); 
            localStorage.setItem('heart', JSON.stringify(updatedHeart)); 
            const loginData = JSON.parse(localStorage.getItem('login'));
            if (loginData?.user?.email) {
                const userEmail = loginData.user.email;
                const heartKey = `heart_${userEmail}`;
                localStorage.setItem(heartKey, JSON.stringify(updatedHeart));
            }

            console.log('Updated Heart List:', updatedHeart);
        }
    }

    return (
        <div style={{ paddingTop: "135px" }}>
            <div
        className="bg-secondary bg-opacity-10 py-4 mb-5"
        style={{ paddingLeft: "10%" }}
      >
        <h4 className="fw-bold">Shop</h4>
        <p>
          Home{" "}
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>{" "}
          <span className="text-secondary"> Wishlist</span>
        </p>
      </div>
            <Container>
                
                {auth.token ? (
                    <Row className='mb-4 mt-5'>
                        <Col md={9}>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th className='w-25'>IMAGE</th>
                                        <th className='w-25'>PRODUCTS</th>
                                        <th className='w-25'>PRICE</th>
                                        <th className='w-25'>EDIT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        heart?.map((c) => {
                                            return (
                                                <tr key={c._id}>
                                                    <td>
                                                        <img className='ax-auto d-block' src={`https://male-fashion-pj3d.onrender.com/api/product/getphoto/${c._id}`} alt="" height={100} width={100} />
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
                            <div className='p-5 bg-secondary bg-opacity-10'>
                            <h4>CART TOTAL</h4>
                            <p>Total | Checkout | Payment</p>
                            <hr />
                            <h6>Total: ₹ {totalPrice()}</h6>
                            <Button variant='success' className='heroButton px-4 py-2 mt-4 rounded-0' onClick={() => navigate('/Dashboard/user/Orders')}>
                                Proceed to Checkout
                            </Button>
                            </div>
                        </Col>
                    </Row>
                ) : ""}
            </Container>
        </div>
    )
}

export default Heartitems
