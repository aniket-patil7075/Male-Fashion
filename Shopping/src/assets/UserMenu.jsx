import React from 'react'
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

function UserMenu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div  style={{paddingTop:'150px'}}>
        {/* <ListGroup defaultActiveKey="#link1" className='m-3 p-3'>
            <h4 className='mt-4 mb-4'> User Panel </h4>
            <Link to='/Dashboard/user/Profile'>Profile</Link>
            <Link to='/Dashboard/user/Orders'>Orders</Link>
        </ListGroup> */}
        <div>
      {/* <ListGroup defaultActiveKey="#link1" className="ms-3 p-3"> */}
      <h4 className="fw-bold mb-4">USER DASHBOARD</h4>

      <div className="custom-accordion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>PROFILE</Accordion.Header>

            <Accordion.Body>
              <ListGroupItem className="py-2">
                <Link
                  to='/Dashboard/user/Profile'
                  className="text-decoration-none text-secondary"
                >
                  My Profile
                </Link>
              </ListGroupItem>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="custom-accordion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>ORDERS</Accordion.Header>

            <Accordion.Body>
              <ListGroupItem className="py-2">
                <Link
                  to='/Dashboard/user/Orders'
                  className="text-decoration-none text-secondary"
                >
                  My Orders
                </Link>
              </ListGroupItem>

              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
     
    </div>
    </div>
  )
}

export default UserMenu