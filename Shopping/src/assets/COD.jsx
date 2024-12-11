import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function COD() {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle address input change
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    if (error) setError(""); // Clear error when the user starts typing again
  };

  // Form submit handler with validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (address.trim() === "") {
      setError("Address is required.");
      return;
    }

    // You can process the form data here
    // Example: navigate to a different page
    // navigate("/nextPage");

    alert("Form submitted successfully!"); // Temporary success message
  };

  return (
    <div className="p-3 bg-light border border-secondary border-opacity-10">
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="formGridAddress" className="mb-3">
          <Form.Control
            type="text"
            value={address}
            onChange={handleAddressChange}
            className="p-3 rounded-0 border-dark"
            placeholder="Enter address"
            style={{ color: "#13357b", borderColor: "#13357b" }}
          />
          {error && <div className="text-danger mt-2">{error}</div>}
        </Form.Group>
        
        <Button
          variant="primary"
          type="submit"
          className="heroButton py-2 px-4"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default COD;
