import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel, Card, Button, Container, Col, Row } from "react-bootstrap";

function SingleProduct() {
  const { id } = useParams(); // Extract 'id' from the URL
  const [product, setProduct] = useState(null); // Store product details
  const [loading, setLoading] = useState(true); // Loading state
  const [imageSrc, setImageSrc] = useState(""); // State for image source
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  // Fetch product data by id using Fetch API
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
        console.log("Fetched product data:", data);
        setProduct(data.product); // Set product data

        // Fetch image directly using the product ID
        if (data.product && data.product._id) {
          const imgResponse = await fetch(
            `http://localhost:4300/api/product/getphoto/${data.product._id}`
          );
          if (imgResponse.ok) {
            const imgBlob = await imgResponse.blob();
            const imgUrl = URL.createObjectURL(imgBlob);
            setImageSrc(imgUrl); // Set the image source
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

  if (loading) return <p>Loading...</p>; // Show loading state
  if (!product) return <p>Product not found.</p>; // Handle error state
  const colorArray = product?.color[0]?.split(",").filter(Boolean) || [];
  return (
    <div style={{ paddingTop: "200px" }}>
      <Container>
        <div className="mx-4">
          <Row>
            <Col lg={6}>
              <div className="col-md-6">
                {imageSrc ? (
                  <img
                    className="d-block w-100"
                    src={imageSrc}
                    alt="Product image"
                  />
                ) : (
                  <p>No images available</p>
                )}
              </div>
            </Col>
            <Col lg={6}>
              <div className="col-md-6 p-3">
                <div>
                  <h2 className="fw-bold">
                    {product.name || "No name available"}
                  </h2>
                  <p>{product.description || "No description available"}</p>

                  <p>Available Sizes:</p>
                  <div className="size-options">
                    {product ? (
                      // Split the size string into an array
                      product.size.split(",").map((size) => (
                        <div key={size} className="size-option">
                          <label>
                            <input
                              type="radio"
                              value={size}
                              checked={selectedSize === size}
                              onChange={handleSizeChange}
                            />
                            {size}
                          </label>
                        </div>
                      ))
                    ) : (
                      <p>No sizes available</p>
                    )}
                  </div>
                  <div className="color-options d-flex">
                    <p className="mt-2 me-3">Select Color:</p>
                    <div className="color-circles">
                      {colorArray.map((color, index) => (
                        <div
                          key={index}
                          className={`color-circle ${
                            selectedColor === color ? "selected" : ""
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => handleColorSelect(color)}
                        />
                      ))}
                    </div>
                  </div>
                  <h4 className="fw-bold">₹ {product.price || "N/A"}</h4>
                  <Button variant="dark" className="mt-3 px-4 py-2 rounded-0">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default SingleProduct;
