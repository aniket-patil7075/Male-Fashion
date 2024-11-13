import React, { useEffect, useState ,useReducer } from "react";
import { useParams } from "react-router-dom";
import { Carousel, Card, Button, Container, Col, Row } from "react-bootstrap";
import { useCart } from "../context/cart";

function SingleProduct() {
  const { id } = useParams(); // Extract 'id' from the URL
  const [product, setProduct] = useState(null); // Store product details
  const [loading, setLoading] = useState(true); // Loading state
  const [imageSrc, setImageSrc] = useState(""); // State for image source
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [cart, setCart] = useCart();

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:4300/api/product/getsingleproduct/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data.product);

        // Fetch image directly using the product ID
        if (data.product && data.product._id) {
          const imgResponse = await fetch(
            `http://localhost:4300/api/product/getphoto/${data.product._id}`
          );
          if (imgResponse.ok) {
            const imgBlob = await imgResponse.blob();
            const imgUrl = URL.createObjectURL(imgBlob);
            setImageSrc(imgUrl);
          }
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>; 
  if (!product) return <p>Product not found.</p>; 

  const colorArray = product?.color[0]?.split(",").filter(Boolean) || [];

  const handleCartClick=(item)=>{
    const alreadyInCart = cart.find((prod)=>prod._id === item._id);
    if(alreadyInCart){
      alert("Product is already in your cartlist")
    }else{
      const updatedCart = [...cart,item];
      setCart(updatedCart)
      localStorage.setItem("cart",JSON.stringify(updatedCart))
    }
  }

  return (
    <div className="singleProduct" style={{ paddingTop: "200px" }}>
      <Container>
        <Row>
          <Col lg={4}>
            {imageSrc ? (
              <img
                className="d-block"
                src={imageSrc}
                alt="Product"
                style={{ width: "100%" }}
              />
            ) : (
              <p>No images available</p>
            )}
          </Col>
          <Col lg={8} className="text-start">
            <h2 className="fw-bold">{product.name || "No name available"}</h2>
            <p>{product.description || "No description available"}</p>

            <div className="d-flex align-items-center">
              <p>Available Sizes:</p>
              <div className="ms-3">
                {product.size ? (
                  product.size.split(",").map((size) => (
                    <label key={size} className="me-2">
                      <input
                        type="radio"
                        value={size}
                        checked={selectedSize === size}
                        onChange={handleSizeChange}
                      />{" "}
                      {size}
                    </label>
                  ))
                ) : (
                  <p>No sizes available</p>
                )}
              </div>
            </div>

            <div className="d-flex align-items-center mt-3">
              <p>Select Color:</p>
              <div className="d-flex ms-3">
                {colorArray.map((color, index) => (
                  <div
                    key={index}
                    className={`color-circle ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    style={{
                      backgroundColor: color,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                    onClick={() => handleColorSelect(color)}
                  />
                ))}
              </div>
            </div>

            <h4 className="fw-bold mt-3">₹ {product.price || "N/A"}</h4>
            <Button
              variant="dark"
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem("cart", JSON.stringify([...cart, product]));
              }}
              className="mt-3 px-4 py-2 rounded-0"
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SingleProduct;
