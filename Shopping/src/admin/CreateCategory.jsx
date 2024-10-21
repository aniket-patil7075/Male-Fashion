import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AdminMenu from "../assets/AdminMenu";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Categoryform from "../assets/Categoryform";
import { useAuth } from "../context/auth";
import { Modal } from "react-bootstrap";

function CreateCategory() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdateName] = useState("");
  const [auth] = useAuth();
  const token = auth.token;
  console.log(token);
  function handleSubmit(e) {
    e.preventDefault();
    const data = { name };
    console.log(data);
    fetch("http://localhost:4300/api/category/createcategory", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(data),
    }).then((res1) => {
      res1.json().then((res2) => {
        console.log(res2);
        getAllCategory();
      });
    });
  }

  function getAllCategory() {
    fetch("http://localhost:4300/api/category/getcategory").then((res1) => {
      res1.json().then((res2) => {
        console.log(res2);
        setCategories(res2.category);
      });
    });
  }
  useEffect(() => {
    getAllCategory();
  }, []);

  function handleUpdate(e) {
    e.preventDefault();
    console.log();
    const data = { name: updatedName };
    fetch(`http://localhost:4300/api/category/updatecategory/${selected._id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(data),
    }).then((res1) => {
      res1.json().then((res2) => {
        console.log(res2);
        setSelected(null);
        setUpdateName("");
        setShow(false);
        getAllCategory();
      });
    });
  }

  function handleDelete(id) {
    fetch(`http://localhost:4300/api/category/deletecategory/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(),
    }).then((res1) => {
      res1.json().then((res2) => {
        console.log(res2);
        getAllCategory();
      });
    });
  }

  return (
    <div className="categoryDiv">
      <Container fluid>
        <Row>
          <Col md={3}>
            <AdminMenu />
          </Col>
          <Col md={9}>
            <h1>Create Category</h1>
            <div className="p-3">
              <Categoryform
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <table className="table w-75">
              <caption>All Categories</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => {
                            handleShow();
                            setUpdateName(item.name);
                            setSelected(item);
                          }}
                        >
                          Edit
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Update Category</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Categoryform
                              value={updatedName}
                              setValue={setUpdateName}
                              handleSubmit={handleUpdate}
                            />
                          </Modal.Body>
                        </Modal>
                        <Button
                          variant="danger"
                          className="ms-3"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateCategory;
