import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminMenu() {
  return (
    <div >
        <ListGroup defaultActiveKey="#link1" className='m-3 p-3'>
            <h4 className='mt-4 mb-4'>Admin Panel</h4>
            <Link to='/Dashboard/admin/CreateCategory'>Create Category</Link>
            <Link to='/Dashboard/admin/CreateProduct'>Create Product</Link>
            <Link to='/Dashboard/admin/Users'>Users</Link>
        </ListGroup>
    </div>
  )
}

export default AdminMenu