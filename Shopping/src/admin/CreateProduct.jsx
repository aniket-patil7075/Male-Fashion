import { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AdminMenu from "../assets/AdminMenu";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormLabel,
  FormCheck,
} from "react-bootstrap";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState(["#000000"]);
  const [newColor, setNewColor] = useState("#000000");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [auth] = useAuth();
  const token = auth.token;
  const navigate = useNavigate();

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

  function addproduct(e) {
    e.preventDefault();
    const prod = new FormData();
    prod.append("name", name);
    prod.append("description", description);
    prod.append("price", price);
    prod.append("size", size);
    prod.append("color", color);
    prod.append("quantity", quantity);
    photo && prod.append("photo", photo);
    prod.append("category", category);
    console.log(prod);

    fetch("http://localhost:4300/api/product/create", {
      method: "post",
      headers: {
        authorization: token,
      },
      body: prod,
    }).then((res1) => {
      res1
        .json()
        .then((res2) => {
          console.log(res2);
          getprods();
          navigate("/Dashboard/admin/Products");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  function getprods() {
    fetch("http://localhost:4300/api/product/getproducts").then((res1) => {
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

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSize((prevSizes) => [...prevSizes, value]); // Add selected size
    } else {
      setSize((prevSizes) => prevSizes.filter((s) => s !== value)); // Remove unselected size
    }
  };

  const handleColorChange = (index, value) => {
    const updatedColor = [...color];
    updatedColor[index] = value;
    setColor(updatedColor);
  };

  const addColorField = () => {
    setColor([...color, ""]);
  };
  const removeColorField = (index) => {
    setColor(color.filter((_, i) => i !== index)); // Remove selected color field
  };

  return (
    <div>
      <Container style={{ paddingTop: "200px" }}>
        <Row className="mx-4">
          <Col md={3}>
            <AdminMenu />
          </Col>
          <Col md={9}>
            <Container>
            <h3 className="fw-bold text-center my-5">ADD NEW PRODUCT</h3>
              <Form onSubmit={(e) => addproduct(e)}>
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                  name={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>--Select Category--</option>
                  {categories?.map((c) => {
                    return (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    );
                  })}
                </Form.Select>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="forHorizontalEmail"
                >
                  <FormLabel column sm={2}>
                    Product Name :
                  </FormLabel>
                  <Col sm={10}>
                    <FormControl
                      type="text"
                      placeholder="Product Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="forHorizontalPrice"
                >
                  <FormLabel column sm={2}>
                    Price :
                  </FormLabel>
                  <Col sm={10}>
                    <FormControl
                      type="text"
                      placeholder="Product Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="forHorizontalSize"
                >
                  <FormLabel column sm={2}>
                    Sizes:
                  </FormLabel>
                  <Col sm={10}>
                    {["S", "M", "L", "XL", "XXL"].map((option) => (
                      <FormCheck
                        key={option}
                        type="checkbox"
                        label={option}
                        value={option}
                        checked={size.includes(option)} // Check if the size is selected
                        onChange={handleSizeChange} // Handle selection changes
                        inline
                      />
                    ))}
                  </Col>
                </Form.Group>

                {/* <Form.Group as={Row} className="mt-3">
                  <FormLabel column sm={2}>
                    Selected Sizes:
                  </FormLabel>
                  <Col sm={10}>
                    <p>{size.length > 0 ? size.join(", ") : "None"}</p>
                  </Col>
                </Form.Group> */}
                <div className="d-flex mb-4">
                  <label className="mt-2">Colors:</label>
                  {color.map((color, index) => (
                    <div key={index} >
                      <input
                        type="color"
                        value={color}
                        onChange={(e) =>
                          handleColorChange(index, e.target.value)
                        }
                        className="mx-2 rounded-color-input"
                      />
                    </div>
                  ))}
                  <button type="button" variant="dark"
                      className="heroButton px-4 py-2 me-2" onClick={() => removeColorField(index)}>
                    Remove
                  </button>
                  <button type="button" variant="dark"
                      className="heroButton px-4 py-2 " onClick={addColorField}>
                    Add Color
                  </button>
                </div>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="forHorizontalQuantity"
                >
                  <FormLabel column sm={2}>
                    Quantity :
                  </FormLabel>
                  <Col sm={10}>
                    <FormControl
                      type="text"
                      placeholder="Product Quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="forHorizontalDescription"
                >
                  <FormLabel column sm={2}>
                    description :
                  </FormLabel>
                  <Col sm={10}>
                    <FormControl
                      type="text"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFile">
                  <FormLabel column sm={2}>
                    Upload Product Picture :
                  </FormLabel>

                  <div className="upload-btn-wrapper">
                    <Button variant="outline-dark" className="upload-button">
                      Choose File
                    </Button>
                    <Form.Control
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      className="upload-input"
                    />
                  </div>
                </Form.Group>

                <div className="mb-3">
                  {photo && (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product"
                        height={"200px"}
                        className="img-fluid"
                      />
                    </div>
                  )}
                </div>
                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button
                      type="submit"
                      variant="dark"
                      className="heroButton mt-4  px-4 py-3"
                    >
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
  );
}

export default CreateProduct;
