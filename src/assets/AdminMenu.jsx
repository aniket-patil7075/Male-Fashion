import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminMenu() {
  return (
    <div>
      <ListGroup defaultActiveKey="#link1" className="ms-3 p-3">
        <h4 className=" mb-4">Admin Panel</h4>
        <ListGroupItem>
          <Link
            to="/Dashboard/admin/CreateCategory"
            className="text-decoration-none text-dark my-2"
          >
            Create Category
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link
            to="/Dashboard/admin/CreateProduct"
            className="text-decoration-none text-dark my-2"
          >
            Create Product
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link
            to="/Dashboard/admin/Products"
            className="text-decoration-none text-dark my-2"
          >
            Products
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link
            to="/Dashboard/admin/Users"
            className="text-decoration-none text-dark my-2"
          >
            Users
          </Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default AdminMenu;
